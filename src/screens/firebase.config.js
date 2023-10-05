import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';



const firebaseConfig = {
  apiKey: "AIzaSyCtneDTZWhr0Bqpo5k5_1lh9O5E_xzTXS8",
  authDomain: "e-descarte-96b8e.firebaseapp.com",
  projectId: "e-descarte-96b8e",
  storageBucket: "e-descarte-96b8e.appspot.com",
  messagingSenderId: "771822820947",
  appId: "1:771822820947:web:a7ace398bcbf46efd330a6"
};


export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);