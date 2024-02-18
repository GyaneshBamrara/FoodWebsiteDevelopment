import {getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCOfoYJeK_Wh63eYPICnbe-ZbH3HBvyOlY",
    authDomain: "restaurantapp-10b00.firebaseapp.com",
    databaseURL: "https://restaurantapp-10b00-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-10b00",
    storageBucket: "restaurantapp-10b00.appspot.com",
    messagingSenderId: "54048407884",
    appId: "1:54048407884:web:eb3cf84f435ea5e485cfe9",
    measurementId: "G-EEMG1HFB97"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export {app, firestore, storage};