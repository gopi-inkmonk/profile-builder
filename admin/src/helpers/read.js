import firebase from 'firebase';
import { ref, firebaseAuth, storageRef } from '../config/Fire';

export function getProfileData(fn) {
  const uid = firebaseAuth().currentUser.uid;
  const proRef = ref.child(`profiles/${uid}/`);

  return proRef.once('value').then(function(Name) {
    const NameVal = Name.val();
    fn(NameVal);
  });
}

export function getGlobalWho(fn) {
  const proRef = ref.child(`global/who/`);

  return proRef.once('value').then(function(Name) {
    const NameVal = Name.val();
    fn(NameVal);
  });
}

export function getPersonalityType(type) {
  const proRef = ref.child(`global/personality-types/${type}/`);

  return proRef.once('value').then(function(Name) {
    const NameVal = Name.val();
    console.log(NameVal);
    return NameVal;
  });
}

export function getEmail(fn) {
  const email = firebaseAuth().currentUser.email;

  return email || '';
}

export function getUserName(fn) {
  const uid = firebaseAuth().currentUser.uid;
  const proRef = ref.child(`users/${uid}/username`);

  return proRef.once('value').then(function(Name) {
    const NameVal = Name.val();
    fn(NameVal);
  });
}

export function getDP() {
  const uid = firebaseAuth().currentUser.uid;
  const DPRef = storageRef.child(`dp/${uid}`);

  // return new Promise((resolve, reject) => {
  //   unRef.once('value').then(function(Name) {
  //     const uid = Name.val();
  //     const DPRef = storageRef.child(`dp/${uid}`);
  //   });
  // });

  return DPRef.getDownloadURL();
}
