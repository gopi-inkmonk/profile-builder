import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { saveShortDesc } from '../../helpers/auth';

export default class GetShortDesc extends Component {
  state = {
    shortDesc: null,
    errorTextforshortDesc: null,
  };

  handleSubmit = e => {
    e.preventDefault();

    if (!this.state.shortDesc) {
      this.setState({
        errorTextforshortDesc: 'Please enter your user shortDesc',
      });
      return;
    }

    saveShortDesc(this.state.shortDesc).catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(errorCode, errorMessage);

      this.setState({ errorTextforshortDesc: errorMessage });
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <TextField
            floatingLabelText="Please enter few lines about you"
            fullWidth={true}
            multiLine={true}
            rows={2}
            type="text"
            errorText={this.state.errorTextforshortDesc}
            onChange={e => this.setState({ shortDesc: e.target.value })}
          />
          <RaisedButton label="Save" primary={true} type="submit" />
        </form>
      </div>
    );
  }
}
