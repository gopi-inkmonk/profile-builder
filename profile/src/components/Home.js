import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import FontAwesome from 'react-fontawesome';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Contact from './Contact';

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
        <Helmet>
          <title>
            {data.name} - Itsmybio.me
          </title>

          <meta property="og:type" content="website" />
          <meta property="og:title" content={data.name} />
          <meta property="og:site_name" content={`${data.name}'s Online Bio`} />
          <meta
            property="og:url"
            content={`https://itsmybio.me/${this.props.UserName}`}
          />
          <meta property="og:description" content={data.shortDesc} />
          <meta property="og:image" content={this.props.DPImage} />
        </Helmet>

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

          {data.story &&
            <Link
              to={`${match.url}/profile/story`}
              className="btn btn-primary"
              style={{ backgroundColor: `${data.themeColor}` }}
            >
              See More <FontAwesome name="arrow-down" />
            </Link>}

          <Contact contact={data.contact} />
        </div>

        {!data.story && <div />}

        {data.story &&
          <nav className="nav">
            <Link to={`${match.url}/profile/story`} className="nav-link">
              <FontAwesome name="book" />
              <span>Story</span>
            </Link>
            <Link
              to={`${match.url}/profile/work-experience`}
              className="nav-link"
            >
              <FontAwesome name="briefcase" />
              <span>Work Experience</span>
            </Link>
            <Link
              to={`${match.url}/profile/academic-qualification`}
              className="nav-link"
            >
              <FontAwesome name="mortar-board" />
              <span>Academic Qualification</span>
            </Link>
            <Link to={`${match.url}/profile/projects`} className="nav-link">
              <FontAwesome name="black-tie" />
              <span>Projects</span>
            </Link>
          </nav>}
      </div>
    );
  }
}

export default Home;
