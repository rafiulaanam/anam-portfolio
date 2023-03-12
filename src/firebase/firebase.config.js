// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDudKtEsX8pZXa3uX2ETiRRbf8w-NPb__Y",
  authDomain: "rafi-developer.firebaseapp.com",
  projectId: "rafi-developer",
  storageBucket: "rafi-developer.appspot.com",
  messagingSenderId: "131392938607",
  appId: "1:131392938607:web:f0dc6178f97119d77c639a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;