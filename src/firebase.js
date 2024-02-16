import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCibRncIjgDS3LRcnRw2ZlrkAl3hf_VM8E",
    authDomain: "rent-ease-c8c35.firebaseapp.com",
    projectId: "rent-ease-c8c35",
    storageBucket: "rent-ease-c8c35.appspot.com",
    messagingSenderId: "861300900559",
    appId: "1:861300900559:web:b75ceb1700234efe08edba",
    measurementId: "G-E140HV8TM6"
  };

  firebase.initializeApp(firebaseConfig);

export default firebase;