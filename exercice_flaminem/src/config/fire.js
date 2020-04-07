import firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAE5quo03ZSGYhdBJ020qKBnC-QddxSiqs",
    authDomain: "flaminemapp.firebaseapp.com",
    databaseURL: "https://flaminemapp.firebaseio.com",
    projectId: "flaminemapp",
    storageBucket: "flaminemapp.appspot.com",
    messagingSenderId: "757594925395",
    appId: "1:757594925395:web:c949a421fa9978e62fd9a6",
    measurementId: "G-JKW4CJE90D"
};

const fire = firebase.initializeApp(config);
export default fire;