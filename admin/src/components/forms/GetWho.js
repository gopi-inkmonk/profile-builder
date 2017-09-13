import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { saveWho } from '../../helpers/auth';

const whoList = [
  'UI/UX designer',
  'Front end developer',
  'Weekend Entrepreneur',
  'Optimistic Fellow',
  'Travel Photographer',
  'Electronics enthusiastic',
];

export default class GetWho extends Component {
  state = {
    who: null,
    errorTextforwho: null,
    values: [],
  };

  handleChange = (event, index, values) => this.setState({ values });

  menuItems(values) {
    return whoList.map(name =>
      <MenuItem
        key={name}
        insetChildren={true}
        checked={values && values.indexOf(name) > -1}
        value={name}
        primaryText={name}
      />
    );
  }

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.values.length === 0) {
      this.setState({ errorTextforwho: 'Please enter your user who' });
      return;
    }

    saveWho(this.state.values).catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(errorCode, errorMessage);

      this.setState({ errorTextforwho: errorMessage });
    });
  };

  render() {
    const { values } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <SelectField
            floatingLabelText="Please enter your who"
            fullWidth={true}
            multiple={true}
            value={values}
            errorText={this.state.errorTextforwho}
            onChange={this.handleChange}
          >
            {this.menuItems(values)}
          </SelectField>

          <RaisedButton label="Save" primary={true} type="submit" />
        </form>
      </div>
    );
  }
}
