import React, { Component } from 'react';
import firebase from 'firebase';
import { logout } from '../helpers/auth';

import GetName from './forms/GetName';
import GetWho from './forms/GetWho';
import GetShortDesc from './forms/GetShortDesc';
import GetContact from './forms/GetContact';
import GetStory from './forms/GetStory';

import { getProfileData } from '../helpers/read';

export default class Home extends Component {
  state = {
    name: null,
    who: null,
    shortDesc: null,
    contact: null,
    story: null,
  };

  componentWillMount() {
    getProfileData(this.getProfileData);
  }

  getProfileData = data => {
    console.log('getProfileData', data);
    this.setState({
      name: data.name,
      who: data.who,
    });
  };

  render() {
    return (
      <div>
        Home
        <button onClick={logout}>Logout</button>
        <div>
          <GetName name={this.state.name} />
        </div>
        <div>
          <GetWho who={this.state.who} />
        </div>
        <div>
          <GetShortDesc shortDesc={this.state.shortDesc} />
        </div>
        <div>
          <GetContact contact={this.state.contact} />
        </div>
        <div>
          <GetStory story={this.state.story} />
        </div>
      </div>
    );
  }
}
