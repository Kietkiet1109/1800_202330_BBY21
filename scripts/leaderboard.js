const highestscores = []; // Array for top 6 highest scores

// Function to get the highest scores
function getHighestScores() {
  db.collection("games")
    .orderBy("Score", "desc") // Sort by score from highest to lowest
    .limit(6) // Fetch top 6 highest scores
    .get()
    .then(querySnapshot => {
        querySnapshot.forEach(doc => {
            // Add data from Firestore to Array
            highestscores.push(doc.data());
        });

        highestscores.sort((a, b) => {
            // Sort by Time from shortest to longest if the same score
            if (a.Score === b.Score) {
                return a.Time.localeCompare(b.Time); 
            }
            return 0;
        });

        // Update HTML Leaderboard with the data
        highestscores.forEach((data, index) => {
            const row = document.getElementById(`row${index + 1}`);
            if (row) {
                row.querySelector(".username").textContent = data.UserName;
                row.querySelector(".score").textContent = `${data.Score} / ${data.Max}`;
                row.querySelector(".time").textContent = data.Time;
            }
        });
    })
}
getHighestScores();
console.log(highestscores);

// Function to get the user place on the leaderbroad 
function getUserRankandScore(userName) {
    // Find the index of the highest score for the user
    for (let i = 0; i < highestscores.length; i++) {
        if (highestscores[i].UserName === userName) {
            document.getElementById("place").innerText = `You are at position ${i + 1} on the leaderboard using your highest score.`;
            document.getElementById("highest_score").innerText = `${highestscores[i].Score}`;
            document.getElementById("max").innerText = `${highestscores[i].Max}`;
            document.getElementById("highest_time").innerText = `${highestscores[i].Time}`;
            return;
        }
    }
    console.log("User not found on the leaderboard.");
}

// Function to get displayName
function getdisplayName(callback) {
    // Check if the user is logged in:
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        currentUser = db.collection("users").doc(user.uid);
        currentUser.get().then(userDoc => {
          // Get the displayName
          var userName = userDoc.data().displayName;
          callback(userName); // Call the callback function with userName
        })
      } else {
        console.log("No user is logged in."); // Log a message when no user is logged in
      }
    })
}

// Call getdisplayName and provide a callback function
getdisplayName(function(userName) {
    getUserRankandScore(userName);
});