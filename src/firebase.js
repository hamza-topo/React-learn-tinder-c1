import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAng_zfizAdqQjv6FmsB67neO23VDWnLHQ",
    authDomain: "tinder-6083a.firebaseapp.com",
    databaseURL: "https://tinder-6083a.firebaseio.com",
    projectId: "tinder-6083a",
    storageBucket: "tinder-6083a.appspot.com",
    messagingSenderId: "402466550059",
    appId: "1:402466550059:web:e3849cb4660348864f956e",
    measurementId: "G-SJWVXD2JQB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db =firebaseApp.firestore();
  const auth = firebase.auth();
  const provider =new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db; 