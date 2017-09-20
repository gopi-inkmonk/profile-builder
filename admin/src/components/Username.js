import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import FontAwesome from 'react-fontawesome';
import { saveUsername } from '../helpers/auth';
import { checkUsername } from '../helpers/read';

export default class Username extends Component {
  // handleSubmit = e => {
  //   e.preventDefault();
  //   auth(this.email.value, this.pw.value).catch(e =>
  //     this.setState(setErrorMsg(e))
  //   );
  // };

  state = {
    registerError: null,
    loginMessage: null,
    username: null,
    errorTextforUsername: null,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.username !== this.state.username) {
      this.setState({ name: nextProps.username });
    }
  }

  handleSubmit = e => {
    e.preventDefault();

    if (!this.state.username) {
      this.setState({ errorTextforUsername: 'Please enter your user name' });
      return;
    }

    checkUsername(this.state.username).then(() => {
      console.log(this.state.username);
    });

    // saveUsername(this.state.username).catch(error => {
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //
    //   console.log(errorCode, errorMessage);
    //
    //   if (errorCode === 'PERMISSION_DENIED') {
    //     this.setState({
    //       errorTextforUsername:
    //         'User name is taken. Please choose another name',
    //     });
    //   } else {
    //     this.setState({ errorTextforUsername: errorMessage });
    //   }
    // });
  };

  render() {
    const { isLoaded } = this.props;
    if (isLoaded == null) {
      return <div>Loading...</div>;
    }
    return (
      <div className="simpleForm">
        <div className="col-sm-4 col-sm-offset-4">
          <Paper zDepth={1} className="simpleFormWrapper">
            <form onSubmit={this.handleSubmit}>
              <TextField
                floatingLabelText="User Name"
                fullWidth={true}
                type="text"
                defaultValue={this.props.username}
                errorText={this.state.errorTextforUsername}
                onChange={e => this.setState({ username: e.target.value })}
              />

              <div className="formCTA">
                <div className="submitCTA">
                  <RaisedButton label="Save" primary={true} type="submit" />
                </div>
              </div>
            </form>
          </Paper>
        </div>
      </div>
    );
  }
}
