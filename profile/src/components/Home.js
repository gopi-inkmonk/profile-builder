import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { getProfileData } from '../helpers/read';

class Home extends Component {
  state = {
    name: null,
    notFOund: false,
  };

  render() {
    const { data, match } = this.props;
    const { notFOund } = this.state;
    if (notFOund) {
      return <div>Unable to find user</div>;
    }
    return (
      <div className="contentWrapper home" style={this.props.style}>
        <div />
        <div className="content">
          <h1>
            {data.name}
          </h1>

          <span className="short-desc">
            {data.who.map((data, index) => {
              return (
                <span key={index}>
                  #{data.label}
                </span>
              );
            })}
          </span>

          <p>
            {data.shortDesc}
          </p>

          <Link to={`${match.url}/profile/story`} className="btn btn-primary">
            See More <FontAwesome name="arrow-down" />
          </Link>
        </div>

        <nav className="nav">
          <Link to={`${match.url}/profile/story`} className="nav-link">
            Story
          </Link>
          <Link
            to={`${match.url}/profile/work-experience`}
            className="nav-link"
          >
            Work Experiance
          </Link>
          <Link
            to={`${match.url}/profile/academic-qualification`}
            className="nav-link"
          >
            Acadamic Qualification
          </Link>
          <Link to={`${match.url}/profile/projects`} className="nav-link">
            Projects
          </Link>
        </nav>
      </div>
    );
  }
}

export default Home;
