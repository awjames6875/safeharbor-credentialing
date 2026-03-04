import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJSb2UkMQRonCcYDLVu6VeP989IeGcg54",
  authDomain: "safeharbor-credentialing.firebaseapp.com",
  projectId: "safeharbor-credentialing",
  storageBucket: "safeharbor-credentialing.firebasestorage.app",
  messagingSenderId: "123945337408",
  appId: "1:123945337408:web:53f2b805599dd6583c95a5",
  measurementId: "G-9ZHE3GZH5P"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
