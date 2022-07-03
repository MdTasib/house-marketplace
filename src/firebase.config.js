import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBaqQBPd0CrIL-X2qqgBJl7NW2oGtL82eA",
	authDomain: "bd-house-marketplace.firebaseapp.com",
	projectId: "bd-house-marketplace",
	storageBucket: "bd-house-marketplace.appspot.com",
	messagingSenderId: "195880670925",
	appId: "1:195880670925:web:8559f49bcbc5679c2cbb84",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
