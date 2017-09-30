var React = require('react');
var ReactDOMServer = require('react-dom/server');

class Site extends React.Component {
  render() {
    const { manifest, username, dpUrl, userData } = this.props;
    console.log('userData', userData.DPUrl);
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

          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-107210137-1"></script>
          <script>
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag('js', new Date());

          gtag('config', 'UA-107210137-1');
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
