import firebase from 'firebase';
import { ref, firebaseAuth, storageRef } from '../config/Fire';

export const getProfileData = username => {
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

export const getDP = username => {
  const unRef = ref.child(`usernames/${username}/`);

  return new Promise((resolve, reject) => {
    unRef.once('value').then(function(Name) {
      const uid = Name.val();
      const DPRef = storageRef.child(`dp/${uid}`);

      // resolve(DPRef.location.path);

      DPRef.getDownloadURL().then(function(url) {
        console.log('DPRef', url, DPRef.location.path);
        resolve(url);
      });
    });
  });
};
