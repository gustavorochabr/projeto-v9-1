const firebase = require('firebase');
let firebaseConfig = {
    apiKey: "AIzaSyD1x-ZlSqNp8JMsFfx1yP2JbL58mxbBUAY",
    authDomain: "projeto-v9-3400e.firebaseapp.com",
    projectId: "projeto-v9-3400e",
    storageBucket: "projeto-v9-3400e.appspot.com",
    messagingSenderId: "437513431536",
    appId: "1:437513431536:web:c5ef7a70b80f260c3a5535",
    measurementId: "G-MSB58XD76C"
};
firebase.initializeApp(firebaseConfig);
var firebase = firebase.firestore();