import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBX4itFP0OXTb9ixKwtnUqK-TQl7cuiQMc",
  authDomain: "firegram-project-1e063.firebaseapp.com",
  projectId: "firegram-project-1e063",
  storageBucket: "firegram-project-1e063.appspot.com",
  messagingSenderId: "783745651011",
  appId: "1:783745651011:web:1aa8528ce7536b3fc45ff6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };