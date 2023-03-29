import React from "react";
import ReactDOM from "react-dom/client";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { context as Context } from "./context/Context";
import { App } from "./App";

firebase.initializeApp({
  apiKey: "AIzaSyCIZZxB-2TcF4aWbzeBdZ8tLIXHJJNCHaI",
  authDomain: "real-time-chat-2c371.firebaseapp.com",
  projectId: "real-time-chat-2c371",
  storageBucket: "real-time-chat-2c371.appspot.com",
  messagingSenderId: "160250935036",
  appId: "1:160250935036:web:481cf1329dbb571f788979",
  measurementId: "G-T5F7DMSNQC",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Context.Provider
      value={{
        firebase,
        auth,
        firestore,
      }}
    >
      <App />
    </Context.Provider>
  </React.StrictMode>
);
