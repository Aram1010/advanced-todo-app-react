import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCDAQmTvU0SG0G0etF_3Hje1o-f-PWOUKI",
  authDomain: "advanced-todo-app-f1657.firebaseapp.com",
  projectId: "advanced-todo-app-f1657",
  storageBucket: "advanced-todo-app-f1657.appspot.com",
  messagingSenderId: "3330407127",
  appId: "1:3330407127:web:88c021b0ef5b7f56bf0e92",
  measurementId: "G-ZCRM61QTXF",
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export const db = getFirestore(app);
