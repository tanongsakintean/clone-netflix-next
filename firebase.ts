// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1dfUcXswBhSrCBWhfnsaXiC5BBc4rqcE",
  authDomain: "netflix-clone-yt-f119e.firebaseapp.com",
  projectId: "netflix-clone-yt-f119e",
  storageBucket: "netflix-clone-yt-f119e.appspot.com",
  messagingSenderId: "331024826685",
  appId: "1:331024826685:web:cb57f442dfa317ec884554",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
