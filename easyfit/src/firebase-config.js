// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOCJe2IuW0gNkjo4jSNOthIMWNjtdXDiU",
  authDomain: "easyfitlab.firebaseapp.com",
  databaseURL: "https://easyfitlab-default-rtdb.firebaseio.com",
  projectId: "easyfitlab",
  storageBucket: "easyfitlab.appspot.com",
  messagingSenderId: "966132070684",
  appId: "1:966132070684:web:6fc36368ae8cb41a1862d9"
};

// Initialize Firebase
const firebase= initializeApp(firebaseConfig);

export default firebase