import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDi3oiyf08nmfrkLPtrf3lg8_Skf1NV8bg",
  authDomain: "netflix-39fea.firebaseapp.com",
  projectId: "netflix-39fea",
  storageBucket: "netflix-39fea.appspot.com",
  messagingSenderId: "658010959175",
  appId: "1:658010959175:web:c1d676122d5fd652b23062",
  measurementId: "G-MP5BLXVJ65",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
