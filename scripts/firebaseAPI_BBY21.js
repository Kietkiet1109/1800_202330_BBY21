// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCWOFwi5f6URL--OZDIH7LjzkGxHf7TBFc",
    authDomain: "bby21-e4ba0.firebaseapp.com",
    databaseURL: "https://bby21-e4ba0-default-rtdb.firebaseio.com",
    projectId: "bby21-e4ba0",
    storageBucket: "bby21-e4ba0.appspot.com",
    messagingSenderId: "595718662721",
    appId: "1:595718662721:web:d387bd81e20c0757fdf4c0"
};

//Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Initialize variables
const auth = firebase.auth();
const database = firebase.firestore();

