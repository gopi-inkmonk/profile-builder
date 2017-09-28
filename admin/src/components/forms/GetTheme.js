import React, { Component } from 'react';
import firebase from 'firebase';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import ColorPicker from 'react-color-picker';
import 'react-color-picker/index.css';
import { saveTheme } from '../../helpers/auth';
import Loader from '../Loader';

export default class GetTheme extends Component {
  state = {
    ThemeColor: null,
    errorTextforThemeColor: null,
  };

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     ThemeColor: null,
  //   };
  // }

  componentWillReceiveProps(nextProps) {
    if (nextProps.theme !== this.state.ThemeColor) {
      this.setState({ ThemeColor: nextProps.theme });
    }
  }

  componentWillMount() {
    if (this.props.theme !== this.state.ThemeColor) {
      this.setState({ ThemeColor: this.props.theme });
    }
  }

  handleChange = e => {
    this.setState({ ThemeColor: e.target.value });
  };

  onDrag(ThemeColor, c) {
    this.setState({
      ThemeColor,
    });
  }

  handleSubmit = e => {
    e.preventDefault();

    if (!this.state.ThemeColor) {
      this.setState({
        errorTextforThemeColor: 'Please choose your theme color',
      });
      return;
    }

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
            src={require('../../images/theme.png')}
            width="400"
          />
        </div>
        <div className="col-md-6" style={{ paddingTop: 30 }}>
          <form onSubmit={this.handleSubmit}>
            <h3>Picked colors</h3>
            <RadioButtonGroup name="color" onChange={this.handleChange}>
              <RadioButton
                value="#eb3c3c"
                label="Red"
                style={styles.radioButton}
              />
              <RadioButton
                value="#9966c3"
                label="Violet"
                style={styles.radioButton}
              />
            </RadioButtonGroup>

            <h3>Custom Color</h3>
            {/* <TextField
            type="color"
            fullWidth={true}
            value={this.state.ThemeColor}
            name="customColor"
            onChange={this.handleChange}
            errorText={this.state.errorTextforThemeColor}
          /> */}

            <ColorPicker
              value={this.state.ThemeColor}
              onDrag={this.onDrag.bind(this)}
            />

            <span
              style={{
                width: 15,
                height: 15,
                display: 'inline-block',
                background: `#${this.state.ThemeColor}`,
              }}
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
