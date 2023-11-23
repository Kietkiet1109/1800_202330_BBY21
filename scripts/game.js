// audio for correct choice
function playCorrectSound() {
  var audio = new Audio("audio/correct_sound.mp3");
  audio.play();
}

// audio for wrong choice
function playIncorrectSound() {
  var audio = new Audio("audio/incorrect_sound.mp3");
  audio.play();
}

// Play the tick sound for correct choice.
function playCorrectSound() {
  var audio = new Audio("audio/correct_sound.mp3");
  audio.play();
}

// Play the errr sound for wrong choice.
function playIncorrectSound() {
  var audio = new Audio("audio/incorrect_sound.mp3");
  audio.play();
}

var funFactsArray = []; // Array to store the fun facts from Firestore
var itemsArray = []; // Array to store the items from Firestore
var selectedItems = []; // Array to store 10 random items for each game
let index = 0;
let score = 0;
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
      console.log(selectedItems); // Log 10 selected items for current game
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
  // Make sure each level has at least 1 item
  let level1Min = 1;
  let level2Min = 1;
  let level3Min = 1;

  // Randomly distribute 7 items across the 3 levels
  for (let i = 0; i < 7; i++) {
    let ran = Math.random(); // Random taking the items
    if (ran < 1 / 3) {
      level1Min++; // Take items at level 1
    } else if (ran < 2 / 3) {
      level2Min++; // Take items at level 2
    } else {
      level3Min++; // Take items at level 3
    }
  }

  // Collect the random items from each level
  return [
    ...getRandomItemsByLevel(1, level1Min),
    ...getRandomItemsByLevel(2, level2Min),
    ...getRandomItemsByLevel(3, level3Min),
  ];
}

// Take items at a level
function getRandomItemsByLevel(level, count) {
  let itemsOfLevel = itemsArray.filter((item) => item.level === level);
  let randomItems = [];
  while (randomItems.length < count && itemsOfLevel.length > 0) {
    let randomIndex = Math.floor(Math.random() * itemsOfLevel.length);
    randomItems.push(itemsOfLevel[randomIndex]);
    itemsOfLevel.splice(randomIndex, 1); // Remove the selected item to avoid duplicates
  }
  return randomItems;
}

function displayItem(index) {
  if (index < 10) {
    let item = selectedItems[index];
    // Update HTML with the first item's data
    document.getElementById("name").innerHTML = selectedItems[index].name;
    document.getElementById("right_name").innerHTML = selectedItems[index].name; // For Correct pop-up
    document.getElementById("wrong_name").innerHTML = selectedItems[index].name; // For Wrong pop-up
    document.getElementById("level").innerHTML = selectedItems[index].level;
    document.getElementById("correctbin").innerHTML = selectedItems[index].bin; // For Correct pop-up
    document.getElementById("wrongbin").innerHTML = selectedItems[index].bin; // For Wrong pop-up
    document.getElementById("correctindex").innerHTML = index + 1; // For Correct pop-up
    document.getElementById("wrongindex").innerHTML = index + 1; // For Wrong pop-up
    document.getElementById("image").src = selectedItems[index].image;
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
    playCorrectSound(); // correct sound plays
  } else {
    // Wrong bin selected
    $("#wrongpopup").fadeIn(); // Show wrong pop-up
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

// Event listener for the Next Stage button at Correct pop-up
document
  .getElementById("correct_next_stage_button")
  .addEventListener("click", function () {
    displayItem(index + 1);
    index = index + 1;
    if (index >= 10) {
      document.getElementById("score").innerHTML = score;
      $("#resultpopup").fadeIn();
      stopTimer();
    }
  });

// Event listener for the Next Stage button at Wrong pop-up
document
  .getElementById("wrong_next_stage_button")
  .addEventListener("click", function () {
    displayItem(index + 1);
    index = index + 1;
    if (index >= 10) {
      document.getElementById("score").innerHTML = score;
      $("#resultpopup").fadeIn();
      stopTimer();
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
      const currentTime = timerDisplay.textContent.trim();
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
        console.log("Fun Fact data:", factData); // Log fact data to see if 'fact' is present
        funFactsArray.push(factData.fact);
      });
      console.log(funFactsArray); // Log the array to see the facts
      displayFunFact();
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
displayFunFact(); // call the displayFunFact function
