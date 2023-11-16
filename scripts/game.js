var itemsArray = []; // Array to store the items from Firestore
let index = 0;

function getItems() {
    db.collection("items").get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                itemsArray.push(doc.data()); // Add the item data to the array
            });
            sortItemsByLevel();
            console.log(itemsArray); // Log the array to see the items
            displayItem(index);
        })
}
getItems(); // Call the function to retrieve items and store them in the array

function displayItem(index) {
    // Update HTML with the first item's data
    document.getElementById("name").innerHTML = itemsArray[index].name;
    document.getElementById("right_name").innerHTML = itemsArray[index].name;
    document.getElementById("wrong_name").innerHTML = itemsArray[index].name;
    document.getElementById("level").innerHTML = itemsArray[index].level;
    document.getElementById("correctbin").innerHTML = itemsArray[index].bin; // For Correct pop-up
    document.getElementById("wrongbin").innerHTML = itemsArray[index].bin; // For Wrong pop-up
    document.getElementById("image").src = itemsArray[index].image;
}

// Sort items by 'level' in ascending order
function sortItemsByLevel() {
    itemsArray.sort(function(a, b) {
        return a.level - b.level;
    });
}

// Function to check the user's bin selection
function checkBinSelection(userSelectedBin) {
    const correctBin = itemsArray[index].bin;
    if (userSelectedBin === correctBin) {
        // Correct bin selected
        $("#correctpopup").fadeIn(); // Show correct pop-up
    } else {
        // Wrong bin selected
        $("#wrongpopup").fadeIn(); // Show wrong pop-up
    }
}

$(document).ready(function(){
    // Pop up event
    $(".bin_wrap").click(function(){
        var userSelectedBin = $(this).data("bin");
        checkBinSelection(userSelectedBin);
    })

    $(".next_stage").click(function(){
        $(".pop_up").fadeOut();
    })
});

// Event listener for the Next Stage button at Correct pop-up
document.getElementById("correct_next_stage_button").addEventListener('click', function() {
    displayItem(index + 1);
    index = index + 1;
});

// Event listener for the Next Stage button at Wrong pop-up
document.getElementById("wrong_next_stage_button").addEventListener('click', function() {
    displayItem(index + 1);
    index = index + 1;
});