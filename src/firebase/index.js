import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyBl1tt-P6TcMLdMwgCgToTVKp1ES6KbP8I",
  authDomain: "simple-app-65ac2.firebaseapp.com",
  projectId: "simple-app-65ac2",
  storageBucket: "simple-app-65ac2.appspot.com",
  messagingSenderId: "191641678207",
  appId: "1:191641678207:web:6e157a032cd2802e23aa4a",
  measurementId: "G-4MDVPRTZ0D",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// auth.setPersistence(app.auth.Auth.Persistence.NONE);
