import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyATSWprfFmsuuRHu233jn-ZLsz9Kv1Zuu8",
  authDomain: "eventech-6b690.firebaseapp.com",
  databaseURL: "https://eventech-6b690.firebaseio.com",
  projectId: "eventech-6b690",
  storageBucket: "",
  messagingSenderId: "155967084545"
};
firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;