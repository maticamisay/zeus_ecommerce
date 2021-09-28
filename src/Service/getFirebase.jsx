import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCPfHH4nPOgVGnPe0OuChZhUkyl_FXEL-s",
  authDomain: "zeus-ecommerce.firebaseapp.com",
  projectId: "zeus-ecommerce",
  storageBucket: "zeus-ecommerce.appspot.com",
  messagingSenderId: "681669970401",
  appId: "1:681669970401:web:9db4933fe53e4c03feeaa0",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export function getFirestore() {
  return firebase.firestore(app);
}
