import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import FontAwesome from 'react-fontawesome';
import { auth } from '../helpers/auth';

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
      <div className="simpleForm">
        <div className="text-center" style={{ padding: 30 }}>
          <span className="brand">Itsmybio.me</span>
        </div>
        <div className="col-sm-4 col-sm-offset-4">
          <Paper zDepth={1} className="simpleFormWrapper">
            <div className="formTitle">
              <h2>Create and claim your profile</h2>
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
                <div className="submitCTA">
                  <RaisedButton
                    label="Create"
                    primary={true}
                    type="submit"
                    fullWidth={true}
                  />
                </div>

                <FlatButton
                  label="Already have an account?"
                  fullWidth={true}
                  href="/login"
                />
              </div>
            </form>
          </Paper>
        </div>
      </div>
    );
  }
}
