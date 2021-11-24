import firebase from 'firebase'
require("@firebase/firestore")

var firebaseConfig = {
 //Add configuration here
 apiKey: "AIzaSyDxauTT5kSiOfY-voJrmcwEfcCxVbo9lZk",
  authDomain: "project71-52735.firebaseapp.com",
  projectId: "project71-52735",
  storageBucket: "project71-52735.appspot.com",
  messagingSenderId: "314917574604",
  appId: "1:314917574604:web:040a0a8c3acaab86142f69"

};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

