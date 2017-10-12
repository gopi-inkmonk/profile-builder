import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Slider from 'material-ui/Slider';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import DatePicker from 'material-ui/DatePicker';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import { findDOMNode } from 'react-dom';
import $ from 'jquery';

const WinWidth = window.innerWidth;
// const ConEle = document.getElementById('ContentContainer').offsetHeight;
const WinHeight = window.innerHeight / 4;
const WinHeightQW = WinHeight * 2;

$(window).on('scroll', function() {
  $('.questionWrapper').each(function() {
    if (isScrolledIntoView($(this))) {
      $(this).addClass('active');
    } else {
      $(this).removeClass('active');
    }
  });
});

function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return elemBottom <= docViewBottom && elemTop >= docViewTop;
}

class SurveyForm extends Component {
  state = {
    Yes: false,
    No: false,
    slider: 0,
    value: null,
  };

  handleChange = (event, index, value) => this.setState({ value });

  handleSlider = (event, value) => {
    this.setState({ slider: value });
  };

  handleYes = () => {
    this.setState({
      Yes: true,
      No: false,
    });
    window.scrollTo(0, 0);
  };

  handleNo = () => {
    this.setState({
      Yes: false,
      No: true,
    });
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <div id="SurveyFormContainer">
        {!this.state.Yes &&
          !this.state.No &&
          <div
            id="ContentContainer"
            className="splashScreen"
            style={{ marginTop: WinHeight, marginBottom: WinHeight }}
          >
            <span className="subHeading">MBTI free test - itsmybio.me</span>
            <p>
              Find your personality type<br />in just 4 clicks
            </p>

            <span className="subQuestion">
              Choose the side that seems most natural to you,<br /> even if you
              don't agree with every description.
            </span>

            <RaisedButton
              label="Back to home"
              className="primaryCTA"
              href="/"
            />
            <RaisedButton
              label="Let's find out"
              primary={true}
              className="secondaryCTA"
              onTouchTap={this.handleYes}
            />
          </div>}

        {this.state.Yes &&
          <div
            id="ContentContainer"
            style={{ marginTop: WinHeight, marginBottom: WinHeight }}
          >
            <div
              className="questionWrapper active"
              style={{ height: WinHeightQW }}
            >
              <div>
                <span className="question">
                  1. Are you outwardly or inwardly focused?
                </span>
                <span className="helpText"> If you :</span>

                <div className="row">
                  <div className="col-sm-6">
                    <Paper className="card">
                      <ul>
                        <li>Could be described as talkative, outgoing</li>
                        <li>Like to be in a fast-paced environment</li>
                        <li>
                          Tend to work out ideas with others, think our loud
                        </li>
                        <li>Enjoy being the center of attention</li>
                      </ul>
                    </Paper>
                  </div>
                  <div className="col-sm-6">
                    <Paper className="card">
                      <ul>
                        <li>Could be described as reserved, private</li>
                        <li>
                          Prefer a slower pace with time for contemplation
                        </li>
                        <li>Tend to think things through inside your head</li>
                        <li>
                          Would rather observe than be the center of attention
                        </li>
                      </ul>
                    </Paper>
                  </div>
                </div>
              </div>
            </div>

            <div className="questionWrapper" style={{ height: WinHeightQW }}>
              <div>
                <span className="question">
                  2. How do you prefer to take in information?
                </span>
                <span className="helpText"> If you :</span>

                <div className="row">
                  <div className="col-sm-6">
                    <Paper className="card">
                      <ul>
                        <li>Focus on the reality of how things are</li>
                        <li>Pay attention to concrete facts and details</li>
                        <li>Prefer ideas that have practical application</li>
                        <li>
                          Like to describe things in a specific, literal way
                        </li>
                      </ul>
                    </Paper>
                  </div>
                  <div className="col-sm-6">
                    <Paper className="card">
                      <ul>
                        <li>
                          Imagine the possibilities of how things could be
                        </li>
                        <li>
                          Notice the big picture, see how everything connects
                        </li>
                        <li>Enjoy ideas and concepts for their own sake</li>
                        <li>
                          Like to describe things in a figurative, poetic way
                        </li>
                      </ul>
                    </Paper>
                  </div>
                </div>
              </div>
            </div>

            <div className="questionWrapper" style={{ height: WinHeightQW }}>
              <div>
                <span className="question">
                  3. How do you prefer to make decisions?
                </span>
                <span className="helpText"> If you :</span>

                <div className="row">
                  <div className="col-sm-6">
                    <Paper className="card">
                      <ul>
                        <li>
                          Make decision in an impersonal way, using logical
                          reasoning
                        </li>
                        <li>Value justice, fairness</li>
                        <li>Enjoy finding the flaws in an argument</li>
                        <li>Could be described as reasonable, level-headed</li>
                      </ul>
                    </Paper>
                  </div>
                  <div className="col-sm-6">
                    <Paper className="card">
                      <ul>
                        <li>
                          Base your decisions on personal values and how your
                          actions affect others
                        </li>
                        <li>Value harmony, forgiveness</li>
                        <li>
                          Like to please others and point out the best in people
                        </li>
                        <li>Could be described as warm, empathetic</li>
                      </ul>
                    </Paper>
                  </div>
                </div>
              </div>
            </div>

            <div className="questionWrapper" style={{ height: WinHeightQW }}>
              <div>
                <span className="question">
                  4. How do you prefer to live your outer life?
                </span>
                <span className="helpText"> If you :</span>

                <div className="row">
                  <div className="col-sm-6">
                    <Paper className="card">
                      <ul>
                        <li>Prefer to have matters settles</li>
                        <li>Think rules and deadlines should be respected</li>
                        <li>
                          Prefer to have detailed, step-by-step instructions
                        </li>
                        <li>
                          Make plans, want to know what you’re getting into
                        </li>
                      </ul>
                    </Paper>
                  </div>
                  <div className="col-sm-6">
                    <Paper className="card">
                      <ul>
                        <li>Prefer to leave your options open</li>
                        <li>See rules and deadlines as flexible</li>
                        <li>Like to improvise and make things up as you go</li>
                        <li>
                          Are spontaneous, enjoy surprises and new situations
                        </li>
                      </ul>
                    </Paper>
                  </div>
                </div>
              </div>
            </div>

            <div className="questionWrapper" style={{ height: WinHeightQW }}>
              <RaisedButton
                label="Show me the result"
                primary={true}
                className="secondaryCTA"
                onTouchTap={this.handleNo}
              />
            </div>
          </div>}

        {this.state.No &&
          <div
            id="ContentContainer"
            style={{ marginTop: WinHeight, marginBottom: WinHeight }}
          >
            <div
              className="questionWrapper active"
              style={{ height: WinHeightQW }}
            >
              <div>
                <span className="question">Email</span>
                <TextField type="email" fullWidth={true} />
              </div>
            </div>

            <div className="questionWrapper" style={{ height: WinHeightQW }}>
              <div>
                <span className="question">Full Name</span>
                <TextField fullWidth={true} />
              </div>
            </div>

            <div className="questionWrapper" style={{ height: WinHeightQW }}>
              <div>
                <span className="question">Gender</span>
                <SelectField
                  value={this.state.value}
                  onChange={this.handleChange}
                  fullWidth={true}
                >
                  <MenuItem value="Male" primaryText="Male" />
                  <MenuItem value="Female" primaryText="Female" />
                  <MenuItem value="Other" primaryText="Other" />
                </SelectField>
              </div>
            </div>

            <div className="questionWrapper" style={{ height: WinHeightQW }}>
              <div>
                <span className="question">Date of Birth</span>
                <DatePicker fullWidth={true} mode="landscape" />
              </div>
            </div>

            <div className="questionWrapper" style={{ height: WinHeightQW }}>
              <div>
                <span className="question">Location</span>
                <TextField fullWidth={true} />
              </div>
            </div>

            <div className="questionWrapper" style={{ height: WinHeightQW }}>
              <RaisedButton
                label="Submit"
                primary={true}
                className="secondaryCTA"
                onTouchTap={this.handleYes}
              />
            </div>
          </div>}
      </div>
    );
  }
}
export default SurveyForm;
