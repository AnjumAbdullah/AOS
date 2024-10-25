// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Import Firebase authentication

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCErj07y0URpi9WFp7dj38ttOfoUPCiUTw",
  authDomain: "microshop-93b16.firebaseapp.com",
  projectId: "microshop-93b16",
  storageBucket: "microshop-93b16.appspot.com",
  messagingSenderId: "923834197392",
  appId: "1:923834197392:web:add2fb3d3025ccbf3d3f15",
  measurementId: "G-RXLP35DQ54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export Firebase authentication
export const auth = getAuth(app);
