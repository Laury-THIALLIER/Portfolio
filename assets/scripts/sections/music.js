// PLAY / PAUSE MUSIC

let play_button = document.querySelectorAll(".play_pause");
let audios = document.querySelectorAll("audio");

play_button.forEach((button) => {
  let audio = button.nextElementSibling;
  let audioPaused;

  button.addEventListener("click", () => {
    audioPaused = audio.paused;

    audios.forEach((audio) => {
      audio.pause();
      audio.currentTime = 0;
    });
    play_button.forEach((button) => {
      button.src = "assets/images/icons/play.svg";
    });

    if (audioPaused == true) {
      button.src = "assets/images/icons/pause.svg";
      audio.play();
    } else {
      audio.pause();
      button.src = "assets/images/icons/play.svg";
    }
  });

  setInterval(() => {
    if (audio.currentTime == audio.duration) {
      button.src = "assets/images/icons/play.svg";
    }
  }, 500);
});

document.getElementById("musicBackToHome").addEventListener("click", () => {
  appMusic.style.animation = "slide-bottom 0.3s";
  setTimeout(function () {
    appMusic.style.display = "none";
  }, 200);
  currentApp = "";
});
