import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Chip from 'material-ui/Chip';
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
    whoField: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      chipData: [
        { key: 0, label: 'Angular' },
        { key: 1, label: 'JQuery' },
        { key: 2, label: 'Polymer' },
        { key: 3, label: 'ReactJS' },
      ],
    };
    this.styles = {
      chip: {
        margin: 4,
      },
      wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
      },
    };
  }

  handleRequestDelete = key => {
    if (key === 3) {
      alert('Why would you want to delete React?! :)');
      return;
    }

    this.chipData = this.state.chipData;
    const chipToDelete = this.chipData.map(chip => chip.key).indexOf(key);
    this.chipData.splice(chipToDelete, 1);
    this.setState({ chipData: this.chipData });
  };

  renderChip(data) {
    return (
      <Chip
        key={data.key}
        onRequestDelete={() => this.handleRequestDelete(data.key)}
        style={this.styles.chip}
      >
        {data.label}
      </Chip>
    );
  }

  handleUpdateInput = value => {
    this.setState({
      whoField: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    // if (this.state.values.length === 0) {
    //   this.setState({ errorTextforwho: 'Please enter your user who' });
    //   return;
    // }

    console.log('whoField submitting', this.state.whoField);

    // saveWho(this.state.values).catch(error => {
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //
    //   console.log(errorCode, errorMessage);
    //
    //   this.setState({ errorTextforwho: errorMessage });
    // });
  };

  render() {
    const { values } = this.state;
    console.log('this.state.whoField', this.state.whoField);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <AutoComplete
            floatingLabelText="Please enter your who"
            filter={AutoComplete.fuzzyFilter}
            dataSource={whoList}
            // onUpdateInput={e => this.setState({ whoField: e.target.value })}
            onUpdateInput={this.handleUpdateInput}
          />
          <div style={this.styles.wrapper}>
            {this.state.chipData.map(this.renderChip, this)}
          </div>

          <RaisedButton label="Save" primary={true} type="submit" />
        </form>
      </div>
    );
  }
}
