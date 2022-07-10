import { initializeApp } from "firebase/app";

export const firebaseConfig = {
    apiKey: "AIzaSyAYw4ZLksk9YdyB3XDQxikNRrjfybeVTJA",
    authDomain: "dogwatch-16610.firebaseapp.com",
    projectId: "dogwatch-16610",
    storageBucket: "dogwatch-16610.appspot.com",
    messagingSenderId: "537542850183",
    appId: "1:537542850183:web:aa15907257f4d010576a22"
  };

export const firebaseApp = initializeApp(firebaseConfig);