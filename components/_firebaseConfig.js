// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};
// console.log("fb init");
// Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(firebase_app);
// console.log("firebase_app", firebase_app);
// console.log("db", db);
export default { db };
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyACLvT7D_GWo88h6dp7u2ghgxZnokj_6Jg",
//   authDomain: "qcl-website-4d6bf.firebaseapp.com",
//   projectId: "qcl-website-4d6bf",
//   storageBucket: "qcl-website-4d6bf.appspot.com",
//   messagingSenderId: "66819819838",
//   appId: "1:66819819838:web:b5d48230c0ca116cc8446f",
//   measurementId: "G-4DWC25C7CX",
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// rules_version = '2';

// service cloud.firestore {

//   match /databases/{database}/documents {

//     match /{document=**} {

//       allow read, write: if false;

//     }

//   }

// }

// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// // TODO: Replace the following with your app's Firebase project configuration
// // See: https://support.google.com/firebase/answer/7015592
// const firebaseConfig = {
//     FIREBASE_CONFIGURATION

// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Cloud Firestore and get a reference to the service
// const db = getFirestore(app);
