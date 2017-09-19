import firebase from 'firebase';
import { ref, firebaseAuth } from '../config/Fire';

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

export function getEmail(fn) {
  const email = firebaseAuth().currentUser.email;

  return email || '';
}
