import React, { Component } from 'react';
import firebase from 'firebase';
import { logout } from '../helpers/auth';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import Paper from 'material-ui/Paper';
import GetName from './forms/GetName';
import GetWho from './forms/GetWho';
import GetShortDesc from './forms/GetShortDesc';
import GetContact from './forms/GetContact';
import GetStory from './forms/GetStory';
import GetDP from './forms/GetDP';
import GetTheme from './forms/GetTheme';
import Username from './Username';

import {
  getProfileData,
  getGlobalWho,
  getEmail,
  getUserName,
} from '../helpers/read';

export default class Wizard extends Component {
  state = {
    isLoaded: false,
    name: null,
    who: null,
    globalWhoList: null,
    shortDesc: null,
    contact: null,
    story: null,
    email: null,
    username: null,
  };

  componentWillMount() {
    getProfileData(this.getProfileData);
    getGlobalWho(this.getGlobalWho);
    getUserName(this.getUserName);
  }

  getProfileData = data => {
    if (data) {
      this.setState({
        isLoaded: true,
        name: data.name || '',
        who: data.who || '',
        shortDesc: data.shortDesc || '',
        contact: data.contact || '',
        story: data.story || '',
        theme: data.themeColor || '',
      });
    } else {
      this.setState({
        isLoaded: true,
      });
    }
  };

  getGlobalWho = data => {
    this.setState({
      globalWhoList: data || [],
    });
  };

  getUserName = data => {
    this.setState({
      username: data || '',
    });
  };

  render() {
    const { match } = this.props;
    const { isLoaded, username, name, who, shortDesc, contact } = this.state;
    console.log('this.props', this.props);
    console.log(
      'this.state',
      this.state.name,
      this.state.who,
      this.state.shortDesc,
      this.state.contact
    );
    return (
      <div>
        <div className="appHeader">
          <div className="container">
            <div>
              <span className="brand">Itsmybio.me</span>
              {username &&
                <span>
                  {name && who && shortDesc && contact
                    ? <span className="domain live" title="Live">
                        <FontAwesome name="circle" />
                        <a
                          href={`https://Itsmybio.me/${username}`}
                          target="_blank"
                        >
                          Itsmybio.me/{username}
                        </a>
                      </span>
                    : <span className="domain notLive" title="Not yet live">
                        <FontAwesome name="circle" />
                        <span>
                          Itsmybio.me/{username}
                        </span>
                      </span>}
                </span>}
            </div>
            <span>
              {getEmail()}
              <a onClick={logout}>
                <FontAwesome name="power-off" />
              </a>
            </span>
          </div>
        </div>

        <div className="container text-center">
          <nav className="nav progressNav">
            <NavLink
              to={`${match.url}/username`}
              className="nav-link"
              activeClassName="active"
            >
              <span className="progressTitle">User Name</span>
            </NavLink>
            <NavLink to={`${match.url}/name`} className="nav-link">
              <span className="progressTitle">Name</span>
            </NavLink>
            <NavLink to={`${match.url}/dp`} className="nav-link">
              <span className="progressTitle">Profile Picture</span>
            </NavLink>
            <NavLink to={`${match.url}/who`} className="nav-link">
              <span className="progressTitle">Define you</span>
            </NavLink>
            <NavLink to={`${match.url}/desc`} className="nav-link">
              <span className="progressTitle">Description</span>
            </NavLink>
            <NavLink to={`${match.url}/contact`} className="nav-link">
              <span className="progressTitle">Contact</span>
            </NavLink>
            <NavLink to={`${match.url}/story`} className="nav-link">
              <span className="progressTitle">Story</span>
            </NavLink>
            <NavLink to={`${match.url}/theme`} className="nav-link">
              <span className="progressTitle">Theme</span>
            </NavLink>
          </nav>
        </div>

        <div className="container simpleForm">
          {/* <Redirect exact from="/home" to="/home/username" /> */}
          <div className="col-sm-8 col-md-6">
            <Paper zDepth={1} className="simpleFormWrapper">
              {/* <Redirect from={`${match.url}`} to={`${match.url}/username`} /> */}

              <Route
                exact
                path={`${match.url}/username`}
                render={() =>
                  <Username
                    username={this.state.username}
                    isLoaded={isLoaded}
                  />}
              />
              <Route
                exact
                path={`${match.url}/name`}
                render={() =>
                  <GetName name={this.state.name} isLoaded={isLoaded} />}
              />
              <Route
                exact
                path={`${match.url}/dp`}
                render={() => <GetDP isLoaded={isLoaded} />}
              />
              <Route
                exact
                path={`${match.url}/who`}
                render={() =>
                  <GetWho
                    who={this.state.who}
                    globalWhoList={this.state.globalWhoList}
                    isLoaded={isLoaded}
                    getGlobalWho={() => {
                      getProfileData(this.getProfileData);
                      getGlobalWho(this.getGlobalWho);
                    }}
                  />}
              />
              <Route
                exact
                path={`${match.url}/desc`}
                render={() =>
                  <GetShortDesc
                    shortDesc={this.state.shortDesc}
                    isLoaded={isLoaded}
                  />}
              />
              <Route
                exact
                path={`${match.url}/contact`}
                render={() =>
                  <GetContact
                    contact={this.state.contact}
                    isLoaded={isLoaded}
                  />}
              />
              <Route
                exact
                path={`${match.url}/theme`}
                render={() =>
                  <GetTheme theme={this.state.theme} isLoaded={isLoaded} />}
              />
            </Paper>
          </div>
          <div className="col-sm-10">
            <Paper zDepth={1} className="simpleFormWrapper">
              <Route
                exact
                path={`${match.url}/story`}
                render={() =>
                  <GetStory story={this.state.story} isLoaded={isLoaded} />}
              />
            </Paper>
          </div>
        </div>
      </div>
    );
  }
}
