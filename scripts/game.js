// Play the tick sound for correct choice.
function playCorrectSound() {
  var audio = new Audio("audio/correct_sound.mp3");
  audio.volume = 0.2; // setting default audio value to 0.2
  // If the audio is muted, the sound effect does not activate
  var audioBtn = document.getElementById("audio_btn");
  if (
    audioBtn.innerHTML ==
    '<i class="fa-solid fa-volume-high audio" onclick="pauseAudio()" type="button"></i>'
  ) {
    audio.play();
  } else {
    audio.pause();
  }
}

// Play the error sound for wrong choice.
function playIncorrectSound() {
  var audio = new Audio("audio/incorrect_sound.mp3");
  audio.volume = 0.2; // setting default audio value to 0.2
  // If the audio is muted, the sound effect does not activate
  var audioBtn = document.getElementById("audio_btn");
  if (
    audioBtn.innerHTML ==
    '<i class="fa-solid fa-volume-high audio" onclick="pauseAudio()" type="button"></i>'
  ) {
    audio.play();
  } else {
    audio.pause();
  }
}

var funFactsArray = []; // Array to store the fun facts from Firestore
var itemsArray = []; // Array to store the items from Firestore
var selectedItems = []; // Array to store 20 random items for each game
let index = 0;
let score = 0;
let maxstage = 20;
const gameID = generateGameID();
function getItems() {
  db.collection("items")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        itemsArray.push(doc.data()); // Add the item data to the array
      });
      sortItemsLevel(); // Sort by level in ascending order
      selectedItems = selectRandomItems(); // Select random items based on level
      console.log(itemsArray); // Log all the items from Firestore
      console.log(selectedItems); // Log 20 selected items for current game
      displayItem(index);
    });
}

// Sort by level in ascending order
function sortItemsLevel() {
  itemsArray.sort(function (a, b) {
    // Sort randomly if the same level
    if (a.level === b.level) {
      return 0.5 - Math.random();
    }
    // Sort ascendingly if different levels
    return a.level - b.level;
  });
}

// Select random items based on level
function selectRandomItems() {
  // Collect the random items from each level
  return [
    ...getRandomItemsByLevel(1, 8),
    ...getRandomItemsByLevel(2, 7),
    ...getRandomItemsByLevel(3, 5),
  ];
}

// Take items at a level
function getRandomItemsByLevel(level, count) {
  let itemsOfLevel = itemsArray.filter((item) => item.level === level);
  let randomItems = [];
  while (randomItems.length < count && itemsOfLevel.length > 0) {
    let randomIndex = Math.floor(Math.random() * itemsOfLevel.length);
    randomItems.push(itemsOfLevel[randomIndex]);
    itemsOfLevel.splice(randomIndex, 1); // Remove the selected duplicated item 
  }
  return randomItems;
}

function displayItem(index) {
  if (index < maxstage) {
    let item = selectedItems[index];

    // Update HTML with the first item's data
    document.getElementById("name").innerHTML = item.name;
    document.getElementById("right_name").innerHTML = item.name; // For Correct pop-up
    document.getElementById("wrong_name").innerHTML = item.name; // For Wrong pop-up
    document.getElementById("level").innerHTML = item.level;
    document.getElementById("correctbin").innerHTML = item.bin; // For Correct pop-up
    document.getElementById("wrongbin").innerHTML = item.bin; // For Wrong pop-up
    document.getElementById("correctindex").innerHTML = index + 1; // For Correct pop-up
    document.getElementById("wrongindex").innerHTML = index + 1; // For Wrong pop-up
    document.getElementById("image").src = item.image;
    document.getElementById("correctDesc").innerHTML = item.desc; // For Correct pop-up
    document.getElementById("wrongDesc").innerHTML = item.desc; // For Wrong pop-up
  }
}
getItems(); // Call the function to retrieve items and store them in the array

// Function to check the user's bin selection
function checkBinSelection(userSelectedBin) {
  const correctBin = selectedItems[index].bin;
  if (userSelectedBin === correctBin) {
    // Correct bin selected
    score = score + 1;
    $("#correctpopup").fadeIn(); // Show correct pop-up
    displayFunFact();
    playCorrectSound(); // correct sound plays
  } else {
    // Wrong bin selected
    $("#wrongpopup").fadeIn(); // Show wrong pop-up
    displayFunFact();
    playIncorrectSound(); // wrong sound play
  }
}

