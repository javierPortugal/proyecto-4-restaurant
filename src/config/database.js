// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2ocn8j9dJXeqB_mGToS4HGST9-aZzZic",
  authDomain: "reserva-proyecto4-2ae98.firebaseapp.com",
  projectId: "reserva-proyecto4-2ae98",
  storageBucket: "reserva-proyecto4-2ae98.appspot.com",
  messagingSenderId: "1063799103170",
  appId: "1:1063799103170:web:50e5d4083804821259255b"
};

// Initialize Firebase
initializeApp(firebaseConfig);


export const db = getFirestore();
