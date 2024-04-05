// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6SR9hBot67pTippkkLsywQueuJhWfVnw",
  authDomain: "auth-with-firebase-46fb4.firebaseapp.com",
  projectId: "auth-with-firebase-46fb4",
  storageBucket: "auth-with-firebase-46fb4.appspot.com",
  messagingSenderId: "157132583959",
  appId: "1:157132583959:web:6f368a03b1abe429181852"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;