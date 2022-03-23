document.getElementById("messagesBackToHome").addEventListener("click", () => {
  appMessages.style.animation = "slide-bottom 0.3s";
  setTimeout(function () {
    appMessages.style.display = "none";
  }, 200);
  currentApp = "";
});
