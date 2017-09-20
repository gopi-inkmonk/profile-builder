import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAdqqCE5ccr5Y6A2nfOE2zgSO3rseyyJhE',
  authDomain: 'profile-85ec7.firebaseapp.com',
  databaseURL: 'https://profile-85ec7.firebaseio.com',
  projectId: 'profile-85ec7',
  storageBucket: 'profile-85ec7.appspot.com',
  messagingSenderId: '707103836753',
};

firebase.initializeApp(config);

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
export const storageRef = firebase.storage().ref();
