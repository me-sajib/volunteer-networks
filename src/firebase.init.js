// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3mg2mNRfvxrwRvRv-9LKacLD8tEAzz2g",
  authDomain: "volunteers-network-6bb47.firebaseapp.com",
  projectId: "volunteers-network-6bb47",
  storageBucket: "volunteers-network-6bb47.appspot.com",
  messagingSenderId: "78578917476",
  appId: "1:78578917476:web:edaf4bdaabbf1d6040ff71",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
