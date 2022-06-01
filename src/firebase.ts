
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAGAAE2z988cNq8YCuVv525z9NmIZRb2gM",
  authDomain: "testwicastr.firebaseapp.com",
  projectId: "testwicastr",
  storageBucket: "testwicastr.appspot.com",
  messagingSenderId: "46104204321",
  appId: "1:46104204321:web:6253ecbe827be47f0bbf60",
  measurementId: "G-XHQC1GT22Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

export const analytics = getAnalytics(app)

export default app