$(document).ready(function () {
  // Pop up event
  $(".bin_wrap").click(function () {
    var userSelectedBin = $(this).data("bin");
    checkBinSelection(userSelectedBin);
  });

  $(".next_stage").click(function () {
    $(".pop_up").fadeOut();
  });
});

/* function to make the confirmation pop up appear 
when click on Exit Game button */
document.addEventListener("DOMContentLoaded", function () {
  var exitConfirmationPopup = document.getElementById("exitConfirmation");
  var confirmExitButton = document.getElementById("confirmExit");
  var cancelExitButton = document.getElementById("cancelExit");
  var exitGameButton = document.getElementById("exitGame");

  exitGameButton.addEventListener("click", function () {
    // the CONFIRMATION TO EXIT GAME pop up appear
    exitConfirmationPopup.style.display = "flex";

    confirmExitButton.addEventListener("click", function () {
      // The pop up disappears when the Yes button is clicked
      exitConfirmationPopup.style.display = "none";
      // Redirect to index.html or any other page
      window.location.href = "index.html";
    });

    cancelExitButton.addEventListener("click", function () {
      // The pop up disappears when the No button is clicked
      exitConfirmationPopup.style.display = "none";
    });
  });
});

document
  .getElementById("correct_next_stage_button")
  .addEventListener("click", function () {
    displayItem(index + 1);
    index = index + 1;
    if (index >= maxstage) {
      stopTimer();
      document.getElementById("score").innerHTML = score;
      addResults();
      $("#resultpopup").fadeIn();
    }
  });

// Event listener for the Next Stage button at Wrong pop-up
document
  .getElementById("wrong_next_stage_button")
  .addEventListener("click", function () {
    displayItem(index + 1);
    index = index + 1;
    if (index >= maxstage) {
      stopTimer();
      document.getElementById("score").innerHTML = score;
      addResults();
      $("#resultpopup").fadeIn();
    }
  });

// Stop the timer and get time
function stopTimer() {
  if (window.myTimer) {
    // Stop the timer
    clearInterval(window.myTimer);

    // Take the time on the timer
    const timerDisplay = document.querySelector("#timer");
    if (timerDisplay) {
      currentTime = timerDisplay.textContent.trim();
      console.log("Current Time:", currentTime);

      // Show the time on the HTML page
      const displayElement = document.querySelector("#time");
      if (displayElement) {
        displayElement.textContent = currentTime;
      }
    }
  }
}

//function to get fun facts from firestore
function getFunFacts() {
  db.collection("funfact")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        var factData = doc.data();
        // console.log("Fun Fact data:", factData); // Log fact data to see if 'fact' is present
        funFactsArray.push(factData.fact);
      });
      // console.log(funFactsArray); // Log the array to see the facts
    });
}
getFunFacts(); // call the getFunFacts function

//function to display the fun fact in both correct and wrong pop up
function displayFunFact() {
  //   console.log("Displaying Fun Fact...");

  var funFactDivRight = document.querySelector("#fun_fact_right");
  var funFactDivWrong = document.querySelector("#fun_fact_wrong");

  var randomIndex = Math.floor(Math.random() * funFactsArray.length);
  var randomFunFact = funFactsArray[randomIndex];

  //   if (!randomFunFact) {
  //     console.error("No fact found for the selected item!");
  //     return;
  //   }

  funFactDivRight.innerHTML = randomFunFact;
  funFactDivWrong.innerHTML = randomFunFact;
}

// Function to add the results to FireStore
async function addResults() {
  await auth.onAuthStateChanged(user => {
    if (!user) {
        return;
    }
  })
  const gameResult = {
    GameID: gameID,
    UserName: userName,
    Time: currentTime,
    Score: score,
    Max: index,
    Date: new Date(), // captures the current date and time
  };

  db.collection("games")
    .add(gameResult)
    .then((docRef) => {
      console.log("Game result has been recorded");
    });
}

// Function to generate the gameID
function generateGameID() {
  // Generate a random gameID between 00000 and 99999
  const rannum = Math.floor(Math.random() * 100000);

  // Convert the number to a string that has 5 characters
  const gameID = String(rannum).padStart(5, "0");

  return gameID;
}

// Function to get displayName
function getdisplayName() {
  // Check if the user is logged in:
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      currentUser = db.collection("users").doc(user.uid);
      currentUser.get().then((userDoc) => {
        // Get the displayName
        userName = userDoc.data().displayName;
        console.log(userName);
      });
    } else {
      console.log("No user is logged in."); // Log a message when no user is logged in
    }
  });
}
getdisplayName();
