/* Application Cores | Firebase Core */
import firebase from 'firebase';

/* Firebase, Firebase Application & Database Configuartion */
const firebaseConfig = {
     appId:          "1:86169133943:web:4ec26cf9c6a8f1c8373772",
     apiKey:         "AIzaSyD9Au3wMd7eWWFY_9cc6200gdnU1nJMN_o",
     projectId:      "intender-b6b5e",
     authDomain:     "intender-b6b5e.firebaseapp.com",
     databaseURL:    "https://intender-b6b5e.firebaseio.com",
     storageBucket:  "intender-b6b5e.appspot.com",
     measurementId:  "G-WLHTHDPHQQ",
     messagingSenderId: "86169133943",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const Database    = firebaseApp.firestore();

/* Export Firenbase Database Configuartion */
export default Database;