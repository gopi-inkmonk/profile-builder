import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { saveShortDesc } from '../../helpers/auth';

export default class GetShortDesc extends Component {
  state = {
    shortDesc: null,
    errorTextforshortDesc: null,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.shortDesc !== this.state.shortDesc) {
      this.setState({ shortDesc: nextProps.shortDesc });
    }
  }

  componentWillMount() {
    if (this.props.shortDesc !== this.state.shortDesc) {
      this.setState({ shortDesc: this.props.shortDesc });
    }
  }

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
    console.log(
      'props :',
      this.props.shortDesc,
      'state :',
      this.state.shortDesc
    );
    const { isLoaded } = this.props;
    if (isLoaded == null) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <TextField
            floatingLabelText="Please enter few lines about you"
            fullWidth={true}
            multiLine={true}
            rows={4}
            type="text"
            value={this.state.shortDesc || ''}
            errorText={this.state.errorTextforshortDesc}
            onChange={e => this.setState({ shortDesc: e.target.value })}
          />
          <RaisedButton label="Save" primary={true} type="submit" />
        </form>
      </div>
    );
  }
}
