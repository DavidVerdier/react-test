import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAUmIwzH6ImK7ElFjWxQ3ZZ8AzqGn_uVjw",
  authDomain: "recipes-38ba0.firebaseapp.com",
  databaseURL: "https://recipes-38ba0.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp }

// this is a default export
export default base
