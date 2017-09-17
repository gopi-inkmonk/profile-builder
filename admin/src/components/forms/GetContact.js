import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { saveContact } from '../../helpers/auth';

export default class GetContact extends Component {
  state = {
    email: null,
    phone: null,
    social: null,
    errorTextforemail: null,
    errorTextforphone: null,
    errorTextforsocial: null,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.contact !== this.state.contact) {
      this.setState({ contact: nextProps.contact });
    }
  }

  handleSubmit = e => {
    e.preventDefault();

    if (!this.state.email) {
      this.setState({
        errorTextforemail: 'Please enter your user contact',
      });
      return;
    }
    if (!this.state.phone) {
      this.setState({
        errorTextforphone: 'Please enter your user contact',
      });
      return;
    }
    if (!this.state.social) {
      this.setState({
        errorTextforsocial: 'Please enter your user contact',
      });
      return;
    }

    saveContact(
      this.state.email,
      this.state.phone,
      this.state.social
    ).catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(errorCode, errorMessage);

      this.setState({ errorTextforcontact: errorMessage });
    });
  };

  render() {
    console.log('props :', this.props.contact, 'state :', this.state.contact);
    if (this.props.contact == null) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <TextField
            floatingLabelText="Please enter your email"
            fullWidth={true}
            type="email"
            defaultValue={this.props.contact.email}
            errorText={this.state.errorTextforemail}
            onChange={e => this.setState({ email: e.target.value })}
          />
          <TextField
            floatingLabelText="Please enter your phone number"
            fullWidth={true}
            type="tel"
            defaultValue={this.props.contact.phone}
            errorText={this.state.errorTextforphone}
            onChange={e => this.setState({ phone: e.target.value })}
          />
          <TextField
            floatingLabelText="Please enter your social id"
            fullWidth={true}
            type="url"
            defaultValue={this.props.contact.social}
            errorText={this.state.errorTextforsocial}
            onChange={e => this.setState({ social: e.target.value })}
          />
          <RaisedButton label="Save" primary={true} type="submit" />
        </form>
      </div>
    );
  }
}
