import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { saveStory } from '../../helpers/auth';

const defaultStory = { year: null, type: null, story: null };

export default class GetStory extends Component {
  state = {
    errorTextforYear: null,
    errorTextforType: null,
    errorTextforStory: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      list: [defaultStory, defaultStory],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  storyTypeChange(i, key, event, index, value) {
    this.setValue(i, key, value);
  }

  handleChange(i, key, event) {
    const value = event.target.value;
    this.setValue(i, key, value);
  }
  setValue(i, key, value) {
    this.setState({
      list: [
        ...this.state.list.slice(0, i),
        {
          ...this.state.list[i],
          [key]: value,
        },
        ...this.state.list.slice(i + 1),
      ],
    });
  }

  // handleSubmit(event) {
  //   console.log('this will be submitted: ', this.state);
  //   // alert('A name was submitted: ' + this.state.value);
  //   event.preventDefault();
  // }

  handleSubmit(event) {
    event.preventDefault();

    console.log(this.state.list.year);

    // if (!this.state.list.year) {
    //   this.setState({
    //     errorTextforYear: 'Please enter your user contact',
    //   });
    //   return;
    // }
    //
    // if (!this.state.list.type) {
    //   this.setState({
    //     errorTextforType: 'Please enter your user contact',
    //   });
    //   return;
    // }
    //
    // if (!this.state.list.story) {
    //   this.setState({
    //     errorTextforStory: 'Please enter your user contact',
    //   });
    //   return;
    // }

    console.log('this will be submitted: ', this.state.list);

    saveStory(this.state.list).catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(errorCode, errorMessage);

      this.setState({ errorTextforcontact: errorMessage });
    });
  }

  addClick() {
    this.setState({
      list: [...this.state.list, defaultStory],
    });
  }

  removeClick(i) {
    this.setState({
      list: [...this.state.list.slice(0, i), ...this.state.list.slice(i + 1)],
    });
  }

  createUI() {
    return this.state.list.map((item, i) => {
      return (
        <div key={i} className="row">
          <div className="col-sm-2">
            <TextField
              floatingLabelText="Year"
              fullWidth={true}
              type="number"
              min="1900"
              max="9999"
              defaultValue={this.state.list.year}
              errorText={this.state.errorTextforYear}
              value={item.year || ''}
              onChange={this.handleChange.bind(this, i, 'year')}
            />
          </div>
          <div className="col-sm-2">
            <SelectField
              floatingLabelText="Select type"
              style={{ width: '100%' }}
              value={item.type}
              errorText={this.state.errorTextforType}
              onChange={this.storyTypeChange.bind(this, i, 'type')}
            >
              <MenuItem value="Personal" primaryText="Personal" />
              <MenuItem value="Work" primaryText="Work" />
              <MenuItem value="Education" primaryText="Education" />
              <MenuItem value="Project" primaryText="Project" />
            </SelectField>
          </div>
          <div className="col-sm-6">
            <TextField
              floatingLabelText="Story"
              fullWidth={true}
              defaultValue={this.state.list.story}
              errorText={this.state.errorTextforStory}
              value={item.story || ''}
              onChange={this.handleChange.bind(this, i, 'story')}
            />
          </div>
          <div
            className="col-sm-2"
            style={{ display: 'flex', alignItems: 'flex-end' }}
          >
            <RaisedButton
              label="Remove"
              type="button"
              onClick={this.removeClick.bind(this, i)}
            />
          </div>
        </div>
      );
    });
  }

  render() {
    const { isLoaded } = this.props;
    if (isLoaded == null) {
      return <div>Loading...</div>;
    }
    console.log(this.props.story);
    return (
      <form onSubmit={this.handleSubmit}>
        {this.createUI()}
        <RaisedButton label="add more" onClick={this.addClick.bind(this)} />
        <RaisedButton label="Save" primary={true} type="submit" />
      </form>
    );
  }
}
