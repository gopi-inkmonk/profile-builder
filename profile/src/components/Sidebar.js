import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class ProgressBar extends Component {
  render() {
    return (
      <div className="ProgressBar">
        <span style={{ width: `${this.props.percentage}%` }} />
      </div>
    );
  }
}

class WorkExperience extends Component {
  render() {
    return (
      <div className="infographic">
        <div className="total-exp">
          <span className="job-title">Total Work Experiance</span>
          <span className="job-duration">2005 - 2017</span>
          <span className="job-exp">12 Years</span>
        </div>
        <div className="job-wrapper">
          <div className="job">
            <span className="job-title">Graphic Designer</span>
            <span className="job-duration">2005 - 2008</span>
            <span className="job-exp">3 Years</span>
          </div>
          <div className="job">
            <span className="job-title">Web Designer</span>
            <span className="job-duration">2008 - 2011</span>
            <span className="job-exp">3 Years</span>
          </div>
          <div className="job">
            <span className="job-title">UI Designer</span>
            <span className="job-duration">2011 - 2017</span>
            <span className="job-exp">3 Years</span>
          </div>
        </div>
        <div className="skills">
          <span className="job-title">Tools proficiency</span>
          <div className="skill">
            <span>Adobe Photoshop</span>
            <ProgressBar percentage="50" />
          </div>
          <div className="skill">
            <span>Adobe Photoshop</span>
            <ProgressBar percentage="50" />
          </div>
          <div className="skill">
            <span>Adobe Photoshop</span>
            <ProgressBar percentage="50" />
          </div>
          <div className="skill">
            <span>Adobe Photoshop</span>
            <ProgressBar percentage="50" />
          </div>
          <div className="skill">
            <span>Adobe Photoshop</span>
            <ProgressBar percentage="50" />
          </div>
        </div>
      </div>
    );
  }
}

class Sidebar extends Component {
  render() {
    const { match, contact } = this.props;
    return (
      <div className="sidebar">
        <div className="home-menu">
          <Link to={`/${match.params.username}`} className="initial">
            G
          </Link>
        </div>

        <div className="profilePicWrapper" style={this.props.imgStyle}>
          <Route
            exact
            path={`/profile/work-experience`}
            render={() => <WorkExperience />}
          />
          <img className="profilePic" src="/images/blank.gif" />
        </div>

        <dl>
          {contact.email &&
            <span>
              <dt>Email </dt>
              <dd>
                <a href="mailto: hello@gopiraja.com">
                  {contact.email}
                </a>
              </dd>
            </span>}

          {contact.phone &&
            <span>
              <dt>Phone </dt>
              <dd>
                <a href="tel: +91 95000 91308">
                  {contact.phone}
                </a>
              </dd>
            </span>}

          <dt>Find me on </dt>
          <dd className="social">
            <a href="/" target="_blank">
              <span className="fa fa-facebook" />
            </a>
            <a href="/" target="_blank">
              <span className="fa fa-linkedin" />
            </a>
            <a href="/" target="_blank">
              <span className="fa fa-dribbble" />
            </a>
          </dd>
        </dl>
      </div>
    );
  }
}

export default Sidebar;
