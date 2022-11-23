import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCzyim_2-MyZG-GFwle1me0PreVjsgjr7I",
  authDomain: "clone-6a4fe.firebaseapp.com",
  projectId: "clone-6a4fe",
  storageBucket: "clone-6a4fe.appspot.com",
  messagingSenderId: "1095351699333",
  appId: "1:1095351699333:web:fdfccfadcc0438982966ec",
  measurementId: "G-KWN7T5QF0Q",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
