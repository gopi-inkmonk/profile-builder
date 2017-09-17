import React, { Component } from 'react';
import firebase from 'firebase';
import { logout } from '../helpers/auth';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
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
      name: data.name || '',
      who: data.who || '',
      shortDesc: data.shortDesc || '',
      contact: data.contact || '',
      story: data.story || '',
    });
  };

  render() {
    const { match } = this.props;

    return (
      <div>
        Home
        <button onClick={logout}>Logout</button>
        <nav className="nav">
          <NavLink
            to={`${match.url}/name`}
            className="nav-link"
            activeClassName="active"
          >
            Name
          </NavLink>
          <NavLink to={`${match.url}/who`} className="nav-link">
            Who
          </NavLink>
          <NavLink to={`${match.url}/desc`} className="nav-link">
            Short Description
          </NavLink>
          <NavLink to={`${match.url}/contact`} className="nav-link">
            Contact
          </NavLink>
          <NavLink to={`${match.url}/story`} className="nav-link">
            Story
          </NavLink>
        </nav>
        <Route
          exact
          path={`${match.url}/name`}
          render={() => <GetName name={this.state.name} />}
        />
        <Route
          exact
          path={`${match.url}/who`}
          render={() => <GetWho who={this.state.who} />}
        />
        <Route
          exact
          path={`${match.url}/desc`}
          render={() => <GetShortDesc shortDesc={this.state.shortDesc} />}
        />
        <Route
          exact
          path={`${match.url}/contact`}
          render={() => <GetContact contact={this.state.contact} />}
        />
        <Route
          exact
          path={`${match.url}/story`}
          render={() => <GetStory story={this.state.story} />}
        />
      </div>
    );
  }
}
