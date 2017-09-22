import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { saveContact } from '../../helpers/auth';
import Loader from '../Loader';

export default class GetContact extends Component {
  state = {
    contact: {
      email: null,
      phone: null,
      angellist: null,
      behance: null,
      blogger: null,
      dribbble: null,
      etsy: null,
      facebook: null,
      fitbit: null,
      fiverr: null,
      flickr: null,
      foursquare: null,
      github: null,
      gofundme: null,
      goodreads: null,
      Highbrow: null,
      imdb: null,
      indiegogo: null,
      instagram: null,
      kickstarter: null,
      lastfm: null,
      linkedin: null,
      medium: null,
      pinterest: null,
      pocket: null,
      producthunt: null,
      quora: null,
      reddit: null,
      skillshare: null,
      slideshare: null,
      snapchat: null,
      soundcloud: null,
      spotify: null,
      stackoverflow: null,
      strava: null,
      tumblr: null,
      twitch: null,
      twitter: null,
      upwork: null,
      vk: null,
      vsco: null,
      vimeo: null,
      vine: null,
      weibo: null,
      wikipedia: null,
      wordpress: null,
      xing: null,
      yelp: null,
      fivehundredpx: null,
      care: null,
      google: null,
    },
    errorTextforemail: null,
    errorTextforphone: null,
    errorTextforangellist: null,
    errorTextforbehance: null,
    errorTextforblogger: null,
    errorTextfordribbble: null,
    errorTextforetsy: null,
    errorTextforfacebook: null,
    errorTextforfitbit: null,
    errorTextforfiverr: null,
    errorTextforflickr: null,
    errorTextforfoursquare: null,
    errorTextforgithub: null,
    errorTextforgofundme: null,
    errorTextforgoodreads: null,
    errorTextforHighbrow: null,
    errorTextforimdb: null,
    errorTextforindiegogo: null,
    errorTextforinstagram: null,
    errorTextforkickstarter: null,
    errorTextforlastfm: null,
    errorTextforlinkedin: null,
    errorTextformedium: null,
    errorTextforpinterest: null,
    errorTextforpocket: null,
    errorTextforproducthunt: null,
    errorTextforquora: null,
    errorTextforreddit: null,
    errorTextforskillshare: null,
    errorTextforslideshare: null,
    errorTextforsnapchat: null,
    errorTextforsoundcloud: null,
    errorTextforspotify: null,
    errorTextforstackoverflow: null,
    errorTextforstrava: null,
    errorTextfortumblr: null,
    errorTextfortwitch: null,
    errorTextfortwitter: null,
    errorTextforupwork: null,
    errorTextforvk: null,
    errorTextforvsco: null,
    errorTextforvimeo: null,
    errorTextforvine: null,
    errorTextforweibo: null,
    errorTextforwikipedia: null,
    errorTextforwordpress: null,
    errorTextforxing: null,
    errorTextforyelp: null,
    errorTextforfivehundredpx: null,
    errorTextforcare: null,
    errorTextforgoogle: null,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.contact !== this.state.contact) {
      this.setState({ contact: nextProps.contact });
    }
  }

  componentWillMount() {
    if (this.props.contact !== this.state.contact) {
      this.setState({ contact: this.props.contact });
    }
  }

  handleSubmit = e => {
    e.preventDefault();

    if (!this.state.contact.email) {
      this.setState({
        errorTextforemail: 'Please enter your email id',
      });
      return;
    }

    saveContact(
      this.state.contact.email,
      this.state.contact.phone || null,
      this.state.contact.angellist || null,
      this.state.contact.behance || null,
      this.state.contact.blogger || null,
      this.state.contact.dribbble || null,
      this.state.contact.etsy || null,
      this.state.contact.facebook || null,
      this.state.contact.fitbit || null,
      this.state.contact.fiverr || null,
      this.state.contact.flickr || null,
      this.state.contact.foursquare || null,
      this.state.contact.github || null,
      this.state.contact.gofundme || null,
      this.state.contact.goodreads || null,
      this.state.contact.Highbrow || null,
      this.state.contact.imdb || null,
      this.state.contact.indiegogo || null,
      this.state.contact.instagram || null,
      this.state.contact.kickstarter || null,
      this.state.contact.lastfm || null,
      this.state.contact.linkedin || null,
      this.state.contact.medium || null,
      this.state.contact.pinterest || null,
      this.state.contact.pocket || null,
      this.state.contact.producthunt || null,
      this.state.contact.quora || null,
      this.state.contact.reddit || null,
      this.state.contact.skillshare || null,
      this.state.contact.slideshare || null,
      this.state.contact.snapchat || null,
      this.state.contact.soundcloud || null,
      this.state.contact.spotify || null,
      this.state.contact.stackoverflow || null,
      this.state.contact.strava || null,
      this.state.contact.tumblr || null,
      this.state.contact.twitch || null,
      this.state.contact.twitter || null,
      this.state.contact.upwork || null,
      this.state.contact.vk || null,
      this.state.contact.vsco || null,
      this.state.contact.vimeo || null,
      this.state.contact.vine || null,
      this.state.contact.weibo || null,
      this.state.contact.wikipedia || null,
      this.state.contact.wordpress || null,
      this.state.contact.xing || null,
      this.state.contact.yelp || null,
      this.state.contact.fivehundredpx || null,
      this.state.contact.care || null,
      this.state.contact.google || null
    ).catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(errorCode, errorMessage);

      this.setState({ errorTextforcontact: errorMessage });
    });
  };

  render() {
    const { isLoaded } = this.props;
    if (isLoaded == false) {
      return <Loader />;
    }

    console.log(this.state.contact);

    const contact = this.state.contact;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>Contact</h3>
          <TextField
            floatingLabelText="Please enter your email"
            fullWidth={true}
            type="email"
            value={contact.email}
            errorText={this.state.errorTextforemail}
            onChange={e => {
              const { value } = e.target;
              this.setState(prevState => ({
                contact: { ...prevState.contact, email: value },
              }));
            }}
          />
          <TextField
            floatingLabelText="Please enter your phone number"
            fullWidth={true}
            type="tel"
            value={contact.phone}
            errorText={this.state.errorTextforphone}
            onChange={e => {
              const { value } = e.target;
              this.setState(prevState => ({
                contact: { ...prevState.contact, phone: value },
              }));
            }}
          />

          <hr />
          <h3>Social Links</h3>
          <TextField
            floatingLabelText="Please enter your facebook account URL"
            fullWidth={true}
            type="url"
            value={contact.facebook}
            errorText={this.state.errorTextforfacebook}
            onChange={e => {
              const { value } = e.target;
              this.setState(prevState => ({
                contact: { ...prevState.contact, facebook: value },
              }));
            }}
          />
          <TextField
            floatingLabelText="Please enter your twitter account URL"
            fullWidth={true}
            type="url"
            value={contact.twitter}
            errorText={this.state.errorTextfortwitter}
            onChange={e => {
              const { value } = e.target;
              this.setState(prevState => ({
                contact: { ...prevState.contact, twitter: value },
              }));
            }}
          />
          <TextField
            floatingLabelText="Please enter your linkedin account URL"
            fullWidth={true}
            type="url"
            value={contact.linkedin}
            errorText={this.state.errorTextforlinkedin}
            onChange={e => {
              const { value } = e.target;
              this.setState(prevState => ({
                contact: { ...prevState.contact, linkedin: value },
              }));
            }}
          />
          <TextField
            floatingLabelText="Please enter your google+ account URL"
            fullWidth={true}
            type="url"
            value={contact.google}
            errorText={this.state.errorTextforgoogle}
            onChange={e => {
              const { value } = e.target;
              this.setState(prevState => ({
                contact: { ...prevState.contact, google: value },
              }));
            }}
          />
          <TextField
            floatingLabelText="Please enter your instagram account URL"
            fullWidth={true}
            type="url"
            value={contact.instagram}
            errorText={this.state.errorTextforinstagram}
            onChange={e => {
              const { value } = e.target;
              this.setState(prevState => ({
                contact: { ...prevState.contact, instagram: value },
              }));
            }}
          />
          <TextField
            floatingLabelText="Please enter your medium account URL"
            fullWidth={true}
            type="url"
            value={contact.medium}
            errorText={this.state.errorTextformedium}
            onChange={e => {
              const { value } = e.target;
              this.setState(prevState => ({
                contact: { ...prevState.contact, medium: value },
              }));
            }}
          />
          <TextField
            floatingLabelText="Please enter your quora account URL"
            fullWidth={true}
            type="url"
            value={contact.quora}
            errorText={this.state.errorTextforquora}
            onChange={e => {
              const { value } = e.target;
              this.setState(prevState => ({
                contact: { ...prevState.contact, quora: value },
              }));
            }}
          />
          <TextField
            floatingLabelText="Please enter your stackoverflow account URL"
            fullWidth={true}
            type="url"
            value={contact.stackoverflow}
            errorText={this.state.errorTextforstackoverflow}
            onChange={e => {
              const { value } = e.target;
              this.setState(prevState => ({
                contact: { ...prevState.contact, stackoverflow: value },
              }));
            }}
          />
          <TextField
            floatingLabelText="Please enter your fivehundredpx account URL"
            fullWidth={true}
            type="url"
            value={contact.fivehundredpx}
            errorText={this.state.errorTextforfivehundredpx}
            onChange={e => {
              const { value } = e.target;
              this.setState(prevState => ({
                contact: { ...prevState.contact, fivehundredpx: value },
              }));
            }}
          />

          <TextField
            floatingLabelText="Please enter your angel list account URL"
            fullWidth={true}
            type="url"
            value={contact.angellist}
            errorText={this.state.errorTextforangellist}
            onChange={e => {
              const { value } = e.target;
              this.setState(prevState => ({
                contact: { ...prevState.contact, angellist: value },
              }));
            }}
          />
          <TextField
            floatingLabelText="Please enter your behance account URL"
            fullWidth={true}
            type="url"
            value={contact.behance}
            errorText={this.state.errorTextforbehance}
            onChange={e => {
              const { value } = e.target;
              this.setState(prevState => ({
                contact: { ...prevState.contact, behance: value },
              }));
            }}
          />
          <TextField
            floatingLabelText="Please enter your blogger account URL"
            fullWidth={true}
            type="url"
            value={contact.blogger}
            errorText={this.state.errorTextforblogger}
            onChange={e => {
              const { value } = e.target;
              this.setState(prevState => ({
                contact: { ...prevState.contact, blogger: value },
              }));
            }}
          />
          <TextField
            floatingLabelText="Please enter your dribbble account URL"
            fullWidth={true}
            type="url"
            value={contact.dribbble}
            errorText={this.state.errorTextfordribbble}
            onChange={e => {
              const { value } = e.target;
              this.setState(prevState => ({
                contact: { ...prevState.contact, dribbble: value },
              }));
            }}
          />
          <TextField
            floatingLabelText="Please enter your etsy account URL"
            fullWidth={true}
            type="url"
            value={contact.etsy}
            errorText={this.state.errorTextforetsy}
            onChange={e => {
              const { value } = e.target;
              this.setState(prevState => ({
                contact: { ...prevState.contact, etsy: value },
              }));
            }}
          />

          <TextField
            floatingLabelText="Please enter your fitbit account URL"
            fullWidth={true}
            type="url"
            value={contact.fitbit}
            errorText={this.state.errorTextforfitbit}
            onChange={e => {
              const { value } = e.target;
              this.setState(prevState => ({
                contact: { ...prevState.contact, fitbit: value },
              }));
            }}
          />
          <TextField
            floatingLabelText="Please enter your fiverr account URL"
            fullWidth={true}
            type="url"
            value={contact.fiverr}
            errorText={this.state.errorTextforfiverr}
            onChange={e => {
              const { value } = e.target;
              this.setState(prevState => ({
                contact: { ...prevState.contact, fiverr: value },
              }));
            }}
          />
          <TextField
            floatingLabelText="Please enter your flickr account URL"
            fullWidth={true}
            type="url"
            value={contact.flickr}
            errorText={this.state.errorTextforflickr}
            onChange={e => {
              const { value } = e.target;
              this.setState(prevState => ({
                contact: { ...prevState.contact, flickr: value },
              }));
            }}
          />
          <TextField
            floatingLabelText="Please enter your foursquare account URL"
            fullWidth={true}
            type="url"
            value={contact.foursquare}
            errorText={this.state.errorTextforfoursquare}
            onChange={e => {
              const { value } = e.target;
              this.setState(prevState => ({
                contact: { ...prevState.contact, foursquare: value },
              }));
            }}
          />
          <TextField
            floatingLabelText="Please enter your github account URL"
            fullWidth={true}
            type="url"
            value={contact.github}
            errorText={this.state.errorTextforgithub}
            onChange={e => {
              const { value } = e.target;
              this.setState(prevState => ({
                contact: { ...prevState.contact, github: value },
              }));
            }}
          />
          <TextField
            floatingLabelText="Please enter your gofundme account URL"
            fullWidth={true}
            type="url"
            value={contact.gofundme}
            errorText={this.state.errorTextforgofundme}
            onChange={e => {
              const { value } = e.target;
              this.setState(prevState => ({
                contact: { ...prevState.contact, gofundme: value },
              }));
            }}
          />
          <TextField
            floatingLabelText="Please enter your goodreads account URL"
            fullWidth={true}
            type="url"
            value={contact.goodreads}
            errorText={this.state.errorTextforgoodreads}
            onChange={e => {
              const { value } = e.target;
              this.setState(prevState => ({
                contact: { ...prevState.contact, goodreads: value },
              }));
            }}
          />
          <TextField
            floatingLabelText="Please enter your Highbrow account URL"
            fullWidth={true}
            type="url"
            value={contact.Highbrow}
            errorText={this.state.errorTextforHighbrow}
            onChange={e => {
              const { value } = e.target;
              this.setState(prevState => ({
                contact: { ...prevState.contact, Highbrow: value },
              }));
            }}
          />
          <TextField
            floatingLabelText="Please enter your imdb account URL"
            fullWidth={true}
            type="url"
            value={contact.imdb}
            errorText={this.state.errorTextforimdb}
            onChange={e => {
              const { value } = e.target;
              this.setState(prevState => ({
                contact: { ...prevState.contact, imdb: value },
              }));
            }}
          />
          <TextField
            floatingLabelText="Please enter your indiegogo account URL"
            fullWidth={true}
            type="url"
            value={contact.indiegogo}
            errorText={this.state.errorTextforindiegogo}
            onChange={e => {
              const { value } = e.target;
              this.setState(prevState => ({
                contact: { ...prevState.contact, indiegogo: value },
              }));
            }}
          />

          <TextField
            floatingLabelText="Please enter your kickstarter account URL"
            fullWidth={true}
            type="url"
            value={contact.kickstarter}
            errorText={this.state.errorTextforkickstarter}
            onChange={e => {
              const { value } = e.target;
              this.setState(prevState => ({
                contact: { ...prevState.contact, kickstarter: value },
              }));
            }}
          />
          <TextField
            floatingLabelText="Please enter your lastfm account URL"
            fullWidth={true}
            type="url"
            value={contact.lastfm}
            errorText={this.state.errorTextforlastfm}
            onChange={e => {
              const { value } = e.target;
              this.setState(prevState => ({
                contact: { ...prevState.contact, lastfm: value },
              }));
            }}
          />

          <TextField
            floatingLabelText="Please enter your pinterest account URL"
            fullWidth={true}
            type="url"
            value={contact.pinterest}
            errorText={this.state.errorTextforpinterest}
            onChange={e => {
              const { value } = e.target;
              this.setState(prevState => ({
                contact: { ...prevState.contact, pinterest: value },
              }));
            }}
          />
          <TextField
            floatingLabelText="Please enter your pocket account URL"
            fullWidth={true}
            type="url"
            value={contact.pocket}
            errorText={this.state.errorTextforpocket}
            onChange={e => {
              const { value } = e.target;
              this.setState(prevState => ({
                contact: { ...prevState.contact, pocket: value },
              }));
            }}
          />
          <TextField
            floatingLabelText="Please enter your producthunt account URL"
            fullWidth={true}
            type="url"
            value={contact.producthunt}
            errorText={this.state.errorTextforproducthunt}
            onChange={e => {
              const { value } = e.target;
              this.setState(prevState => ({
                contact: { ...prevState.contact, producthunt: value },
              }));
            }}
          />

          <TextField
            floatingLabelText="Please enter your reddit account URL"
            fullWidth={true}
            type="url"
            value={contact.reddit}
            errorText={this.state.errorTextforreddit}
            onChange={e => {
              const { value } = e.target;
              this.setState(prevState => ({
                contact: { ...prevState.contact, reddit: value },
              }));
            }}
          />
          <TextField
            floatingLabelText="Please enter your skillshare account URL"
            fullWidth={true}
            type="url"
            value={contact.skillshare}
            errorText={this.state.errorTextforskillshare}
            onChange={e => {
              const { value } = e.target;
              this.setState(prevState => ({
                contact: { ...prevState.contact, skillshare: value },
              }));
            }}
          />
          <TextField
            floatingLabelText="Please enter your slideshare account URL"
            fullWidth={true}
            type="url"
            value={contact.slideshare}
            errorText={this.state.errorTextforslideshare}
            onChange={e => {
              const { value } = e.target;
              this.setState(prevState => ({
                contact: { ...prevState.contact, slideshare: value },
              }));
            }}
          />
          <TextField
            floatingLabelText="Please enter your snapchat account URL"
            fullWidth={true}
            type="url"
            value={contact.snapchat}
            errorText={this.state.errorTextforsnapchat}
            onChange={e => {
              const { value } = e.target;
              this.setState(prevState => ({
                contact: { ...prevState.contact, snapchat: value },
              }));
            }}
          />
          <TextField
            floatingLabelText="Please enter your soundcloud account URL"
            fullWidth={true}
            type="url"
            value={contact.soundcloud}
            errorText={this.state.errorTextforsoundcloud}
            onChange={e => {
              const { value } = e.target;
              this.setState(prevState => ({
                contact: { ...prevState.contact, soundcloud: value },
              }));
            }}
          />
          <TextField
            floatingLabelText="Please enter your spotify account URL"
            fullWidth={true}
            type="url"
            value={contact.spotify}
            errorText={this.state.errorTextforspotify}
            onChange={e => {
              const { value } = e.target;
              this.setState(prevState => ({
                contact: { ...prevState.contact, spotify: value },
              }));
            }}
          />

          <TextField
            floatingLabelText="Please enter your strava account URL"
            fullWidth={true}
            type="url"
            value={contact.strava}
            errorText={this.state.errorTextforstrava}
            onChange={e => {
              const { value } = e.target;
              this.setState(prevState => ({
                contact: { ...prevState.contact, strava: value },
              }));
            }}
          />
          <TextField
            floatingLabelText="Please enter your tumblr account URL"
            fullWidth={true}
            type="url"
            value={contact.tumblr}
            errorText={this.state.errorTextfortumblr}
            onChange={e => {
              const { value } = e.target;
              this.setState(prevState => ({
                contact: { ...prevState.contact, tumblr: value },
              }));
            }}
          />
          <TextField
            floatingLabelText="Please enter your twitch account URL"
            fullWidth={true}
            type="url"
            value={contact.twitch}
            errorText={this.state.errorTextfortwitch}
            onChange={e => {
              const { value } = e.target;
              this.setState(prevState => ({
                contact: { ...prevState.contact, twitch: value },
              }));
            }}
          />

          <TextField
            floatingLabelText="Please enter your upwork account URL"
            fullWidth={true}
            type="url"
            value={contact.upwork}
            errorText={this.state.errorTextforupwork}
            onChange={e => {
              const { value } = e.target;
              this.setState(prevState => ({
                contact: { ...prevState.contact, upwork: value },
              }));
            }}
          />
          <TextField
            floatingLabelText="Please enter your vk account URL"
            fullWidth={true}
            type="url"
            value={contact.vk}
            errorText={this.state.errorTextforvk}
            onChange={e => {
              const { value } = e.target;
              this.setState(prevState => ({
                contact: { ...prevState.contact, vk: value },
              }));
            }}
          />
          <TextField
            floatingLabelText="Please enter your vsco account URL"
            fullWidth={true}
            type="url"
            value={contact.vsco}
            errorText={this.state.errorTextforvsco}
            onChange={e => {
              const { value } = e.target;
              this.setState(prevState => ({
                contact: { ...prevState.contact, vsco: value },
              }));
            }}
          />
          <TextField
            floatingLabelText="Please enter your vimeo account URL"
            fullWidth={true}
            type="url"
            value={contact.vimeo}
            errorText={this.state.errorTextforvimeo}
            onChange={e => {
              const { value } = e.target;
              this.setState(prevState => ({
                contact: { ...prevState.contact, vimeo: value },
              }));
            }}
          />
          <TextField
            floatingLabelText="Please enter your vine account URL"
            fullWidth={true}
            type="url"
            value={contact.vine}
            errorText={this.state.errorTextforvine}
            onChange={e => {
              const { value } = e.target;
              this.setState(prevState => ({
                contact: { ...prevState.contact, vine: value },
              }));
            }}
          />
          <TextField
            floatingLabelText="Please enter your weibo account URL"
            fullWidth={true}
            type="url"
            value={contact.weibo}
            errorText={this.state.errorTextforweibo}
            onChange={e => {
              const { value } = e.target;
              this.setState(prevState => ({
                contact: { ...prevState.contact, weibo: value },
              }));
            }}
          />
          <TextField
            floatingLabelText="Please enter your wikipedia account URL"
            fullWidth={true}
            type="url"
            value={contact.wikipedia}
            errorText={this.state.errorTextforwikipedia}
            onChange={e => {
              const { value } = e.target;
              this.setState(prevState => ({
                contact: { ...prevState.contact, wikipedia: value },
              }));
            }}
          />
          <TextField
            floatingLabelText="Please enter your wordpress account URL"
            fullWidth={true}
            type="url"
            value={contact.wordpress}
            errorText={this.state.errorTextforwordpress}
            onChange={e => {
              const { value } = e.target;
              this.setState(prevState => ({
                contact: { ...prevState.contact, wordpress: value },
              }));
            }}
          />
          <TextField
            floatingLabelText="Please enter your xing account URL"
            fullWidth={true}
            type="url"
            value={contact.xing}
            errorText={this.state.errorTextforxing}
            onChange={e => {
              const { value } = e.target;
              this.setState(prevState => ({
                contact: { ...prevState.contact, xing: value },
              }));
            }}
          />
          <TextField
            floatingLabelText="Please enter your yelp account URL"
            fullWidth={true}
            type="url"
            value={contact.yelp}
            errorText={this.state.errorTextforyelp}
            onChange={e => {
              const { value } = e.target;
              this.setState(prevState => ({
                contact: { ...prevState.contact, yelp: value },
              }));
            }}
          />

          <TextField
            floatingLabelText="Please enter your care.com account URL"
            fullWidth={true}
            type="url"
            value={contact.care}
            errorText={this.state.errorTextforcare}
            onChange={e => {
              const { value } = e.target;
              this.setState(prevState => ({
                contact: { ...prevState.contact, care: value },
              }));
            }}
          />

          <RaisedButton
            label="Save"
            primary={true}
            type="submit"
            fullWidth={true}
          />
        </form>
      </div>
    );
  }
}
