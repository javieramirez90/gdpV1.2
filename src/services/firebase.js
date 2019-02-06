
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAVBzd-B8orAEWAIGVQCMZQsvPeehWYNTA",
    authDomain: "landinggdp.firebaseapp.com",
    databaseURL: "https://landinggdp.firebaseio.com",
    projectId: "landinggdp",
    storageBucket: "landinggdp.appspot.com",
    messagingSenderId: "332030349295"
  };
  firebase.initializeApp(config);

  export default firebase;
  
  const firestore = firebase.firestore();
  const settings = {/* your settings... */ timestampsInSnapshots: true};
  firestore.settings(settings);
  const db = firestore;
  const potencialesRef = db.collection('potenciales')

  export const redirectLogin = (facebook) => {
    const provider = facebook ? new firebase.auth.FacebookAuthProvider() : new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithRedirect(provider);
}

export const sendForm = (formData, user) => {
  const form = { formData, user:user.uid }
  return potencialesRef
    .doc(user.uid)
    .set(form)
    .then(r => true)
}

export const checkIfSubmitedBefor = (user) => {
  return potencialesRef
    .doc(user.uid)
    .get()
    .then(mess => {
      return mess.exists
    })
}