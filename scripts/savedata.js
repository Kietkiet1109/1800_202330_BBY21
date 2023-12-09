// Function to get displayName
function getdisplayName(callback) {
  // Check if the user is logged in:
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      currentUser = db.collection("users").doc(user.uid);
      currentUser.get().then(userDoc => {
        // Get the displayName
        var userName = userDoc.data().displayName;
        console.log(userName);
        callback(userName); // Call the callback function with userName
      })
    } else {
      alert("You need to log in to save your datas.");
      console.log("No user is logged in."); // Log a message when no user is logged in
    }
  })
}

function populateSavedatas(userName) {
  let savedataCardTemplate = document.getElementById("savedataCardTemplate");
  let savedataCardGroup = document.getElementById("savedataCardGroup");

  let params = new URL(window.location.href);
  
  db.collection("games")
    .where("UserName", "==", userName) // Filter by current user's username
    .get()
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
        gameCard.querySelector(
          ".date"
        ).innerHTML = `Date: ${date.toLocaleString()}`;

        // Append the cloned card with game data to the group element
        savedataCardGroup.appendChild(gameCard);
      });
    });
}

// Call getdisplayName and provide a callback function
getdisplayName(function(userName) {
  populateSavedatas(userName);
});