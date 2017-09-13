import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { saveName } from '../../helpers/auth';

export default class GetName extends Component {
  state = {
    name: null,
    errorTextforname: null,
  };

  handleSubmit = e => {
    e.preventDefault();

    if (!this.state.name) {
      this.setState({ errorTextforname: 'Please enter your user name' });
      return;
    }

    saveName(this.state.name).catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(errorCode, errorMessage);

      this.setState({ errorTextforname: errorMessage });
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <TextField
            floatingLabelText="Please enter your name"
            fullWidth={true}
            type="text"
            errorText={this.state.errorTextforname}
            onChange={e => this.setState({ name: e.target.value })}
          />
          <RaisedButton label="Save" primary={true} type="submit" />
        </form>
      </div>
    );
  }
}
