import Rebase from 're-base';
import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
    
        apiKey: "AIzaSyAFIrJJSs0VrXpX72JO2_EkF9QfjEkQcrQ",
        authDomain: "catch-of-the-day-arbri.firebaseapp.com",
        databaseURL: "https://catch-of-the-day-arbri-default-rtdb.firebaseio.com",
        projectId: "catch-of-the-day-arbri",
        storageBucket: "catch-of-the-day-arbri.appspot.com",
        messagingSenderId: "847708097153",
        appId: "1:847708097153:web:4986268947e8ea69079b80",
})

const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp}