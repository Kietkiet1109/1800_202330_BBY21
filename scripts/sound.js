var x = document.getElementById("myAudio");

var onOff = document.getElementById("audio_btn");

function playAudio(){
    x.play();
    onOff.innerHTML = "<i class=\"fa-solid fa-volume-high audio\" onclick=\"pauseAudio()\" type=\"button\"></i>";
}

function pauseAudio(){
    x.pause();
    onOff.innerHTML = "<i class=\"fa-solid fa-volume-xmark audio\" onclick=\"playAudio()\" type=\"button\"></i>";
}

playAudio();
pauseAudio();