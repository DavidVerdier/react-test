import Rebase from 're-base';
import firebase from "firebase/app";
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAmdPVn8dprUwoOQka3bsS2c9Lyljc5dQk",
    authDomain: "chatbox-app-3e1d6.firebaseapp.com",
    databaseURL: "https://chatbox-app-3e1d6.firebaseio.com",
});

const base = Rebase.createClass(firebase.database());

export {firebaseApp};

export default base;
