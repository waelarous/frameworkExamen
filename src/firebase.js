import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBlGhwGo6-SZpLWV8V5PmB-oIhn0w_IrTQ",
  authDomain: "react-4cbd3.firebaseapp.com",
  projectId: "react-4cbd3",
  storageBucket: "react-4cbd3.appspot.com",
  messagingSenderId: "771343164036",
  appId: "1:771343164036:web:8e6e96dfdbe6c28dbe98d1",
  measurementId: "G-9G2SCM8NRL",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();
const fire = firebase;

export { auth, provider, firebase };
export default db;
