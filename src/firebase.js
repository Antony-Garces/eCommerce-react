import {initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAYPZBUsyrQTeSS8B1kP9wRHDSrEun-17A",
    authDomain: "ecommerce-react-337a6.firebaseapp.com",
    projectId: "ecommerce-react-337a6",
    storageBucket: "ecommerce-react-337a6.appspot.com",
    messagingSenderId: "952251469630",
    appId: "1:952251469630:web:86f77bf32b36015799266f"
  };

  const firebaseApp = initializeApp(firebaseConfig)

  export const auth = getAuth(firebaseApp);



