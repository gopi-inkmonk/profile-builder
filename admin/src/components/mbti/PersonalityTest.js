import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Slider from 'material-ui/Slider';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';
import DatePicker from 'material-ui/DatePicker';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import Result from './Result';
import { saveMBTI } from '../../helpers/auth';
import { findDOMNode } from 'react-dom';
import $ from 'jquery';

const WinWidth = window.innerWidth;
// const ConEle = document.getElementById('ContentContainer').offsetHeight;
const WinHeight = window.innerHeight / 4;
const WinHeightQW = WinHeight * 2;
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
  navigator.userAgent
)
  ? true
  : false;

$(window).on('scroll', function() {
  if (!isMobile) {
    $('.questionWrapper').each(function() {
      if (isScrolledIntoView($(this))) {
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    });
  }
});

function winScroll(no) {
  // window.scrollBy(0, WinHeightQW);
  if (!isMobile) {
    $('body,html').delay(200).animate({ scrollTop: WinHeightQW * no }, 300);
  }
}

function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return elemBottom <= docViewBottom && elemTop >= docViewTop;
}

class PersonalityTest extends Component {
  state = {
    Yes: true,
    Result: null,
    value: null,
    formValues: {
      Q1: null,
      Q2: null,
      Q3: null,
      Q4: null,
    },
  };

  handleChange = (event, index, value) => this.setState({ value });

  handleYes = () => {
    this.setState({
      Yes: true,
      No: false,
    });
  };

