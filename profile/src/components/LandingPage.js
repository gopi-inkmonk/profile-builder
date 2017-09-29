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

          <link
            href="https://fonts.googleapis.com/css?family=Volkhov:400,700"
            rel="stylesheet"
          />
          {/* <meta property="og:image" content={this.props.DPImage} /> */}
        </Helmet>

        <div className="pageWrapper">
          <div className="banner">
            <div className="container">
              <div className="topStrip">
                <a className="brand" href="/">
                  Itsmybio.me
                </a>
                <div className="signCTA">
                  <a href="https://account.itsmybio.me">Sign In</a>
                  <a href="https://account.itsmybio.me/register">
                    Sign Up <FontAwesome name="long-arrow-right" />
                  </a>
                </div>
              </div>

              <h3>How do we know</h3>

              <h1>Morar ji Desai lived 99 years?</h1>

              <p>
                It is written in their Biography.<br />
                So, Why don't you write your own bio now?
              </p>

              <p>
                Your professional Bio can speak lot more than your CV.<br />
                Build your online <span>Bio</span> for free.
              </p>

              <a
                href="https://account.itsmybio.me/register"
                className="btn signup"
              >
                <span>Write your Bio for free</span>{' '}
                <FontAwesome name="long-arrow-right" />
              </a>
              <img src={require('../images/macbook.png')} width="495" />
            </div>
          </div>

          <div className="homeContWrapper">
            <h5>More about itsmybio.me</h5>

            <div className="secRow imgRight">
              <div>
                <img src={require('../images/001.png')} width="395" />
              </div>
              <div>
                <p>Get your unique URL</p>
              </div>
            </div>

            <div className="secRow">
              <div>
                <img src={require('../images/002.png')} width="300" />
              </div>
              <div>
                <p>Get your professional online identity</p>
              </div>
            </div>

            <div className="secRow imgRight">
              <div>
                <img src={require('../images/003.png')} width="300" />
              </div>
              <div>
                <p>Present who you are and what you do in one URL</p>
              </div>
            </div>

            <div className="secRow">
              <div>
                <img src={require('../images/004.png')} width="300" />
              </div>
              <div>
                <p>Bio will speak louder than CV</p>
              </div>
            </div>

            <div className="secRow imgRight">
              <div>
                <img src={require('../images/005.png')} width="300" />
              </div>
              <div>
                <p>
                  Write your Bio. So, that people will know what you really are
                </p>
              </div>
            </div>

            <div className="secRow">
              <div>
                <img src={require('../images/006.png')} width="300" />
              </div>
              <div>
                <p>Your profile on itsmybio.me is Mobile friendly</p>
              </div>
            </div>
          </div>

          <div className="footer">
            <span>
              Made with <FontAwesome name="heart" /> in india
            </span>
            <span>
              <FontAwesome name="copyright" /> All rights reserved
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
