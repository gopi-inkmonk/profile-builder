import React, { Component } from 'react';
import firebase from 'firebase';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { saveName } from '../../helpers/auth';

export default class GetDP extends Component {
  state = {
    errorTextforDP: null,
    uploadingStatus: null,
    files: [],
  };

  handleChange = e => {
    console.log('e', e);
    console.log('e', e.target.files);
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

    // if (!this.state.name) {
    //   this.setState({ errorTextforname: 'Please enter your user name' });
    //   return;
    // }

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
        uploadingStatus: percentage,
      });
    };

    // Update progress bar
    task.on(
      'state_changed',
      progress,
      function error(err) {},
      function complete() {}
    );

    // saveName(this.state.name).catch(error => {
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //
    //   console.log(errorCode, errorMessage);
    //
    //   this.setState({ errorTextforname: errorMessage });
    // });
  };

  render() {
    // const { isLoaded } = this.props;
    // if (isLoaded == null) {
    //   return <div>Loading...</div>;
    // }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.state.uploadingStatus &&
            <div>
              {this.state.uploadingStatus}
            </div>}

          <input type="file" onChange={this.handleChange} />
          <RaisedButton label="Save" primary={true} type="submit" />
        </form>
      </div>
    );
  }
}
