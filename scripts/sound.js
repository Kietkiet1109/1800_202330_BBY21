var x = document.getElementById("myAudio");
var audioBtn = document.getElementById("audio_btn");

function playAudio() {
  x.play();
  audioBtn.innerHTML =
    '<i class="fa-solid fa-volume-high audio" onclick="pauseAudio()" type="button"></i>';
}

function pauseAudio() {
  x.pause();
  audioBtn.innerHTML =
    '<i class="fa-solid fa-volume-xmark audio" onclick="playAudio()" type="button"></i>';
}

playAudio();
pauseAudio();
