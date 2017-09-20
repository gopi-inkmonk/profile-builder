import React, { Component } from 'react';
import firebase from 'firebase';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import LinearProgress from 'material-ui/LinearProgress';
import { saveName } from '../../helpers/auth';
import { getDP } from '../../helpers/read';

export default class GetDP extends Component {
  state = {
    errorTextforDP: null,
    uploadingStatus: null,
    files: [],
    DPImage: null,
    uploadStarted: false,
  };

  constructor(props) {
    super(props);

    this.state = {
      uploadingStatus: 0,
    };
  }

  componentDidMount() {
    if (this.state.uploadStarted == true) {
      this.timer = setTimeout(() => this.progress(5), 1000);
    }
  }

  componentWillMount() {
    getDP().then(url => {
      this.setState({ DPImage: url });
    });
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
    this.setState({ uploadStarted: false });
  }

  progress(uploadingStatus) {
    if (this.state.uploadStarted == true) {
      if (uploadingStatus > 100) {
        this.setState({ uploadingStatus: 100 });
      } else {
        this.setState({ uploadingStatus });
        const diff = Math.random() * 10;
        this.timer = setTimeout(
          () => this.progress(uploadingStatus + diff),
          1000
        );
      }
    }
  }

  handleChange = e => {
    this.setState({ files: e.target.files });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { files } = this.state;
    const uid = firebase.auth().currentUser.uid;
    if (files.length === 0) {
      console.error('no file selected');
      return null;
    }

    // Get file
    const file = files[0];
    console.log('file', file);
    const ext = file.name.split('.').slice(-1)[0];

    // Create a storage ref
    const storageRef = firebase.storage().ref('dp/' + uid);

    //Upload file
    const task = storageRef.put(file);

    const progress = snapshot => {
      const percentage = snapshot.bytesTransferred / snapshot.totalBytes * 100;
      this.setState({
        uploadStarted: true,
        uploadingStatus: percentage,
      });
    };

    // Update progress bar
    task.on(
      'state_changed',
      progress,
      function error(err) {
        console.log('Error Upload');
      },
      function complete() {
        console.log('Upload complete');
      }
    );
  };

  render() {
    const { isLoaded } = this.props;
    if (isLoaded == null) {
      return <div>Loading...</div>;
    }

    const styles = {
      uploadButton: {
        verticalAlign: 'middle',
      },
      uploadInput: {
        cursor: 'pointer',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        width: '100%',
        opacity: 0,
      },
    };
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.state.uploadStarted &&
            <div>
              <LinearProgress
                mode="determinate"
                value={this.state.uploadingStatus}
              />
            </div>}

          <RaisedButton
            label="Choose an Image"
            labelPosition="before"
            style={styles.uploadButton}
            containerElement="label"
          >
            <input
              type="file"
              style={styles.uploadInput}
              onChange={this.handleChange}
            />
          </RaisedButton>
          <RaisedButton label="Save" primary={true} type="submit" />
        </form>

        {this.state.DPImage &&
          <div>
            <img src={this.state.DPImage} />
          </div>}
      </div>
    );
  }
}
