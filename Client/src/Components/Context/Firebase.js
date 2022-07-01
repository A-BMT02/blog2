import { initializeApp } from "firebase/app" ;
import { getAuth } from "firebase/auth" ; 
import { getFirestore } from "firebase/firestore" ; 

const firebaseConfig = {
  apiKey: "AIzaSyAiSVr_vkN5F8zX4dXXdjQFOxKljphv1Yo",
  authDomain: "blog2-11ff1.firebaseapp.com",
  projectId: "blog2-11ff1",
  storageBucket: "blog2-11ff1.appspot.com",
  messagingSenderId: "980886465133",
  appId: "1:980886465133:web:41c709fef27684fd7f6d64",
  measurementId: "G-QPNE6NNQ63"
};

const app = initializeApp(firebaseConfig) ;
export const auth = getAuth() ; 
export const db = getFirestore();