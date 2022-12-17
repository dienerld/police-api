// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyA-J-QIc4zHi6l3u1eW9Hh0gtxYGkcPGdY",
	authDomain: "police-api-4e141.firebaseapp.com",
	projectId: "police-api-4e141",
	storageBucket: "police-api-4e141.appspot.com",
	messagingSenderId: "744327562065",
	appId: "1:744327562065:web:e365e606a3850415eb4970",
	measurementId: "G-MPYHJRZJE9",
};

export function firebase() {
	// Initialize Firebase
	const app = initializeApp(firebaseConfig);
	const analytics = getAnalytics(app);

	return { app, analytics };
}
