import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Loader from './Loader';

export default class Completed extends Component {
  render() {
    const { isLoaded, username } = this.props;
    if (isLoaded == false) {
      return <Loader />;
    }
    return (
      <div className="Completed">
        <img
          className="img-responsive"
          src={require('../images/checked.svg')}
          width="100"
        />
        <h2>Your account created successfully.</h2>
        <h3>You can access your webpage at</h3>
        <RaisedButton
          label={`https://Itsmybio.me/${username}`}
          href={`https://Itsmybio.me/${username}`}
          target="_blank"
          className="URLBtn"
        />

        <hr />

        <p>You can also share your profile on</p>

        {/* Facebook */}
        <FlatButton
          label={<span className="fa fa-facebook" />}
          href={`http://www.facebook.com/sharer.php?u=https://Itsmybio.me/${username}`}
          target="_blank"
        />

        {/* <!-- Google+ --> */}
        <FlatButton
          label={<span className="fa fa-google-plus" />}
          href={`https://plus.google.com/share?url=https://Itsmybio.me/${username}`}
          target="_blank"
        />

        {/* <!-- LinkedIn --> */}
        <FlatButton
          label={<span className="fa fa-linkedin" />}
          href={`http://www.linkedin.com/shareArticle?mini=true&amp;url=https://Itsmybio.me/${username}`}
          target="_blank"
        />

        {/* <!-- Twitter --> */}
        <FlatButton
          label={<span className="fa fa-twitter" />}
          href={`https://twitter.com/share?url=https://Itsmybio.me/${username}&amp;text=Check%20it%20out%20my%20profile%20on%20&amp;hashtags=Itsmybio`}
          target="_blank"
        />

        {/* <!-- Email --> */}
        <FlatButton
          label={<span className="fa fa-envelope" />}
          href={`mailto:?Subject=Checkout my profile on itsmybio.me/${username}&amp;Body=Am%20happy%20to%20share%20my%20profile%20with%20you https://Itsmybio.me/${username}`}
          target="_blank"
        />

        <div className="clear" />

        {/* Digg */}
        <FlatButton
          label={<span className="fa fa-digg" />}
          href={`http://www.digg.com/submit?url=https://Itsmybio.me/${username}`}
          target="_blank"
        />

        {/* <!-- Reddit --> */}
        <FlatButton
          label={<span className="fa fa-reddit-alien" />}
          href={`http://reddit.com/submit?url=https://Itsmybio.me/${username}&amp;title=${username}`}
          target="_blank"
        />

        {/* <!-- StumbleUpon--> */}
        <FlatButton
          label={<span className="fa fa-stumbleupon" />}
          href={`http://www.stumbleupon.com/submit?url=https://Itsmybio.me/${username}&amp;title=${username}`}
          target="_blank"
        />

        {/* <!-- Tumblr--> */}
        <FlatButton
          label={<span className="fa fa-tumblr" />}
          href={`http://www.tumblr.com/share/link?url=https://Itsmybio.me/${username}&amp;title=${username}`}
          target="_blank"
        />

        {/* <!-- VK --> */}
        <FlatButton
          label={<span className="fa fa-vk" />}
          href={`http://vkontakte.ru/share.php?url=https://Itsmybio.me/${username}`}
          target="_blank"
        />
      </div>
    );
  }
}
