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

// initialize the Firebase app
// initialize Firestore database
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Have added temporarily information on Firestore for testing
function populateSavedatas() {
    let savedataCardTemplate = document.getElementById("savedataCardTemplate");
    let savedataCardGroup = document.getElementById("savedataCardGroup");

    let params = new URL(window.location.href);

    db.collection("games").get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // Extract game data
                var gameID = doc.data().GameID;
                var time = doc.data().Time; 
                var score = doc.data().Score;
                var max = doc.data().Max;
                var date = doc.data().Date.toDate(); 

                console.log(time, score, max, date);

                // Clone the template and populate it with game data
                let gameCard = savedataCardTemplate.content.cloneNode(true);
                gameCard.querySelector(".gameID").innerHTML = `# ${gameID}`;
                gameCard.querySelector(".time").innerHTML = `Time: ${time}`;
                gameCard.querySelector(".score").innerHTML = `Score: ${score}`;
                gameCard.querySelector(".max").innerHTML = `${max}`;
                gameCard.querySelector(".date").innerHTML = `Date: ${date.toLocaleString()}`;

                // Append the cloned card with game data to the group element
                savedataCardGroup.appendChild(gameCard);
            });
        })
}

populateSavedatas();