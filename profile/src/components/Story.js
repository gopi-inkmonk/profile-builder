import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';
import FontAwesome from 'react-fontawesome';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Timeline from './Timeline';

class Story extends Component {
  render() {
    const { match } = this.props;
    const data = this.props.data.story;
    console.log(data);

    return (
      <div id="story" className="contentWrapper story">
        <nav className="nav">
          <NavLink
            to={`${match.url}/story`}
            className="nav-link"
            activeClassName="active"
          >
            <FontAwesome name="book" />
            <span>Story</span>
          </NavLink>
          <NavLink to={`${match.url}/work-experience`} className="nav-link">
            <FontAwesome name="briefcase" />
            <span>Work Experience</span>
          </NavLink>
          <NavLink
            to={`${match.url}/academic-qualification`}
            className="nav-link"
          >
            <FontAwesome name="mortar-board" />
            <span>Academic Qualification</span>
          </NavLink>
          <NavLink to={`${match.url}/projects`} className="nav-link">
            <FontAwesome name="black-tie" />
            <span>Projects</span>
          </NavLink>
          <Link to={`/${match.params.username}`} className="nav-link">
            <FontAwesome name="arrow-up" />
            <span>Home</span>
          </Link>
        </nav>
        <span className="menuMask" />

        <div className="content">
          <Route
            exact
            path={`${match.url}`}
            render={() => <Timeline data={data} />}
          />
          <Route
            exact
            path={`${match.url}/story`}
            render={() => <Timeline data={data} />}
          />
          <Route
            exact
            path={`${match.url}/work-experience`}
            render={() =>
              <Timeline data={data.filter(o => o.type === 'Work')} />}
          />
          <Route
            exact
            path={`${match.url}/academic-qualification`}
            render={() =>
              <Timeline data={data.filter(o => o.type === 'Education')} />}
          />
          <Route
            exact
            path={`${match.url}/projects`}
            render={() =>
              <Timeline data={data.filter(o => o.type === 'Project')} />}
          />
        </div>
      </div>
    );
  }
}

export default Story;
