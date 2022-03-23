document.getElementById("dashlaneBackToHome").addEventListener("click", () => {
  appDashlane.style.animation = "slide-bottom 0.3s";
  setTimeout(function () {
    appDashlane.style.display = "none";
  }, 200);
  currentApp = "";
});
