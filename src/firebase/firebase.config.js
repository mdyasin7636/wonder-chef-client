import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDzs6btoK31k4iDb0ci5qyLUBrHH4I2L5Q",
  authDomain: "chef-recipe-hunter-262a1.firebaseapp.com",
  projectId: "chef-recipe-hunter-262a1",
  storageBucket: "chef-recipe-hunter-262a1.appspot.com",
  messagingSenderId: "408612663630",
  appId: "1:408612663630:web:3e6b72baa7a1758c532e1f"
};


const app = initializeApp(firebaseConfig);

export default app;