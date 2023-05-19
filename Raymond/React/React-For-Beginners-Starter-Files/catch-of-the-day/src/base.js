import firebase from 'firebase/app';
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
  //Insert your own credentials here
  apiKey: "AIzaSyBteVXuLHIO3OIzuZZGjBSyNzx3YSDG_Qc",
  authDomain: "catch-of-the-day-raymond.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-raymond-default-rtdb.firebaseio.com",
  projectId: "catch-of-the-day-raymond"
});

export default firebaseApp;














// import firebase from 'firebase/app';
// // import { getDatabase } from 'firebase/database'

// const firebaseApp = firebase.initializeApp({
//   apiKey: "AIzaSyBteVXuLHIO3OIzuZZGjBSyNzx3YSDG_Qc",
//   authDomain: "catch-of-the-day-raymond.firebaseapp.com",
//   databaseURL: "https://catch-of-the-day-raymond-default-rtdb.firebaseio.com"
// });

// const firebaseApp = initializeApp(firebaseConfig);

// const db = getDatabase(app);

// named export
// export default firebaseApp;

// default export, only one is allowed
// export default db;
