import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';  


const firebaseConfig = {
  apiKey: "AIzaSyDJhC6gIFiWyTuTWw56_onFSzV8-iFi-3c",
  authDomain: "test1-881b3.firebaseapp.com",
  projectId: "test1-881b3",
  storageBucket: "test1-881b3.appspot.com",
  messagingSenderId: "55491498571",
  appId: "1:55491498571:web:b452f7b5c97e4c39e733ce",
  measurementId: "G-7Q77XC2X0T"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);