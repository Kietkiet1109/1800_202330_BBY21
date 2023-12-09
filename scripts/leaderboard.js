const highestScores = []; // Array for top 6 highest scores

// Function to get the highest scores
function getHighestScores() {
    db.collection("games")
        .orderBy("UserName") // Order by UserName to group data by user
        .orderBy("Score", "desc") // Sort by score from highest to lowest
        .orderBy("Time") // Sort by time for the same score
        .get()
        .then(querySnapshot => {
            // Use a map to store unique users and their best game data
            const userMap = new Map(); 

            querySnapshot.forEach(doc => {
                const userName = doc.data().UserName;
                const score = doc.data().Score;

                // Check if user already exists in the map and update if necessary
                if (!userMap.has(userName) || userMap.get(userName).Score < score) {
                    userMap.set(userName, doc.data());
                }
            });

            // Sort the unique user data based on score and time
            const sortedScores = Array.from(userMap.values()).sort((a, b) => {
                if (a.Score !== b.Score) {
                    // Sort by score from highest to lowest
                    return b.Score - a.Score; 
                } else {
                    // Sort by time for the same score
                    return a.Time.localeCompare(b.Time); 
                }
            });

            // Take the top 6 scores
            const top6Scores = sortedScores.slice(0, 6);

            // Update HTML Leaderboard with the data
            top6Scores.forEach((data, index) => {
                const row = document.getElementById(`row${index + 1}`);
                if (row) {
                    row.querySelector(".username").textContent = data.UserName;
                    row.querySelector(".score").textContent = `${data.Score} / ${data.Max}`;
                    row.querySelector(".time").textContent = data.Time;
                }
            });
        })
        .catch(error => {
            console.error("Error getting documents: ", error);
        });
}

// Call the function to get and update the highest scores
getHighestScores();
console.log(highestScores);

// Function to get the user place on the leaderbroad 
function getUserRankandScore(userName) {
    // Find the index of the highest score for the user
    for (let i = 0; i < highestScores.length; i++) {
        if (highestScores[i].UserName === userName) {
            document.getElementById("place").innerText = `You are at position ${i + 1} on the leaderboard using your highest score.`;
            document.getElementById("highest_score").innerText = `${highestScores[i].Score}`;
            document.getElementById("max").innerText = `${highestScores[i].Max}`;
            document.getElementById("highest_time").innerText = `${highestScores[i].Time}`;
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
getdisplayName(function (userName) {
    getUserRankandScore(userName);
});