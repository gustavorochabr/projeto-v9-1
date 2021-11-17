const firebase = require('firebase');
let firebaseConfig = {
  apiKey: "AIzaSyAwcSTv2_cJnu8yR6iu2YXNisX5l5HtHTI",
  authDomain: "projeto-v9-3ff6f.firebaseapp.com",
  projectId: "projeto-v9-3ff6f",
  storageBucket: "projeto-v9-3ff6f.appspot.com",
  messagingSenderId: "428634259128",
  appId: "1:428634259128:web:99c7998d42c37af2ae7e4d"
};
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();