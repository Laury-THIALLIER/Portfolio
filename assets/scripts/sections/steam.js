document.getElementById("steamBackToHome").addEventListener("click", () => {
  appSteam.style.animation = "slide-bottom 0.3s";
  setTimeout(function () {
    appSteam.style.display = "none";
  }, 200);
  currentApp = "";
});
