
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4OJe6_gFgbIzsN2V5lFC0rZz303azfAA",
  authDomain: "my-project-da136.firebaseapp.com",
  projectId: "my-project-da136",
  storageBucket: "my-project-da136.appspot.com",
  messagingSenderId: "198647944599",
  appId: "1:198647944599:web:643adee8ab772c2f2c20d2"
};


const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const db = getFirestore(app);