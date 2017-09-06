import firebase from 'firebase';
import { ref, firebaseAuth } from '../config/Fire';

export function auth(email, pw) {
  return firebaseAuth()
    .createUserWithEmailAndPassword(email, pw)
    .then(saveEmailUser);
}

export function saveUsername(Username, user) {
  // const uid = firebase.auth().getUid();
  const uid = firebaseAuth().currentUser.uid;
  console.log(uid);
  const updates = {};

  updates[`users/${uid}/username`] = Username;
  updates[`users/${uid}/SignupOn`] = firebase.database.ServerValue.TIMESTAMP;
  updates[`usernames/${Username}`] = uid;

  return ref.child('/').update(updates).then(() => {
    window.location.href = '/home';
  });
}

export function logout() {
  return firebaseAuth().signOut();
}

export function login(email, pw) {
  return firebaseAuth().signInWithEmailAndPassword(email, pw);
}

export function resetPassword(email) {
  return firebaseAuth().sendPasswordResetEmail(email);
}

export function saveEmailUser(user) {
  console.log(user);
  return ref
    .child(`users/${user.uid}/`)
    .set({
      email: user.email,
      uid: user.uid,
    })
    .then(() => {
      var user = firebaseAuth().currentUser;
      window.location.href = '/register/username';

      user.sendEmailVerification().then(
        function() {
          // Email sent.
          console.log('email sent');
        },
        function(error) {
          // An error happened.
        }
      );
    });
}
