import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { saveName } from '../../helpers/auth';
import Loader from '../Loader';

export default class GetName extends Component {
  state = {
    name: null,
    errorTextforname: null,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.name !== this.state.name) {
      this.setState({ name: nextProps.name });
    }
  }

  componentWillMount() {
    if (this.props.name !== this.state.name) {
      this.setState({ name: this.props.name });
    }
  }

  handleSubmit = e => {
    e.preventDefault();

    if (!this.state.name) {
      this.setState({ errorTextforname: 'Please enter your user name' });
      return;
    }

    saveName(this.state.name)
      .then(() => {
        window.location.href = '/wizard/dp';
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode, errorMessage);

        this.setState({ errorTextforname: errorMessage });
      });
  };

  render() {
    const { isLoaded } = this.props;
    if (isLoaded == false) {
      return <Loader />;
    }
    return (
      <div className="row">
        <div className="col-md-6">
          <p>
            Below image is for representational purpose.<br />
            Your input will take place where red is appear.
          </p>
          <img
            className="img-responsive"
            src={require('../../images/name.png')}
            width="400"
          />
        </div>
        <div className="col-md-6">
          <form onSubmit={this.handleSubmit}>
            <TextField
              floatingLabelText="Please enter your name"
              fullWidth={true}
              type="text"
              value={this.state.name}
              errorText={this.state.errorTextforname}
              onChange={e => this.setState({ name: e.target.value })}
            />
            <RaisedButton
              label="Save"
              primary={true}
              type="submit"
              fullWidth={true}
            />
          </form>
        </div>
      </div>
    );
  }
}
