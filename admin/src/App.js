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
import Wizard from './components/Wizard';
import SurveyForm from './components/SurveyForm';
import Loader from './components/Loader';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-107210137-1');

const logPageView = () => {
  ReactGA.set({ page: window.location.pathname + window.location.search });
  ReactGA.pageview(window.location.pathname + window.location.search);
};

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
              pathname: '/wizard',
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
      ? <Loader />
      : <BrowserRouter>
          <MuiThemeProvider>
            <div>
              <Switch onUpdate={logPageView}>
                <PublicOnlyRoute
                  path="/"
                  exact
                  authed={this.state.authed}
                  component={Login}
                />
                <PublicOnlyRoute
                  path="/login"
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
                  path="/wizard"
                  component={Wizard}
                />
                <PrivateRoute
                  authed={this.state.authed}
                  path="/mbti"
                  component={SurveyForm}
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
