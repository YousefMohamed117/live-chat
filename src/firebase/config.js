import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAfAdJa0TnQe95YNI5mDTuqSQPIWErl4EE",
    authDomain: "yousef-firebase-ae727.firebaseapp.com",
    projectId: "yousef-firebase-ae727",
    storageBucket: "yousef-firebase-ae727.appspot.com",
    messagingSenderId: "805319693962",
    appId: "1:805319693962:web:e059a4cc18305b6ca17f73"
  };

  
// init firebase
firebase.initializeApp(firebaseConfig);

// init firestore service
const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

// export firestore
export {projectAuth, projectFirestore, timestamp };
