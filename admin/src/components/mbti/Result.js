import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Subheader from 'material-ui/Subheader';
import Checkbox from 'material-ui/Checkbox';
// import PersonalityType from './PersonalityType';
import { ShowMBTIOnProfile } from '../../helpers/auth';
import { getPersonalityType } from '../../helpers/read';

export default class Result extends Component {
  state = {
    shortDesc: true,
    longDesc: null,
    checked: false,
    PersonalityType: null,
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
    if (this.props.Result !== this.state.PersonalityType) {
      getPersonalityType(this.props.Result).then(data => {
        this.setState({
          PersonalityType: data || [],
        });
      });
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
    const PersonalityType = this.state.PersonalityType;

    if (!PersonalityType) {
      return <div>Loading</div>;
    }
    const title = PersonalityType.title;
    const shortDesc = PersonalityType.shortDesc;
    const similarPeople = PersonalityType.similar;
    const longDesc = PersonalityType.longDesc;

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
        </div>
      </div>
    );
  }
}
