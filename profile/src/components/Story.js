import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';
import FontAwesome from 'react-fontawesome';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Timeline from './Timeline';

// const data = [
//   {
//     year: '1990',
//     type: 'personal',
//     story: 'Born in Ramanathapuram',
//   },
//   {
//     year: '1990',
//     type: 'personal',
//     story: 'Moved to Madurai',
//   },
//   {
//     year: '1990',
//     type: 'education',
//     story: 'Completed Elementary school in Madurai',
//   },
//   {
//     year: '1990',
//     type: 'personal',
//     story: 'Moved to Ramanathapuram and started living with Grandfather',
//   },
//   {
//     year: '1990',
//     type: 'education',
//     story:
//       'Learnt about electric motor and piston engine from Grandfather on weekends',
//   },
//   {
//     year: '1990',
//     type: 'education',
//     story: 'Dropped out after High School',
//   },
//   {
//     year: '1990',
//     type: 'personal',
//     story: 'Moved to Chennai',
//   },
//   {
//     year: '1990',
//     type: 'work',
//     story:
//       'Got back on my feet. Started working on a Print factory for $13 per month',
//   },
//   {
//     year: '1990',
//     type: 'education',
//     story:
//       'Learnt Graphic design in 3 months duration from a design center nearby',
//   },
//   {
//     year: '1990',
//     type: 'personal',
//     story: 'Started working as a Graphic designer',
//   },
//   {
//     year: '1990',
//     type: 'personal',
//     story: 'Got fired for doing side business with their customers',
//   },
//   {
//     year: '1990',
//     type: 'work',
//     story: 'Started working at a Photo Studio',
//   },
//   {
//     year: '1990',
//     type: 'education',
//     story: 'Joined Image Multimedia for learning Web and Graphic Design',
//   },
//   {
//     year: '1990',
//     type: 'education',
//     story: 'Started doing BCA on Tamilnadu Open University',
//   },
//   {
//     year: '1990',
//     type: 'work',
//     story: 'Started working on another firm as a Web Designer',
//   },
//   {
//     year: '1990',
//     type: 'work',
//     story: 'Quit my job to start a business with a friend & failed',
//   },
//   {
//     year: '1990',
//     type: 'work',
//     story: 'Got back to working as a web designer',
//   },
//   {
//     year: '1990',
//     type: 'work',
//     story: 'Joined in ChargeBee as UI Designer (first employer in startup)',
//   },
//   {
//     year: '1990',
//     type: 'project',
//     story:
//       'Started Oordi Motors as Side Business (Building electric cars in an affordable cost is a vision but started with Door step service pickup and car wash service)',
//   },
//   {
//     year: '1990',
//     type: 'project',
//     story:
//       'One of my friend promised to invest on Oordi Motors to hire technicians and design electronic products for automobiles. Stepped out of ChargeBee. Investor’s personal problem the offer was withdrawn. Failed again.',
//   },
//   {
//     year: '1990',
//     type: 'work',
//     story: 'Joined in Inkmonk and start working as UX Designer',
//   },
//   {
//     year: '1990',
//     type: 'project',
//     story:
//       'I realized that a lot of startups fail and Lots of people face hassles day to day. I believed both of the problems can be solved by connecting them both.',
//   },
//   {
//     year: '1990',
//     type: 'project',
//     story: 'Started StartupMafia.club as pet project',
//   },
//   {
//     year: '1990',
//     type: 'project',
//     story:
//       'Done the first electronic pet project (Leather jacket with wireless light which can sync with motorbike)',
//   },
//   {
//     year: '1990',
//     type: 'project',
//     story:
//       'Since no developers show interest on startupmafia. I learn to code myself and released private beta.',
//   },
//   {
//     year: '1990',
//     type: 'personal',
//     story:
//       'I going to keep exploring about UX Design, Pschycology, Programming, Electronics, Science, Physics, Quantum Mechanics, Beauty of the nature through my motorbike and camera.',
//   },
// ];

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
            Story
          </NavLink>
          <NavLink to={`${match.url}/work-experience`} className="nav-link">
            Work Experience
          </NavLink>
          <NavLink
            to={`${match.url}/academic-qualification`}
            className="nav-link"
          >
            Academic Qualification
          </NavLink>
          <NavLink to={`${match.url}/projects`} className="nav-link">
            Projects
          </NavLink>
          <Link to={`/${match.params.username}`} className="nav-link">
            <FontAwesome name="arrow-up" /> Home
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
