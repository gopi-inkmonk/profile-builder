import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from 'react-router-dom';
import Home from './components/Home';
import Story from './components/Story';
import Sidebar from './components/Sidebar';
import firebase from 'firebase';
import { firebaseAuth } from './config/Fire';
import App from './App';
import LandingPage from './components/LandingPage';

class AppRoutes extends Component {
  render() {
    return (
      <Router>
        <div id="profile">
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route
              exact
              path="/:username"
              render={props =>
                <App sidebarWidth={411} {...props} ChildComponent={Home} />}
            />

            <Route
              path="/:username/profile"
              render={props => {
                return (
                  <App sidebarWidth={316} {...props} ChildComponent={Story} />
                );
              }}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default AppRoutes;
