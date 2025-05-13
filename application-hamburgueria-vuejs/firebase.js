import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDsx3sH8eDxRSxpr7-R-2sOX6Uu3oyFzWo",
    authDomain: "hamburgueria01-88d79.firebaseapp.com",
    projectId: "hamburgueria01-88d79",
    storageBucket: "hamburgueria01-88d79.appspot.com",
    messagingSenderId: "957903074434",
    appId: "1:957903074434:web:02e11238858428ab9df09b",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Adiciona a configuração do Firestore

export { auth, db };
