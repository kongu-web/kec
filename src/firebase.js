import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/setup#config-object
const firebaseConfig = {
    apiKey: "AIzaSyC-_FaHn_akoXAih05GKEbVf6BI7ipAif0",
    authDomain: "iqac-78e9a.firebaseapp.com",
    projectId: "iqac-78e9a",
    storageBucket: "iqac-78e9a.firebasestorage.app",
    messagingSenderId: "20582087457",
    appId: "1:20582087457:web:2a181f7a25d4f9c1589c60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export default app;
