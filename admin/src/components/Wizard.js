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
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import GetName from './forms/GetName';
import GetWho from './forms/GetWho';
import GetShortDesc from './forms/GetShortDesc';
import GetContact from './forms/GetContact';
import GetStory from './forms/GetStory';
import GetDP from './forms/GetDP';
import GetTheme from './forms/GetTheme';
import Username from './Username';
import Result from './mbti/Result';
import Completed from './Completed';
import PTSplash from './mbti/PTSplash';

import {
  getProfileData,
  getGlobalWho,
  getEmail,
  getUserName,
  getMBTIResult,
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
    MBTIResult: null,
  };

  constructor(props) {
    super(props);
    // this.state = { open: false };
  }

  handleToggle = () => this.setState({ open: !this.state.open });
  handleClose = () => this.setState({ open: false });

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
        MBTIResult: data.MBTIResult || '',
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

    return (
      <div>
        <div className="mobileHeader">
          <AppBar
            title="Itsmybio.me"
            titleStyle={{ fontFamily: "'Yesteryear', cursive" }}
            onLeftIconButtonTouchTap={this.handleToggle}
          />
          <Drawer docked={false} open={this.state.open}>
            <AppBar
              // showMenuIconButton={false}
              iconElementLeft={
                <IconButton>
                  <NavigationClose />
                </IconButton>
              }
              onLeftIconButtonTouchTap={this.handleToggle}
            />
            <MenuItem onClick={this.handleClose}>
              <NavLink
                to={`${match.url}/username`}
                className="nav-link"
                activeClassName="active"
              >
                User Name
              </NavLink>
            </MenuItem>
            <MenuItem onClick={this.handleClose}>
              <NavLink to={`${match.url}/name`} className="nav-link">
                Your Name
              </NavLink>
            </MenuItem>
            <MenuItem onClick={this.handleClose}>
              <NavLink to={`${match.url}/dp`} className="nav-link">
                Profile Picture
              </NavLink>
            </MenuItem>
            <MenuItem onClick={this.handleClose}>
              <NavLink to={`${match.url}/who`} className="nav-link">
                Define you
              </NavLink>
            </MenuItem>
            <MenuItem onClick={this.handleClose}>
              <NavLink to={`${match.url}/desc`} className="nav-link">
                Description
              </NavLink>
            </MenuItem>
            <MenuItem onClick={this.handleClose}>
              <NavLink to={`${match.url}/contact`} className="nav-link">
                Contact
              </NavLink>
            </MenuItem>
            <MenuItem onClick={this.handleClose}>
              <NavLink to={`${match.url}/story`} className="nav-link">
                Story
              </NavLink>
            </MenuItem>
            <MenuItem onClick={this.handleClose}>
              <NavLink to={`${match.url}/theme`} className="nav-link">
                Theme
              </NavLink>
            </MenuItem>
            <MenuItem onClick={this.handleClose}>
              {username && name && who && shortDesc && contact
                ? <NavLink to={`${match.url}/finish`} className="nav-link">
                    Share your profile
                  </NavLink>
                : <a className="nav-link disable">Share your profile</a>}
            </MenuItem>
          </Drawer>
        </div>

        <div className="appHeader">
          <div className="container">
            <div>
              <span className="brand">Itsmybio.me</span>
            </div>

            <span>
              {getEmail()}
              <a onClick={logout}>
                <FontAwesome name="power-off" />
              </a>
            </span>
          </div>
        </div>

        <div className="container simpleForm">
          <div className="row">
            <div className="col-md-3 navWrapper">
              <nav className="nav progressNav">
                <NavLink
                  to={`${match.url}/username`}
                  className="nav-link"
                  activeClassName="active"
                >
                  <span className="bullet">1</span>
                  <span className="progressTitle">User Name</span>
                </NavLink>
                <NavLink to={`${match.url}/name`} className="nav-link">
                  <span className="bullet">2</span>
                  <span className="progressTitle">Name</span>
                </NavLink>
                <NavLink to={`${match.url}/dp`} className="nav-link">
                  <span className="bullet">3</span>
                  <span className="progressTitle">Profile Picture</span>
                </NavLink>
                <NavLink to={`${match.url}/who`} className="nav-link">
                  <span className="bullet">4</span>
                  <span className="progressTitle">Define you</span>
                </NavLink>
                <NavLink to={`${match.url}/desc`} className="nav-link">
                  <span className="bullet">5</span>
                  <span className="progressTitle">Description</span>
                </NavLink>
                <NavLink to={`${match.url}/contact`} className="nav-link">
                  <span className="bullet">6</span>
                  <span className="progressTitle">Contact</span>
                </NavLink>
                <NavLink to={`${match.url}/story`} className="nav-link">
                  <span className="bullet">7</span>
                  <span className="progressTitle">Story</span>
                </NavLink>
                <NavLink to={`${match.url}/theme`} className="nav-link">
                  <span className="bullet">8</span>
                  <span className="progressTitle">Theme</span>
                </NavLink>
                {username && name && who && shortDesc && contact
                  ? <NavLink to={`${match.url}/finish`} className="nav-link">
                      <span className="bullet">9</span>
                      <span className="progressTitle">Share your profile</span>
                    </NavLink>
                  : <a className="nav-link disable">
                      <span className="bullet">9</span>
                      <span className="progressTitle">Share your profile</span>
                    </a>}

                <NavLink to={`${match.url}/PT`} className="nav-link">
                  <span className="bullet">10</span>
                  <span className="progressTitle">Personality Test</span>
                </NavLink>
              </nav>
            </div>
            <div className="col-md-9">
              <Paper zDepth={1} className="simpleFormWrapper">
                {username &&
                  <div className="formTopStrip">
                    {name && who && shortDesc && contact
                      ? <span className="domain live" title="Live">
                          <span className="text">You profile is LIVE now</span>
                          <FontAwesome name="circle" />
                          <a
                            href={`https://Itsmybio.me/${username}`}
                            target="_blank"
                          >
                            Itsmybio.me/{username}
                          </a>
                        </span>
                      : <span className="domain notLive" title="Not yet live">
                          <span className="text">
                            You profile is Not yet LIVE
                          </span>
                          <FontAwesome name="circle" />
                          <span>
                            Itsmybio.me/{username}
                          </span>
                        </span>}
                  </div>}
                <Route
                  exact
                  path={`${match.url}`}
                  render={() =>
                    <Redirect
                      from={`${match.url}`}
                      to={`${match.url}/username`}
                    />}
                />

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
                  path={`${match.url}/story`}
                  render={() =>
                    <GetStory story={this.state.story} isLoaded={isLoaded} />}
                />
                <Route
                  exact
                  path={`${match.url}/theme`}
                  render={() =>
                    <GetTheme theme={this.state.theme} isLoaded={isLoaded} />}
                />
                <Route
                  exact
                  path={`${match.url}/finish`}
                  render={() =>
                    <div
                      style={
                        username && {
                          marginTop: -62,
                          paddingTop: 30,
                          background: '#ffffff',
                          position: 'relative',
                        }
                      }
                    >
                      {username
                        ? <Completed username={username} isLoaded={isLoaded} />
                        : <div>Loading...</div>}
                    </div>}
                />

                <Route
                  exact
                  path={`${match.url}/PT`}
                  render={() => {
                    const { MBTIResult } = this.state;

                    return (
                      <div style={{ paddingTop: 10 }}>
                        {MBTIResult
                          ? <Result Result={MBTIResult} isLoaded={isLoaded} />
                          : <PTSplash />}
                      </div>
                    );
                  }}
                />
              </Paper>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
