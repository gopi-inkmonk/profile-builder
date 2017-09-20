import React, { Component } from 'react';
import firebase from 'firebase';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import { saveTheme } from '../../helpers/auth';

export default class GetTheme extends Component {
  state = {
    ThemeColor: 'eb3c3c',
  };

  handleChange = e => {
    console.log('e', e.target.value);

    this.setState({ ThemeColor: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    saveTheme(this.state.ThemeColor).then(() => {
      console.log('Theme changed');
    });
  };

  render() {
    const styles = {
      block: {
        maxWidth: 250,
      },
      radioButton: {
        marginBottom: 16,
      },
    };

    const { isLoaded } = this.props;
    if (isLoaded == null) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <RadioButtonGroup
            name="shipSpeed"
            defaultSelected="eb3c3c"
            onChange={this.handleChange}
          >
            <RadioButton
              value="eb3c3c"
              label="Red"
              style={styles.radioButton}
            />
            <RadioButton
              value="9966c3"
              label="Violet"
              style={styles.radioButton}
            />
          </RadioButtonGroup>

          <span
            style={{
              width: 15,
              height: 15,
              display: 'inline-block',
              background: `#${this.state.ThemeColor}`,
            }}
          />

          <RaisedButton label="Save" primary={true} type="submit" />
        </form>
      </div>
    );
  }
}
