import firebase from 'firebase';
import { ref, firebaseAuth } from '../config/Fire';

export function getProfileData(fn) {
  const uid = firebaseAuth().currentUser.uid;
  const proRef = ref.child(`profiles/${uid}/`);

  return proRef.once('value').then(function(Name) {
    const NameVal = Name.val();
    console.log(NameVal);
    fn(NameVal);
  });
}
