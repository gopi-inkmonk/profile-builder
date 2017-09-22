import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { saveStory } from '../../helpers/auth';
import Loader from '../Loader';

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
  componentWillMount() {
    this.setStory(this.props);
  }
  componentWillReceiveProps(nextProps) {
    this.setStory(nextProps);
  }
  setStory = props => {
    if (props.story) {
      this.setState({
        list: props.story,
      });
    }
  };

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

  handleSubmit(event) {
    event.preventDefault();

    console.log(this.state.list.year);

    console.log('this will be submitted: ', this.state.list);

    saveStory(this.state.list)
      .then(() => {
        window.location.href = '/home/theme';
      })
      .catch(error => {
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
          <div className="col-sm-6 col-md-2">
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
          <div className="col-sm-6 col-md-2">
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
          <div className="col-sm-12 col-md-6">
            <TextField
              floatingLabelText="Story"
              fullWidth={true}
              defaultValue={this.state.list.story}
              errorText={this.state.errorTextforStory}
              value={item.story || ''}
              onChange={this.handleChange.bind(this, i, 'story')}
            />
          </div>
          <div className="col-sm-12 col-md-2 storyCTA">
            <RaisedButton
              label="Remove"
              type="button"
              fullWidth={true}
              onClick={this.removeClick.bind(this, i)}
            />
          </div>
        </div>
      );
    });
  }

  render() {
    const { isLoaded } = this.props;
    if (isLoaded == false) {
      return <Loader />;
    }
    console.log(this.props.story);
    return (
      <form onSubmit={this.handleSubmit}>
        {this.createUI()}
        <div style={{ display: 'flex' }}>
          <div>
            <RaisedButton label="add more" onClick={this.addClick.bind(this)} />
          </div>
          <div style={{ flex: 1 }}>
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
