import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Subheader from 'material-ui/Subheader';

export default class PTSplash extends Component {
  render() {
    return (
      <div id="SurveyFormContainer">
        <div
          id="ContentContainer"
          className="splashScreen"
          style={{ paddingTop: 20 }}
        >
          <span className="subHeading">Free Personality test</span>
          <p>
            Find your personality type<br />in just 4 steps
          </p>

          <span className="subQuestion">
            Answer honestly, even if you don't like the answer.
          </span>

          <span className="btnWrapper">
            <RaisedButton
              label="Start test"
              primary={true}
              className="secondaryCTA"
              href="/mbti"
            />
          </span>
        </div>
      </div>
    );
  }
}
