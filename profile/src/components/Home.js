import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="contentWrapper home" style={this.props.style}>
        <div />
        <div className="content">
          <h1>Gopi Raja</h1>

          <span className="short-desc">
            UI/UX designer | Front end developer | Weekend Entrepreneur |
             Optimistic Fellow | Travel Photographer | Electronics enthusiastic
          </span>

          <p>
            I was born when The term "User Experience" Born (1990). I have a
            passion for pixel perfect, minimal & easy to use interfaces.
          </p>
          <p>I also love visual oriented html / css / jquery.</p>

          <Link to={'/profile/story'} className="btn btn-primary">
            See More <FontAwesome name="arrow-down" />
          </Link>
        </div>

        <nav className="nav">
          <Link to={'/profile/story'} className="nav-link">
            Story
          </Link>
          <Link to={'/profile/work-experience'} className="nav-link">
            Work Experiance
          </Link>
          <Link to={'/profile/academic-qualification'} className="nav-link">
            Acadamic Qualification
          </Link>
          <Link to={'/profile/projects'} className="nav-link">
            Projects
          </Link>
        </nav>
      </div>
    );
  }
}

export default Home;
