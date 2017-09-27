var React = require('react');
var ReactDOMServer = require('react-dom/server');

class Site extends React.Component {
  render() {
    const { userData } = this.props;
    return (
      <html>
        <head>
          <title>
            {userData.name}
          </title>
        </head>
        <body>
          <div id="root" />
        </body>
      </html>
    );
  }
}

const getSite = userData => {
  return ReactDOMServer.renderToStaticMarkup(<Site userData={userData} />);
};

module.exports = getSite;