  handleSubmit = () => {
    if (!this.state.formValues.Q1) {
      console.log('please select Q1');
    }
    if (!this.state.formValues.Q2) {
      console.log('please select Q2');
    }
    if (!this.state.formValues.Q3) {
      console.log('please select Q3');
    }
    if (!this.state.formValues.Q4) {
      console.log('please select Q4');
    }

    const Val =
      this.state.formValues.Q1 +
      this.state.formValues.Q2 +
      this.state.formValues.Q3 +
      this.state.formValues.Q4;

    console.log(Val);

    saveMBTI(Val).catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(errorCode, errorMessage);
    });

    this.setState(() => ({
      Yes: null,
      Result: Val,
    }));
  };

  render() {
    const { formValues } = this.state;
    return (
      <div id="SurveyFormContainer">
        {!this.state.Yes &&
          !this.state.Result &&
          <div
            id="ContentContainer"
            className="splashScreen"
            style={{ marginTop: WinHeight, marginBottom: WinHeight }}
          >
            <span className="subHeading">
              Free Personality test - itsmybio.me
            </span>
            <p>
              Find your personality type<br />in just 4 clicks
            </p>

            <span className="subQuestion">
              Answer honestly, even if you don't like the answer.
            </span>

            <span className="btnWrapper">
              <RaisedButton
                label="Let's find out"
                primary={true}
                className="secondaryCTA"
                onTouchTap={this.handleYes}
              />
              <RaisedButton
                label="Back to home"
                className="primaryCTA"
                href="/"
              />
            </span>
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
                <span className="helpText">
                  Choose the side that seems most natural to you,<br /> even if
                  you don't agree with every description.
                </span>

                <div className="row">
                  <div className="col-sm-6">
                    <button
                      className="Touchable"
                      onClick={() => {
                        this.setState(prevState => ({
                          formValues: { ...prevState.formValues, Q1: 'E' },
                        }));
                        winScroll(1);
                      }}
                    >
                      <Paper
                        className={`card ${formValues.Q1 === 'E'
                          ? 'active'
                          : ''}`}
                      >
                        <Subheader>
                          Option 1 <span className="fa fa-check" />
                        </Subheader>
                        <ul>
                          <li>You could be described as talkative, outgoing</li>
                          <li>Like to be in a fast-paced environment</li>
                          <li>
                            Tend to work out ideas with others, think our loud
                          </li>
                          <li>Enjoy being the center of attention</li>
                        </ul>
                      </Paper>
                    </button>
                  </div>
                  <div className="col-sm-6">
                    <button
                      className="Touchable"
                      onClick={() => {
                        this.setState(prevState => ({
                          formValues: { ...prevState.formValues, Q1: 'I' },
                        }));
                        winScroll(1);
                      }}
                    >
                      <Paper
                        className={`card ${formValues.Q1 === 'I'
                          ? 'active'
                          : ''}`}
                      >
                        <Subheader>
                          Option 2 <span className="fa fa-check" />
                        </Subheader>
                        <ul>
                          <li>You could be described as reserved, private</li>
                          <li>
                            Prefer a slower pace with time for contemplation
                          </li>
                          <li>Tend to think things through inside your head</li>
                          <li>
                            Would rather observe than be the center of attention
                          </li>
                        </ul>
                      </Paper>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="questionWrapper" style={{ height: WinHeightQW }}>
              <div>
                <span className="question">
                  2. How do you prefer to take in information?
                </span>
                <span className="helpText">
                  Choose the side that seems most natural to you,<br /> even if
                  you don't agree with every description.
                </span>

                <div className="row">
                  <div className="col-sm-6">
                    <button
                      className="Touchable"
                      onClick={() => {
                        this.setState(prevState => ({
                          formValues: { ...prevState.formValues, Q2: 'S' },
                        }));
                        winScroll(2);
                      }}
                    >
                      <Paper
                        className={`card ${formValues.Q2 === 'S'
                          ? 'active'
                          : ''}`}
                      >
                        <Subheader>
                          Option 1 <span className="fa fa-check" />
                        </Subheader>
                        <ul>
                          <li>Focus on the reality of how things are</li>
                          <li>Pay attention to concrete facts and details</li>
                          <li>Prefer ideas that have practical application</li>
                          <li>
                            Like to describe things in a specific, literal way
                          </li>
                        </ul>
                      </Paper>
                    </button>
                  </div>
                  <div className="col-sm-6">
                    <button
                      className="Touchable"
                      onClick={() => {
                        this.setState(prevState => ({
                          formValues: { ...prevState.formValues, Q2: 'N' },
                        }));
                        winScroll(2);
                      }}
                    >
                      <Paper
                        className={`card ${formValues.Q2 === 'N'
                          ? 'active'
                          : ''}`}
                      >
                        <Subheader>
                          Option 2 <span className="fa fa-check" />
                        </Subheader>
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
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="questionWrapper" style={{ height: WinHeightQW }}>
              <div>
                <span className="question">
                  3. How do you prefer to make decisions?
                </span>
                <span className="helpText">
                  Choose the side that seems most natural to you,<br /> even if
                  you don't agree with every description.
                </span>

                <div className="row">
                  <div className="col-sm-6">
                    <button
                      className="Touchable"
                      onClick={() => {
                        this.setState(prevState => ({
                          formValues: { ...prevState.formValues, Q3: 'T' },
                        }));
                        winScroll(3);
                      }}
                    >
                      <Paper
                        className={`card ${formValues.Q3 === 'T'
                          ? 'active'
                          : ''}`}
                      >
                        <Subheader>
                          Option 1 <span className="fa fa-check" />
                        </Subheader>
                        <ul>
                          <li>
                            Make decision in an impersonal way, using logical
                            reasoning
                          </li>
                          <li>Value justice, fairness</li>
                          <li>Enjoy finding the flaws in an argument</li>
                          <li>
                            Could be described as reasonable, level-headed
                          </li>
                        </ul>
                      </Paper>
                    </button>
                  </div>
                  <div className="col-sm-6">
                    <button
                      className="Touchable"
                      onClick={() => {
                        this.setState(prevState => ({
                          formValues: { ...prevState.formValues, Q3: 'F' },
                        }));
                        winScroll(3);
                      }}
                    >
                      <Paper
                        className={`card ${formValues.Q3 === 'F'
                          ? 'active'
                          : ''}`}
                      >
                        <Subheader>
                          Option 2 <span className="fa fa-check" />
                        </Subheader>
                        <ul>
                          <li>
                            Base your decisions on personal values and how your
                            actions affect others
                          </li>
                          <li>Value harmony, forgiveness</li>
                          <li>
                            Like to please others and point out the best in
                            people
                          </li>
                          <li>Could be described as warm, empathetic</li>
                        </ul>
                      </Paper>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="questionWrapper" style={{ height: WinHeightQW }}>
              <div>
                <span className="question">
                  4. How do you prefer to live your outer life?
                </span>
                <span className="helpText">
                  Choose the side that seems most natural to you,<br /> even if
                  you don't agree with every description.
                </span>

                <div className="row">
                  <div className="col-sm-6">
                    <button
                      className="Touchable"
                      onClick={() => {
                        this.setState(prevState => ({
                          formValues: { ...prevState.formValues, Q4: 'J' },
                        }));
                        winScroll(4);
                      }}
                    >
                      <Paper
                        className={`card ${formValues.Q4 === 'J'
                          ? 'active'
                          : ''}`}
                      >
                        <Subheader>
                          Option 1 <span className="fa fa-check" />
                        </Subheader>
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
                    </button>
                  </div>
                  <div className="col-sm-6">
                    <button
                      className="Touchable"
                      onClick={() => {
                        this.setState(prevState => ({
                          formValues: { ...prevState.formValues, Q4: 'P' },
                        }));
                        winScroll(4);
                      }}
                    >
                      <Paper
                        className={`card ${formValues.Q4 === 'P'
                          ? 'active'
                          : ''}`}
                      >
                        <Subheader>
                          Option 2 <span className="fa fa-check" />
                        </Subheader>
                        <ul>
                          <li>Prefer to leave your options open</li>
                          <li>See rules and deadlines as flexible</li>
                          <li>
                            Like to improvise and make things up as you go
                          </li>
                          <li>
                            Are spontaneous, enjoy surprises and new situations
                          </li>
                        </ul>
                      </Paper>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="questionWrapper" style={{ height: WinHeightQW }}>
              <RaisedButton
                label="Show me the result"
                primary={true}
                className="secondaryCTA"
                onTouchTap={this.handleSubmit}
              />
            </div>
          </div>}
        {this.state.Result && <Result Result={this.state.Result} />}
      </div>
    );
  }
}
export default PersonalityTest;
