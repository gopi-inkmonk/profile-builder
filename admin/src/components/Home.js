import React, { Component } from 'react';
import firebase from 'firebase';
import { logout } from '../helpers/auth';

import GetName from './forms/GetName';
import GetWho from './forms/GetWho';
import GetShortDesc from './forms/GetShortDesc';
import GetContact from './forms/GetContact';
import GetStory from './forms/GetStory';

export default class Home extends Component {
  render() {
    return (
      <div>
        Home
        <button onClick={logout}>Logout</button>
        <div>
          <GetName />
        </div>
        <div>
          <GetWho />
        </div>
        <div>
          <GetShortDesc />
        </div>
        <div>
          <GetContact />
        </div>
        <div>
          <GetStory />
        </div>
      </div>
    );
  }
}
