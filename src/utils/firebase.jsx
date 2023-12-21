// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCiO4IElpzFJkQc69l1LH0k1-5lP3x6LgM",
    authDomain: "primeflix-gpt.firebaseapp.com",
    projectId: "primeflix-gpt",
    storageBucket: "primeflix-gpt.appspot.com",
    messagingSenderId: "269918944127",
    appId: "1:269918944127:web:b0441b57c9b7a8cf81784a",
    measurementId: "G-HJH3YNJSP4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();