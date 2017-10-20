import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import FontAwesome from 'react-fontawesome';

import {
  login,
  resetPassword,
  SignInWithFB,
  // SignUpWithFB,
} from '../helpers/auth';

function setErrorMsg(error) {
  return {
    loginMessage: error,
  };
}

export default class Login extends Component {
  state = {
    loginMessage: null,
    email: null,
    password: null,
    errorMessage: null,
    errorTextforEmail: null,
    errorTextforPassword: null,
  };

  // SignUpWithFB = () => {
  //   SignUpWithFB().catch(error => {
  //     // Handle Errors here.
  //     // var errorCode = error.code;
  //     var errorMessage = error.message;
  //     // The email of the user's account used.
  //     // var email = error.email;
  //     // // The firebase.auth.AuthCredential type that was used.
  //     // var credential = error.credential;
  //     // ...
  //     // alert(errorMessage);
  //     this.setState({ errorMessage });
  //   });
  // };

  SignInWithFB = () => {
    SignInWithFB().catch(error => {
      // Handle Errors here.
      // var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      // var email = error.email;
      // // The firebase.auth.AuthCredential type that was used.
      // var credential = error.credential;
      // ...
      // alert(errorMessage);
      this.setState({ errorMessage });
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (!this.state.email) {
      this.setState({ errorTextforEmail: 'Please enter your email' });
      return;
    }
    if (!this.state.password) {
      this.setState({
        errorTextforPassword: 'Please enter your password',
      });
      return;
    }

    login(this.state.email, this.state.password).catch(error => {
      // this.setState(setErrorMsg('Invalid username/password.'));
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === 'auth/user-not-found') {
        this.setState({ errorTextforEmail: 'No account found for your email' });
        // alert('The password is too weak.');
      } else if (errorCode === 'auth/wrong-password') {
        this.setState({
          errorTextforPassword: errorMessage,
          loginMessage: errorMessage,
        });
        console.log(errorMessage);
        // alert(errorMessage);
      } else {
        this.setState({ errorTextforEmail: errorMessage });
        // alert(errorMessage);
      }
    });
  };
  resetPasswordCTA = () => {
    resetPassword(this.state.email)
      .then(
        () => (
          this.setState({ loginMessage: null, errorTextforPassword: null }),
          alert(`Password reset email sent to ${this.state.email}.`)
        )
      )
      .catch(error => this.setState(alert(`Email address not found.`)));
  };
  handleClose = () => {
    this.setState({ errorMessage: null });
  };
  render() {
    const { errorMessage } = this.state;
    return (
      <div className="simpleForm publicOnly">
        <Dialog
          actions={[
            <FlatButton
              label="Discard"
              primary={true}
              onTouchTap={this.handleClose}
            />,
          ]}
          modal={false}
          open={!!errorMessage}
          onRequestClose={this.handleClose}
        >
          {errorMessage}
        </Dialog>
        <div className="text-center" style={{ padding: 30 }}>
          <span className="brand">Itsmybio.me</span>
        </div>

        <div className="col-sm-6 col-md-4">
          <Paper zDepth={1} className="simpleFormWrapper">
            <div className="formTitle">
              <h2>Sign in to continue</h2>
            </div>

            <form onSubmit={this.handleSubmit}>
              <TextField
                floatingLabelText="Email"
                fullWidth={true}
                type="email"
                errorText={this.state.errorTextforEmail}
                onChange={e =>
                  this.setState({
                    email: e.target.value,
                    errorTextforEmail: null,
                  })}
              />
              <TextField
                floatingLabelText="Password"
                type="password"
                fullWidth={true}
                errorText={this.state.errorTextforPassword}
                onChange={e =>
                  this.setState({
                    password: e.target.value,
                    errorTextforPassword: null,
                  })}
              />

              <div className="formCTA">
                <div className="submitCTA">
                  <RaisedButton
                    label="Sign In"
                    primary={true}
                    type="submit"
                    fullWidth={true}
                  />
                </div>

                <div style={{ marginTop: 15 }}>
                  <RaisedButton
                    label="Sign in with Facebook"
                    fullWidth={true}
                    icon={<FontAwesome name="facebook" />}
                    onTouchTap={this.SignInWithFB}
                  />
                </div>
                <div style={{ marginTop: 15 }}>
                  <RaisedButton
                    label="Create an account"
                    fullWidth={true}
                    href="/register"
                  />
                </div>
              </div>

              {this.state.loginMessage &&
                <div className="alert alert-danger" role="alert">
                  <span
                    className="glyphicon glyphicon-exclamation-sign"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Error:</span>
                  &nbsp;
                  {this.state.loginMessage}{' '}
                  <FlatButton
                    label="Forgot password?"
                    fullWidth={true}
                    onClick={this.resetPasswordCTA}
                  />
                </div>}
            </form>
          </Paper>
        </div>
      </div>
    );
  }
}
