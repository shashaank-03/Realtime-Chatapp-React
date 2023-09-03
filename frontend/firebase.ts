import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAN-u0fBO1_6cWWDtjAGDU9RGw86lEtxlw",
  authDomain: "chatapp-fb-react.firebaseapp.com",
  projectId: "chatapp-fb-react",
  storageBucket: "chatapp-fb-react.appspot.com",
  messagingSenderId: "772182682732",
  appId: "1:772182682732:web:b44de2e19a35f216a3fc49",
  measurementId: "G-BYHFB3NS2N"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
