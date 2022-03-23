document.getElementById("linkedinBackToHome").addEventListener("click", () => {
  appLinkedIn.style.animation = "slide-bottom 0.3s";
  setTimeout(function () {
    appLinkedIn.style.display = "none";
  }, 200);
  currentApp = "";
});
