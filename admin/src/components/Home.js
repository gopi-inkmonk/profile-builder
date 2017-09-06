import React, { Component } from 'react';
import firebase from 'firebase';
import { logout } from '../helpers/auth';

export default class Home extends Component {
  render() {
    return (
      <div>
        Home
        <button onClick={logout}>Logout</button>
      </div>
    );
  }
}
