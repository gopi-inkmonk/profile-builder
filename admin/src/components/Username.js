import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import FontAwesome from 'react-fontawesome';
import { saveUsername } from '../helpers/auth';
import Loader from './Loader';

export default class Username extends Component {
  state = {
    registerError: null,
    loginMessage: null,
    username: '',
    errorTextforUsername: null,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.username !== this.state.username) {
      this.setState({ username: nextProps.username });
    }
  }

  componentWillMount() {
    if (this.props.username !== this.state.username) {
      this.setState({ username: this.props.username });
    }
  }

  componentDidMount() {
    if (this.props.username !== this.state.username) {
      this.setState({ username: this.props.username });
    }
  }

  handleSubmit = e => {
    e.preventDefault();

    if (!this.state.username) {
      this.setState({ errorTextforUsername: 'Please enter your user name' });
      return;
    }

    const re = /^[\w\-]+$/;
    if (!re.test(this.state.username)) {
      this.setState({
        errorTextforUsername:
          'Please avoid using space or special characters in username',
      });
      return;
    }

    saveUsername(this.state.username)
      .then(() => {
        window.location.href = '/home/name';
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode, errorMessage);

        if (errorCode === 'PERMISSION_DENIED') {
          this.setState({
            errorTextforUsername:
              'User name is taken. Please choose another name',
          });
        } else {
          this.setState({ errorTextforUsername: errorMessage });
        }
      });
  };

  render() {
    const { isLoaded } = this.props;
    console.log(isLoaded);
    if (isLoaded == false) {
      return <Loader />;
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          floatingLabelText="User Name"
          fullWidth={true}
          type="text"
          value={this.state.username || ''}
          errorText={this.state.errorTextforUsername}
          onChange={e => this.setState({ username: e.target.value })}
        />

        <div className="formCTA">
          <div className="submitCTA">
            <RaisedButton
              label="Save"
              primary={true}
              type="submit"
              fullWidth={true}
            />
          </div>
        </div>
      </form>
    );
  }
}
