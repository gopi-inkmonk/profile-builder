import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import FontAwesome from 'react-fontawesome';

class LandingPage extends Component {
  render() {
    return (
      <div id="landingPage">
        <Helmet>
          <title>Itsmybio.me | Your professional online bio</title>

          <meta property="og:type" content="website" />
          <meta property="og:title" content="Itsmybio.me" />
          <meta
            property="og:site_name"
            content="Your professional online bio"
          />
          <meta property="og:url" content="https://itsmybio.me" />
          <meta
            property="og:description"
            content="Your professional Bio can speak lot more than your CV. Build your online Bio for free."
          />
          {/* <meta property="og:image" content={this.props.DPImage} /> */}
        </Helmet>

        <div className="banner">
          <div>
            <a href="/">Itsmybio.me</a>
            <div>
              <a href="/">Sign In</a>
              <a href="/">
                Sign Up <FontAwesome name="long-arrow-right" />
              </a>
            </div>
          </div>

          <h3>How do we know</h3>
          <h1>Morarji Desai lived 99 years?</h1>

          <p>
            It is written in their Biography.<br />
            So, Why don't you write your own bio now?
          </p>

          <p>
            Your professional Bio can speak lot more than your CV.<br />
            Build your online <span>Bio</span> for free.
          </p>

          <a href="/">
            Write your Bio for free <FontAwesome name="long-arrow-right" />
          </a>
          <img src={require('../images/macbook.png')} width="495" />
        </div>
      </div>
    );
  }
}

export default LandingPage;
