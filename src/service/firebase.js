// import * as firebase from "firebase/app";
// import 'firebase/auth';
// require('firebase/auth')
import firebase from 'firebase/compat/app' 
import 'firebase/compat/auth'


const firebaseConfig = {
  apiKey: "AIzaSyCam5vaVTcWOpVf-xz_UVzmqWYzHWFwIg4",
  authDomain: "smile-more-database.firebaseapp.com",
  databaseURL: "https://smile-more-database-default-rtdb.firebaseio.com",
  projectId: "smile-more-database",
  storageBucket: "smile-more-database.appspot.com",
  messagingSenderId: "421846447655",
  appId: "1:421846447655:web:341eedce43b33b716fc002",
  measurementId: "G-D40ZNQS7SZ",
};

// Initialize Firebase 
firebase.initializeApp(firebaseConfig);
