import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Redirect, Switch, BrowserRouter } from 'react-router-dom';
import firebase from 'firebase';
import { firebaseAuth } from './config/Fire';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Username from './components/Username';
import Home from './components/Home';

const PrivateRoute = ({ component: Component, authed, ...rest }) =>
  <Route
    {...rest}
    render={props =>
      authed
        ? <Component {...props} />
        : <Redirect
            to={{
              pathname: '/',
              state: { from: props.location },
            }}
          />}
  />;

const PublicOnlyRoute = ({ component: Component, authed, ...rest }) =>
  <Route
    {...rest}
    render={props =>
      !authed
        ? <Component {...props} />
        : <Redirect
            to={{
              pathname: '/home',
              state: { from: props.location },
            }}
          />}
  />;

class PageNotFound extends Component {
  render() {
    return <div>PageNotFound</div>;
  }
}

class App extends Component {
  state = {
    authed: false,
    loading: true,
  };
  componentDidMount() {
    this.removeListener = firebaseAuth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
        });
      } else {
        this.setState({
          authed: false,
          loading: false,
        });
      }
    });
  }

  render() {
    return this.state.loading === true
      ? <div>Loading...</div>
      : <BrowserRouter>
          <MuiThemeProvider>
            <div>
              <Switch>
                <PublicOnlyRoute
                  path="/"
                  exact
                  authed={this.state.authed}
                  component={Login}
                />
                <PublicOnlyRoute
                  path="/register"
                  exact
                  authed={this.state.authed}
                  component={Register}
                />
                <PrivateRoute
                  authed={this.state.authed}
                  path="/home"
                  component={Home}
                />
                <PrivateRoute
                  authed={this.state.authed}
                  path="/register/username"
                  component={Username}
                />
                <Route render={() => <PageNotFound />} />
              </Switch>
            </div>
          </MuiThemeProvider>
        </BrowserRouter>;
  }
}

export default App;
