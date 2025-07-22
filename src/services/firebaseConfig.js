import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyANc2B3ZI3KMcPRbxKzyW0e0f__BpAJa4E",
  authDomain: "react-sistema-2032d.firebaseapp.com",
  projectId: "react-sistema-2032d",
  storageBucket: "react-sistema-2032d.appspot.com", 
  messagingSenderId: "1057381792900",
  appId: "1:1057381792900:web:a24e256597625cc4f056d1",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
