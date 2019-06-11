import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCpiNqk5x6_o6f2Ofw2DlL5NECxZAtkBlU",
  authDomain: "marioplan-62e8e.firebaseapp.com",
  databaseURL: "https://marioplan-62e8e.firebaseio.com",
  projectId: "marioplan-62e8e",
  storageBucket: "marioplan-62e8e.appspot.com",
  messagingSenderId: "19284006426",
  appId: "1:19284006426:web:a6e6bba2f2daaf95"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;