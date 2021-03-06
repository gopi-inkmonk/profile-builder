import React, { Component } from 'react';
import firebase from 'firebase';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import LinearProgress from 'material-ui/LinearProgress';
import { saveDP } from '../../helpers/auth';
import { getDP } from '../../helpers/read';
import Loader from '../Loader';

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
    getDP()
      .then(url => {
        console.log(url.length);
        if (url.length > 0) {
          this.setState({ DPImage: url });
          console.log(this.state.DPImage);
        }
      })
      .catch(() => {});
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
    const files = e.target.files;
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

    const complete = () => {
      alert('Upload complete');

      getDP().then(url => {
        this.setState({ DPImage: url });

        saveDP(url)
          .then(() => {
            console.log('DB saved', url);
          })
          .catch(err => {
            console.log('Errow while Image saving', err);
          });

        window.location.href = '/wizard/who';
      });
    };

    // Update progress bar
    task.on(
      'state_changed',
      progress,
      function error(err) {
        console.log('Error Upload', err.message);
        alert('Upload failed, Please make sure file size is below 1MB');
      },
      complete
    );
  };

  render() {
    const { isLoaded } = this.props;

    if (isLoaded == false) {
      return <Loader />;
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
      <div className="row">
        <div className="col-md-6">
          <p>Below image is for representational purpose.</p>
          <img
            className="img-responsive"
            src={require('../../images/dp.png')}
            width="400"
          />
        </div>
        <div className="col-md-6" style={{ paddingTop: 30 }}>
          {this.state.uploadStarted &&
            <div>
              <LinearProgress
                mode="determinate"
                value={this.state.uploadingStatus}
              />
            </div>}

          <RaisedButton
            label={'Upload your profile photo'}
            labelPosition="before"
            fullWidth={true}
            style={styles.uploadButton}
            containerElement="label"
          >
            <input
              type="file"
              style={styles.uploadInput}
              onChange={this.handleChange}
            />
          </RaisedButton>

          <p style={{ color: '#cccccc', marginTop: 10 }}>File size max 1MB</p>

          {this.state.DPImage &&
            <div style={{ marginTop: 25 }}>
              <img src={this.state.DPImage} className="img-responsive" />
            </div>}
        </div>
      </div>
    );
  }
}
