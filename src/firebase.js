import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCnsfk6oCqNplAxIwWz6N8kV3uZ8vGaTRc",
  authDomain: "twitter-clone-leo.firebaseapp.com",
  databaseURL: "https://twitter-clone-leo-default-rtdb.firebaseio.com",
  projectId: "twitter-clone-leo",
  storageBucket: "twitter-clone-leo.appspot.com",
  messagingSenderId: "248159975425",
  appId: "1:248159975425:web:b36c7dbf4cfb0c802f6800",
  measurementId: "G-C86KT3RF3C",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth;
const fbProvider = new auth.FacebookAuthProvider();
const glProvider = new auth.GoogleAuthProvider();

export { auth, fbProvider, glProvider };
