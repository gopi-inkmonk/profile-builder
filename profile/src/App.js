import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Story from './components/Story';
import Sidebar from './components/Sidebar';
import firebase from 'firebase';
import { firebaseAuth } from './config/Fire';

class App extends Component {
  render() {
    return (
      <Router>
        <div id="profile">
          <Route
            exact
            path="/"
            render={() =>
              <div>
                <Sidebar imgStyle={{ width: 411 }} />
                <Home />
              </div>}
          />

          <Route
            path="/profile"
            render={props => {
              return (
                <div>
                  <Sidebar imgStyle={{ width: 316 }} />
                  <Story {...props} />
                </div>
              );
            }}
          />
        </div>
      </Router>
    );
  }
}

export default App;
