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
firebase.initializeApp(firebaseConfig);

// Initialize variables
const auth = firebase.auth()
const database = firebase.database()

// Set up our register function
function register() {
    // Get all our input fields
    email = document.getElementById('signup_email').value
    password = document.getElementById('signup_pwd').value
    username = document.getElementById('signup_name').value

    // Validate input fields
    if (validate_email(email) == false || validate_password(password) == false) {
        alert('Email or Password is Out of Line')
        return
        // Don't continue running the code
    }

    // Move on with Auth
    auth.createUserWithEmailAndPassword(email, password)
        .then(function () {
            // Declare user variable
            var user = auth.currentUser

            // Add this user to Firebase Database
            var database_ref = database.ref()

            // Create User data
            var user_data = {
                email: email,
                full_name: username,
                last_login: Date.now()
            }

            // Push to Firebase Database
            database_ref.child('users/' + user.uid).set(user_data)

            // Done
            alert('New account is created!')
            window.location.assign("login.html"); //re-direct to login.html after signup
        })
        .catch(function (error) {
            // Firebase will use this to alert of its errors
            var error_code = error.code
            var error_message = error.message

            alert(error_message)
        })
}

// Set up our login function
function login() {
    // Get all our input fields
    email = document.getElementById('login_email').value
    password = document.getElementById('login_pwd').value

    // Validate input fields
    if (validate_email(email) == false || validate_password(password) == false) {
        alert('Email/Password is Out of Line')
        return
        // Don't continue running the code
    }

    auth.signInWithEmailAndPassword(email, password)
        .then(function () {
            // Declare user variable
            var user = auth.currentUser

            // Add this user to Firebase Database
            var database_ref = database.ref()

            // Create User data
            var user_data = {
                last_login: Date.now()
            }

            // Push to Firebase Database
            database_ref.child('users/' + user.uid).update(user_data)

            // DOne
            alert('You are now logged in!')
            window.location.assign("index.html"); //re-direct to index.html after signup
        })
        .catch(function (error) {
            // Firebase will use this to alert of its errors
            var error_code = error.code;
            var error_message = "The email/password is incorrect";

            alert(error_message)
        })
}

// Validate Functions
function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/;
    if (expression.test(email) == true) {
        // Email is good
        return true
    } else {
        // Email is not good
        return false
    }
}

function validate_password(password) {
    // Firebase only accepts lengths greater than 6
    if (password < 6) {
        return false
    } else {
        return true
    }
}

function validate_field(field) {
    if (field == null) {
        return false
    }

    if (field.length <= 0) {
        return false
    } else {
        return true
    }
}

function logout() {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        console.log("You are now logged out!");
      }).catch((error) => {
        // An error happened.
      });
}

