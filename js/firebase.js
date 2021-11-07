const firebase = require('firebase');
let firebaseConfig = {
  //firebase keys
};
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();