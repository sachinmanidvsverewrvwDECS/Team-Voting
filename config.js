import firebase from 'firebase';

// add SDK Firebase

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDahEopIkKu5bSwVacKPsBSoTFZWUAqLRI",
    authDomain: "attendence-e999d.firebaseapp.com",
    databaseURL: "https://attendence-e999d-default-rtdb.firebaseio.com",
    projectId: "attendence-e999d",
    storageBucket: "attendence-e999d.appspot.com",
    messagingSenderId: "907451577399",
    appId: "1:907451577399:web:84f02450290fe63458bbb2",
    measurementId: "G-STB1705312"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();