
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
// import { getFirestore, collection, getDocs } from "/firebase/firestore/lite";
const app = firebase.initializeApp({
  apiKey: "AIzaSyDk4gcPUFeu75yPi9PG6u1paU6BLS3HdEI",
  authDomain: "proj1-8a95b.firebaseapp.com",
  projectId: "proj1-8a95b",
  storageBucket: "proj1-8a95b.appspot.com",
  messagingSenderId: "1085301272147",
  appId: "1:1085301272147:web:e2130abcfb100a331960a6",
  measurementId: "G-0DJEP43TSF"
});

export const auth = app.auth();
export default app;