import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
// };
const firebaseConfig = {
  apiKey: "AIzaSyCdmgwT1iCJzoIh_2j0JGRpXMblKrG7tWI",
  authDomain: "uwbook-2825e.firebaseapp.com",
  projectId: "uwbook-2825e",
  storageBucket: "uwbook-2825e.appspot.com",
  messagingSenderId: "652129658564",
  appId: "1:652129658564:web:6ed18c722acb733cf18b91",
  measurementId: "G-G4WECN6ZXC",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
