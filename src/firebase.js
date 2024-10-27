import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBXEPZG-3AjSsNgpLw2WpUPjQm0aAgJcoE",
  authDomain: "bsite-ca503.firebaseapp.com",
  databaseURL: "https://bsite-ca503-default-rtdb.firebaseio.com",
  projectId: "bsite-ca503",
  storageBucket: "bsite-ca503.appspot.com",
  messagingSenderId: "67629128709",
  appId: "1:67629128709:web:6b030ce5e3a00a207d106c",
  measurementId: "G-5SXMB87C54"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { app, database }; 