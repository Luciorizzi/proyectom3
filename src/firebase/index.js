import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const app = firebase.initializeApp({
    apiKey: "AIzaSyAZLEVJThOno6Z1nN4bX-SyfGP5VLurPVQ",
    authDomain: "m3ecommerce.firebaseapp.com",
    projectId: "m3ecommerce",
    storageBucket: "m3ecommerce.appspot.com",
    messagingSenderId: "338119788130",
    appId: "1:338119788130:web:865cd5a6b5b76c65c9733b"
});

export function getFirebase() {
  return app;
}

export function getFirestore() {
  return firebase.firestore(app);
}
export const db = firebase.firestore();