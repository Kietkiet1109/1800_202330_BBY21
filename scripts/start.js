var exitConfirmationPopup = document.getElementById("exitConfirmation");
var confirmExitButton = document.getElementById("confirmExit");
var cancelExitButton = document.getElementById("cancelExit");
var startGame = document.getElementById("playGame");

/* function to make the confirmation pop up appear when user clicks play game without logging in */
firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
        startGame.addEventListener("click", function () {
            // the CONFIRMATION TO EXIT GAME pop up appear
            exitConfirmationPopup.style.display = "flex";

            confirmExitButton.addEventListener("click", function () {
                // The pop up disappears when the Yes button is clicked
                exitConfirmationPopup.style.display = "none";
                // Redirect to index.html or any other page
                window.location.href = "login.html";
            });

            cancelExitButton.addEventListener("click", function () {
                // The pop up disappears when the No button is clicked
                exitConfirmationPopup.style.display = "none";
                window.location.href = "game.html";
            });
        });
    } else {
        startGame.addEventListener("click", function () {
            window.location.href = "game.html";
        })
    }
})