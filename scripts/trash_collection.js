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

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// Initialize variables
// const auth = firebase.auth()
// const database = firebase.database()

function TrashCollection (){
    database.collection("items").doc("01").set({         
        bin: "",      
        image: null,              
        level: 1,                      
        name: "Candy Wrapper"
    })
    
    database.collection("items").doc("02").set({         
        bin: "",      
        image: null,              
        level: 1,                      
        name: "chip package"
    })


}

// TrashCollection()

// don't delete this js - I try to figure this out