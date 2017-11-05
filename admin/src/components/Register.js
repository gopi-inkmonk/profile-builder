import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import FontAwesome from 'react-fontawesome';
import { auth, SignInWithFB } from '../helpers/auth';

export default class Register extends Component {
  // handleSubmit = e => {
  //   e.preventDefault();
  //   auth(this.email.value, this.pw.value).catch(e =>
  //     this.setState(setErrorMsg(e))
  //   );
  // };

  state = {
    registerError: null,
    loginMessage: null,
    email: null,
    password: null,
    errorTextforEmail: null,
    errorTextforPassword: null,
  };

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

    auth(this.state.email, this.state.password).catch(error => {
      // this.setState(setErrorMsg(e));
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === 'auth/weak-password') {
        this.setState({ errorTextforEmail: 'The password is too weak.' });
        // alert('The password is too weak.');
      } else {
        this.setState({ errorTextforEmail: errorMessage });
        // alert(errorMessage);
      }
    });
  };

  render() {
    return (
      <div className="simpleForm publicOnly">
        <div className="text-center" style={{ padding: 30 }}>
          <span className="brand">Itsmybio.me</span>
        </div>
        <div className="col-sm-4 col-sm-offset-4">
          <Paper zDepth={1} className="simpleFormWrapper">
            <div className="formTitle">
              <h2>Create an Account</h2>
            </div>
            <form onSubmit={this.handleSubmit}>
              <TextField
                floatingLabelText="Email"
                fullWidth={true}
                type="email"
                errorText={this.state.errorTextforEmail}
                onChange={e => this.setState({ email: e.target.value })}
              />
              <TextField
                floatingLabelText="Password"
                type="password"
                fullWidth={true}
                errorText={this.state.errorTextforPassword}
                onChange={e => this.setState({ password: e.target.value })}
              />

              <div className="formCTA">
                <div style={{ marginTop: 15 }} className="submitCTA">
                  <RaisedButton
                    label="Create"
                    primary={true}
                    type="submit"
                    fullWidth={true}
                  />
                </div>

                <div style={{ marginTop: 15 }}>
                  <RaisedButton
                    label="Already have an account?"
                    fullWidth={true}
                    href="/login"
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
              </div>
            </form>
          </Paper>
        </div>
      </div>
    );
  }
}
