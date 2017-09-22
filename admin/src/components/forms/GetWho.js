import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Chip from 'material-ui/Chip';
import { saveWho } from '../../helpers/auth';
import Loader from '../Loader';

export default class GetWho extends Component {
  state = {
    errorTextforwho: null,
    whoField: '',
  };

  constructor(props) {
    super(props);
    this.state = {
      chipData: [],
      whoList: ['Designer'],
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

  componentWillMount() {
    this.setChipData(this.props);
    this.setWhoList(this.props);
  }

  componentDidMount() {
    this.setChipData(this.props);
    this.setWhoList(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.globalWhoList !== this.state.whoList) {
      this.setWhoList(nextProps);
    }
    if (nextProps.who !== null) {
      if (nextProps.who.length > 0 && nextProps.who !== this.props.who) {
        this.setChipData(nextProps);
      }
    }
  }
  setWhoList = props => {
    if (props.globalWhoList) {
      this.setState({
        whoList: props.globalWhoList.map(item => item.label),
      });
    }
  };
  setChipData = props => {
    if (props.who) {
      this.setState({ chipData: props.who });
    }
  };

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
        key={data.label}
        onRequestDelete={() => this.handleRequestDelete(data.label)}
        style={this.styles.chip}
      >
        {data.label}
      </Chip>
    );
  }

  handleUpdateInput = value => {
    const isPresent = this.state.whoList.includes(value);
    if (isPresent) {
      this.setState({
        whoField: '',
        chipData: [...this.state.chipData, { label: value }],
      });
    } else {
      this.setState({
        whoField: value,
      });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    const { whoField } = this.state;

    if (whoField) {
      this.setState({
        whoField: '',
        chipData: [...this.state.chipData, { label: whoField }],
      });
    } else {
      saveWho(this.state.chipData)
        .then(() => {
          console.log('this.props.getGlobalWho() called successfully');
          this.props.getGlobalWho();
        })
        .catch(error => {
          const errorCode = error.code;
          const errorMessage = error.message;

          console.log(errorCode, errorMessage);

          this.setState({ errorTextforwho: errorMessage });
        });
    }
  };

  render() {
    const { chipData, values } = this.state;

    const { isLoaded } = this.props;
    if (isLoaded == false) {
      return <Loader />;
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <AutoComplete
            floatingLabelText="Please enter your who"
            filter={AutoComplete.fuzzyFilter}
            fullWidth={true}
            dataSource={this.state.whoList.filter(
              x => !chipData.map(x => x.label).includes(x)
            )}
            searchText={this.state.whoField}
            onUpdateInput={this.handleUpdateInput}
          />
          <div style={this.styles.wrapper}>
            {this.state.chipData.map(this.renderChip, this)}
          </div>

          <RaisedButton
            label="Save"
            primary={true}
            type="submit"
            fullWidth={true}
          />
        </form>
      </div>
    );
  }
}
