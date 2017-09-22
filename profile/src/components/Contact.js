import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class Contact extends Component {
  render() {
    const { contact } = this.props;
    return (
      <dl className="social-profiles">
        {contact.email &&
          <span>
            <dt>Email </dt>
            <dd>
              <a href={`mailto: ${contact.email}`}>
                {contact.email}
              </a>
            </dd>
          </span>}

        {contact.phone &&
          <span>
            <dt>Phone </dt>
            <dd>
              <a href={`tel: ${contact.phone}`}>
                {contact.phone}
              </a>
            </dd>
          </span>}

        <span>
          <dt>Find me on </dt>
          <dd className="social">
            {contact.facebook &&
              <a href={contact.facebook} target="_blank">
                <span className="fa fa-facebook" />
              </a>}

            {contact.linkedin &&
              <a href={contact.linkedin} target="_blank">
                <span className="fa fa-linkedin" />
              </a>}

            {contact.dribbble &&
              <a href={contact.dribbble} target="_blank">
                <span className="fa fa-dribbble" />
              </a>}

            {contact.angellist &&
              <a href={contact.angellist} target="_blank">
                <span className="fa fa-angellist" />
              </a>}
            {contact.behance &&
              <a href={contact.behance} target="_blank">
                <span className="fa fa-behance" />
              </a>}
            {contact.blogger &&
              <a href={contact.blogger} target="_blank">
                <span className="fa fa-blogger" />
              </a>}
            {contact.etsy &&
              <a href={contact.etsy} target="_blank">
                <span className="fa fa-etsy" />
              </a>}
            {contact.fitbit &&
              <a href={contact.fitbit} target="_blank">
                <span className="fa fa-fitbit" />
              </a>}
            {contact.fiverr &&
              <a href={contact.fiverr} target="_blank">
                <span className="fa fa-fiverr" />
              </a>}
            {contact.flickr &&
              <a href={contact.flickr} target="_blank">
                <span className="fa fa-flickr" />
              </a>}
            {contact.foursquare &&
              <a href={contact.foursquare} target="_blank">
                <span className="fa fa-foursquare" />
              </a>}
            {contact.github &&
              <a href={contact.github} target="_blank">
                <span className="fa fa-github" />
              </a>}
            {contact.gofundme &&
              <a href={contact.gofundme} target="_blank">
                <span className="fa fa-gofundme" />
              </a>}
            {contact.goodreads &&
              <a href={contact.goodreads} target="_blank">
                <span className="fa fa-goodreads" />
              </a>}
            {contact.Highbrow &&
              <a href={contact.Highbrow} target="_blank">
                <span className="fa fa-highbrow" />
              </a>}
            {contact.imdb &&
              <a href={contact.imdb} target="_blank">
                <span className="fa fa-imdb" />
              </a>}
            {contact.indiegogo &&
              <a href={contact.indiegogo} target="_blank">
                <span className="fa fa-indiegogo" />
              </a>}
            {contact.instagram &&
              <a href={contact.instagram} target="_blank">
                <span className="fa fa-instagram" />
              </a>}
            {contact.kickstarter &&
              <a href={contact.kickstarter} target="_blank">
                <span className="fa fa-kickstarter" />
              </a>}
            {contact.lastfm &&
              <a href={contact.lastfm} target="_blank">
                <span className="fa fa-lastfm" />
              </a>}
            {contact.medium &&
              <a href={contact.medium} target="_blank">
                <span className="fa fa-medium" />
              </a>}
            {contact.pinterest &&
              <a href={contact.pinterest} target="_blank">
                <span className="fa fa-pinterest-p" />
              </a>}
            {contact.pocket &&
              <a href={contact.pocket} target="_blank">
                <span className="fa fa-get-pocket" />
              </a>}
            {contact.producthunt &&
              <a href={contact.producthunt} target="_blank">
                <span className="fa fa-product-hunt" />
              </a>}
            {contact.quora &&
              <a href={contact.quora} target="_blank">
                <span className="fa fa-quora" />
              </a>}
            {contact.reddit &&
              <a href={contact.reddit} target="_blank">
                <span className="fa fa-reddit-alien" />
              </a>}
            {contact.skillshare &&
              <a href={contact.skillshare} target="_blank">
                <span className="fa fa-skillshare" />
              </a>}
            {contact.slideshare &&
              <a href={contact.slideshare} target="_blank">
                <span className="fa fa-slideshare" />
              </a>}
            {contact.snapchat &&
              <a href={contact.snapchat} target="_blank">
                <span className="fa fa-snapchat" />
              </a>}
            {contact.soundcloud &&
              <a href={contact.soundcloud} target="_blank">
                <span className="fa fa-soundcloud" />
              </a>}
            {contact.spotify &&
              <a href={contact.spotify} target="_blank">
                <span className="fa fa-spotify" />
              </a>}
            {contact.stackoverflow &&
              <a href={contact.stackoverflow} target="_blank">
                <span className="fa fa-stack-overflow" />
              </a>}
            {contact.strava &&
              <a href={contact.strava} target="_blank">
                <span className="fa fa-strava" />
              </a>}
            {contact.tumblr &&
              <a href={contact.tumblr} target="_blank">
                <span className="fa fa-tumblr" />
              </a>}
            {contact.twitch &&
              <a href={contact.twitch} target="_blank">
                <span className="fa fa-twitch" />
              </a>}
            {contact.twitter &&
              <a href={contact.twitter} target="_blank">
                <span className="fa fa-twitter" />
              </a>}
            {contact.upwork &&
              <a href={contact.upwork} target="_blank">
                <span className="fa fa-upwork" />
              </a>}
            {contact.vk &&
              <a href={contact.vk} target="_blank">
                <span className="fa fa-vk" />
              </a>}
            {contact.vsco &&
              <a href={contact.vsco} target="_blank">
                <span className="fa fa-vsco" />
              </a>}
            {contact.vimeo &&
              <a href={contact.vimeo} target="_blank">
                <span className="fa fa-vimeo" />
              </a>}
            {contact.vine &&
              <a href={contact.vine} target="_blank">
                <span className="fa fa-vine" />
              </a>}
            {contact.weibo &&
              <a href={contact.weibo} target="_blank">
                <span className="fa fa-weibo" />
              </a>}
            {contact.wikipedia &&
              <a href={contact.wikipedia} target="_blank">
                <span className="fa fa-wikipedia-w" />
              </a>}
            {contact.wordpress &&
              <a href={contact.wordpress} target="_blank">
                <span className="fa fa-wordpress" />
              </a>}
            {contact.xing &&
              <a href={contact.xing} target="_blank">
                <span className="fa fa-xing" />
              </a>}
            {contact.yelp &&
              <a href={contact.yelp} target="_blank">
                <span className="fa fa-yelp" />
              </a>}
            {contact.fivehundredpx &&
              <a href={contact.fivehundredpx} target="_blank">
                <span className="fa fa-500px" />
              </a>}
            {contact.care &&
              <a href={contact.care} target="_blank">
                <span className="fa fa-care" />
              </a>}
            {contact.google &&
              <a href={contact.google} target="_blank">
                <span className="fa fa-google-plus" />
              </a>}
          </dd>
        </span>
      </dl>
    );
  }
}

export default Contact;
