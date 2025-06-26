// src/lib/firebase.ts

// 1. Import the functions you need
import { initializeApp, getApps, getApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDga4YJ4srF9xT7Ts8xbvUqHZFvaGpzh8c",
	authDomain: "trip-advisor-51460.firebaseapp.com",
	projectId: "trip-advisor-51460",
	storageBucket: "trip-advisor-51460.firebaseapp.com",
	messagingSenderId: "815545439806",
	appId: "1:815545439806:web:e8d646d1de03416dad636f",
	measurementId: "G-R9SQ2DR6DL",
}

// 2. Initialize Firebase correctly for Next.js
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

// 3. Export the services you'll use
export const auth = getAuth(app)
export const db = getFirestore(app)
