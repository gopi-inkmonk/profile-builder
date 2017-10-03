var React = require('react');
var ReactDOMServer = require('react-dom/server');

class Site extends React.Component {
  render() {
    const { manifest, username, dpUrl, userData } = this.props;
    console.log('userData', userData.DPUrl);
    const fcSettings = {
      token: 'db46f4af-1e74-450d-bece-14bfee79b038',
      host: 'https://wchat.freshchat.com',
      siteId: `https://itsmybio.me/${username}`, // OPTIONAL: id unique to your site
      externalId: username, // user’s id unique to your system
      firstName: userData.name, // user’s first name
      email: userData.contact.email, // user’s email address
      phone: userData.contact.phone, // phone number without country code
      phoneCountryCode: '+1', // phone’s country code
    };
    return (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="theme-color" content="#000000" />
          <title>
            {userData.name}
          </title>
          <meta property="og:type" content="website" />
          <meta property="og:title" content={userData.name} />
          <meta
            property="og:site_name"
            content={`${userData.name}'s Online Bio`}
          />
          <meta property="og:url" content={`https://itsmybio.me/${username}`} />
          <meta property="og:description" content={userData.shortDesc} />
          <meta property="og:image" content={userData.DPUrl} />
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:400,700,800|Roboto+Slab|Yesteryear"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          />
        </head>
        <body>
          <div id="root" />
          <link rel="stylesheet" href={`/${manifest['main.css']}`} />
          <script src={`/${manifest['main.js']}`} />

          <script>
            window.fcSettings = {JSON.stringify(fcSettings)}
          </script>
          <script src="https://wchat.freshchat.com/js/widget.js" async />

          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-107210137-1"
          />
          <script>
            {```
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag('js', new Date());

          gtag('config', 'UA-107210137-1');
          ```}
          </script>
        </body>
      </html>
    );
  }
}

const getSite = props => {
  // console.log('props', props.userData);
  return ReactDOMServer.renderToStaticMarkup(<Site {...props} />);
};

module.exports = getSite;
