import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Subheader from 'material-ui/Subheader';
import Checkbox from 'material-ui/Checkbox';
import PersonalityType from './PersonalityType';
import { ShowMBTIOnProfile } from '../../helpers/auth';

export default class Result extends Component {
  state = {
    shortDesc: true,
    longDesc: null,
    checked: false,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.isAddedtoProf !== this.state.checked) {
      this.setState({ checked: nextProps.isAddedtoProf });
    }
  }

  componentWillMount() {
    if (this.props.isAddedtoProf !== this.state.checked) {
      this.setState({ checked: this.props.isAddedtoProf });
    }
  }

  componentDidMount() {
    if (this.props.isAddedtoProf !== this.state.checked) {
      this.setState({ checked: this.props.isAddedtoProf });
    }
  }

  showLongDesc = () => {
    this.setState({
      shortDesc: null,
      longDesc: true,
    });
  };
  hideLongDesc = () => {
    this.setState({
      shortDesc: true,
      longDesc: null,
    });
  };
  updateCheck() {
    this.setState(oldState => {
      return {
        checked: !oldState.checked,
      };
    });

    const val = !this.state.checked;

    ShowMBTIOnProfile(val)
      .then(() => {
        if (val === true) {
          alert('Personality test result added to your profile');
        } else {
          alert('Personality test result removed from your profile');
        }
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode, errorMessage);
      });
  }

  render() {
    const { Result } = this.props;
    const title = PersonalityType[Result].title;
    const shortDesc = PersonalityType[Result].shortDesc;
    const similarPeople = PersonalityType[Result].similar;
    const longDesc = PersonalityType[Result].longDesc;

    if (Result == null) {
      return <div>Please take the test</div>;
    }

    return (
      <div className={`result ${this.state.longDesc ? 'longReadActive' : ''}`}>
        <div className="container">
          <Subheader style={{ padding: 0 }}>
            Result is based on your input
          </Subheader>
          <h1>
            {title}
          </h1>

          {this.state.shortDesc &&
            <p>
              {shortDesc}
            </p>}

          {this.state.longDesc &&
            <div className="longDesc">
              {longDesc.map((item, i) => {
                return (
                  <p key={i}>
                    {item}
                  </p>
                );
              })}
            </div>}

          <div className="footerBTN">
            <span>
              <Checkbox
                label="Show on your profile"
                checked={this.state.checked}
                onCheck={this.updateCheck.bind(this)}
              />
            </span>
            <span>
              <span className="secretBtn">
                <RaisedButton label="Back to app" href="/wizard/PT" />
              </span>

              <RaisedButton
                label="Re-Take test"
                href="/mbti"
                style={{ marginRight: 15 }}
              />

              {this.state.shortDesc
                ? <RaisedButton
                    label="Read detailed report"
                    primary={true}
                    onClick={this.showLongDesc}
                  />
                : <RaisedButton
                    primary={true}
                    label="Hide detailed report"
                    onClick={this.hideLongDesc}
                  />}
            </span>
          </div>

          {/* <div className="people">
            <Subheader style={{ padding: 0 }}>
              Famous people have similar personality as yours
            </Subheader>
            <div className="picWrapper">
              {similarPeople.map((item, i) => {
                const fileName = item.replace(' ', '-');
                return (
                  <span key={i}>
                    <img
                      src={require(`../../images/people-mbti/${fileName}`)}
                      width="200"
                    />
                    <img src={require(`../../images/blank.gif`)} width="200" />
                    <p>
                      {item}
                    </p>
                  </span>
                );
              })}
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}
