import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { saveContact } from '../../helpers/auth';

export default class GetContact extends Component {
  state = {
    contact: {
      email: null,
      phone: null,
      social: null,
    },
    errorTextforemail: null,
    errorTextforphone: null,
    errorTextforsocial: null,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.contact !== this.state.contact) {
      this.setState({ contact: nextProps.contact });
    }
  }

  componentWillMount() {
    if (this.props.contact !== this.state.contact) {
      this.setState({ contact: this.props.contact });
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
    const { isLoaded } = this.props;
    if (isLoaded == null) {
      return <div>Loading...</div>;
    }

    const contact = this.state.contact || { email: '', phone: '', social: '' };
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <TextField
            floatingLabelText="Please enter your email"
            fullWidth={true}
            type="email"
            value={contact.email}
            errorText={this.state.errorTextforemail}
            onChange={e => {
              const { value } = e.target;
              this.setState(prevState => ({
                contact: { ...prevState.contact, email: value },
              }));
            }}
          />
          <TextField
            floatingLabelText="Please enter your phone number"
            fullWidth={true}
            type="tel"
            value={contact.phone}
            errorText={this.state.errorTextforphone}
            onChange={e => {
              const { value } = e.target;
              this.setState(prevState => ({
                contact: { ...prevState.contact, phone: value },
              }));
            }}
          />
          <TextField
            floatingLabelText="Please enter your social id"
            fullWidth={true}
            type="text"
            value={contact.social}
            errorText={this.state.errorTextforsocial}
            onChange={e => {
              const { value } = e.target;
              this.setState(prevState => ({
                contact: { ...prevState.contact, social: value },
              }));
            }}
          />
          <RaisedButton label="Save" primary={true} type="submit" />
        </form>
      </div>
    );
  }
}
