// Import the functions you need from the SDKs you need
import { initializeApp, getFirestore } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgbQpQVj8BZQqRdwas8QjOC8uMdt1iKQA",
  authDomain: "task-firebase-703b8.firebaseapp.com",
  projectId: "task-firebase-703b8",
  storageBucket: "task-firebase-703b8.appspot.com",
  messagingSenderId: "488881102280",
  appId: "1:488881102280:web:57cfda0f6597f880b874fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)