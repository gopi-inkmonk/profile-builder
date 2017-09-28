import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { saveShortDesc } from '../../helpers/auth';
import Loader from '../Loader';

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

    saveShortDesc(this.state.shortDesc)
      .then(() => {
        window.location.href = '/wizard/contact';
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode, errorMessage);

        this.setState({ errorTextforshortDesc: errorMessage });
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
            src={require('../../images/description.png')}
            width="400"
          />
        </div>
        <div className="col-md-6">
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
