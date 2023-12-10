// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADTPHe0aEoS67DM6v_YCpp_IWXOaeZqJI",
  authDomain: "expense-tracker-be831.firebaseapp.com",
  projectId: "expense-tracker-be831",
  storageBucket: "expense-tracker-be831.appspot.com",
  messagingSenderId: "649723527215",
  appId: "1:649723527215:web:b173707d757ed43f7ac6da",
  measurementId: "G-BRE76WC6X1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app)
