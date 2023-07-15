import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBWEI1osiEzhsbmIKgYAhzKqhEP7lfOHmo",
  authDomain: "disneyplus-6fd03.firebaseapp.com",
  projectId: "disneyplus-6fd03",
  storageBucket: "disneyplus-6fd03.appspot.com",
  messagingSenderId: "834864336506",
  appId: "1:834864336506:web:f3121645917d213b10b5c3",
  measurementId: "G-XJHQQ9WFKS",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);
const dbConfig = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
// const storageRef = firebase.storage().ref();

export { auth, provider};
export default dbConfig; // global object
