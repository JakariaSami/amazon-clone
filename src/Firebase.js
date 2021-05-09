import firebase from 'firebase';

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyBZVVpwrGm6aJSG5aDGP4VACOx6MidzedI",
  authDomain: "clone-19211.firebaseapp.com",
  databaseURL: "https://clone-19211.firebaseio.com",
  projectId: "clone-19211",
  storageBucket: "clone-19211.appspot.com",
  messagingSenderId: "531226475835",
  appId: "1:531226475835:web:104b0f98238eee620ccb1e",
  measurementId: "G-H5W1243HB1"
});

const auth = firebase.auth();

export { auth}