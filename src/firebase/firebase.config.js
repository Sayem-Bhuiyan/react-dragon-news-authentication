// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZqXRwubcmBXzpTuQNDo5fNkc-UgcbRtk",
  authDomain: "react-dragon-news-auth-480e3.firebaseapp.com",
  projectId: "react-dragon-news-auth-480e3",
  storageBucket: "react-dragon-news-auth-480e3.appspot.com",
  messagingSenderId: "313265109839",
  appId: "1:313265109839:web:d7beea691e90ebb938233a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;