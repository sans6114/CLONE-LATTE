// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB39Ea-IObHyMzCR8bBEX2b-1ZudlRSZ6E",
  authDomain: "astro-auth-4aa9e.firebaseapp.com",
  projectId: "astro-auth-4aa9e",
  storageBucket: "astro-auth-4aa9e.appspot.com",
  messagingSenderId: "501735567221",
  appId: "1:501735567221:web:e8357469b9d10126f0ad3c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export const firebase = {
    app,
    auth
}