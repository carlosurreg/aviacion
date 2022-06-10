// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTD3AGaMv_cVgZeJBPXAdgR1Vju55A9Ik",
  authDomain: "carlosurrego-49ae4.firebaseapp.com",
  projectId: "carlosurrego-49ae4",
  storageBucket: "carlosurrego-49ae4.appspot.com",
  messagingSenderId: "612661981186",
  appId: "1:612661981186:web:d116df72a9a883186af71b",
  measurementId: "G-W7ZNZG3RS7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);