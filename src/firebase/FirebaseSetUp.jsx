import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBrohW23l6oKf0C6XXzTcNNP_9LQNWaJWU",
  authDomain: "testing-ca54e.firebaseapp.com",
  projectId: "testing-ca54e",
  storageBucket: "testing-ca54e.appspot.com",
  messagingSenderId: "388688698577",
  appId: "1:388688698577:web:8ba96b5d67f6c43ee4f9f0",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
export { auth, dn };
