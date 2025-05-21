// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwUFSHeplu877BYlb2N4wzF5uz49dD0bU",
  authDomain: "bonsai-world-6feec.firebaseapp.com",
  projectId: "bonsai-world-6feec",
  storageBucket: "bonsai-world-6feec.firebasestorage.app",
  messagingSenderId: "204895738018",
  appId: "1:204895738018:web:8a4b39efe6186a1897dffb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);