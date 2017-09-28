const fs = require('fs');
const express = require('express');
const firebase = require('firebase');
const app = express();
const getSite = require('./getSite');

app.use(express.static('build/'));

const manifestStr = fs.readFileSync('./build/asset-manifest.json', {
  encoding: 'utf8',
});

const manifest = JSON.parse(manifestStr);

const config = {
  apiKey: 'AIzaSyAdqqCE5ccr5Y6A2nfOE2zgSO3rseyyJhE',
  authDomain: 'profile-85ec7.firebaseapp.com',
  databaseURL: 'https://profile-85ec7.firebaseio.com',
  projectId: 'profile-85ec7',
  storageBucket: 'profile-85ec7.appspot.com',
  messagingSenderId: '707103836753',
};

firebase.initializeApp(config);

const ref = firebase.database().ref();
const getProfileData = username => {
  const unRef = ref.child(`usernames/${username}/`);

  return new Promise((resolve, reject) => {
    unRef.once('value').then(function(Name) {
      const uid = Name.val();

      if (uid) {
        const proRef = ref.child(`profiles/${uid}/`);

        return proRef
          .once('value')
          .then(function(Name) {
            const NameVal = Name.val();
            resolve(NameVal);
          })
          .catch(err => {
            reject('USER_DOES_NOT_HAVE_PROFILE_DATA');
            console.log('got error', err);
          });
      } else {
        reject('Unable to find user');
      }
    });
  });
};

// getProfileData('gopiraja')
//   .then(value => {
//     const val = getSite({ userData: value, manifest });
//   })
//   .catch(err => {
//     console.log('some error', err);
//   });

app.get('/', function(req, res) {
  res.send('Hello World! gopi');
});

app.get('/admin', function(req, res) {
  res.send('You have come to admin dashboard page');
});

app.get('/:username', function(req, res) {
  const { username } = req.params;
  getProfileData(username)
    .then(value => {
      const { name } = value;
      const val = getSite({ userData: value, username, manifest });
      res.send(val);
    })
    .catch(err => {
      res.send('user not found');

      console.log('some error', err);
    });
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
