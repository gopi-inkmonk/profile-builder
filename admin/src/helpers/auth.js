import firebase from 'firebase';
import { ref, firebaseAuth } from '../config/Fire';

export function auth(email, pw) {
  return firebaseAuth()
    .createUserWithEmailAndPassword(email, pw)
    .then(saveEmailUser);
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
  var userAuth = firebaseAuth().currentUser;

  return ref
    .child(`users/${user.uid}/`)
    .set({
      email: user.email,
      uid: user.uid,
      emailVerified: user.emailVerified,
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

// Forms for profile
export function saveUsername(Username, user) {
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

export function saveName(name) {
  const uid = firebaseAuth().currentUser.uid;
  const updates = {};

  updates['name'] = name;

  return ref.child(`/profiles/${uid}/`).update(updates).then(() => {
    console.log('Name successfully saved');
  });
}
export function saveWho(who) {
  const uid = firebaseAuth().currentUser.uid;
  const updates = {};

  updates['who'] = who;

  return ref.child(`/profiles/${uid}/`).update(updates).then(() => {
    console.log('Who successfully saved');
  });
}
export function saveShortDesc(shortDesc) {
  const uid = firebaseAuth().currentUser.uid;
  const updates = {};

  updates['shortDesc'] = shortDesc;

  return ref.child(`/profiles/${uid}/`).update(updates).then(() => {
    console.log('Who successfully saved');
  });
}
export function saveContact(email, phone, social) {
  const uid = firebaseAuth().currentUser.uid;
  const updates = {};

  updates['email'] = email;
  updates['phone'] = phone;
  updates['social'] = social;

  return ref.child(`/profiles/${uid}/contact`).update(updates).then(() => {
    console.log('Who successfully saved');
  });
}
