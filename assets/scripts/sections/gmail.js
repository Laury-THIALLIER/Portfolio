document.getElementById("gmailBackToHome").addEventListener("click", () => {
  appGmail.style.animation = "slide-bottom 0.3s";
  setTimeout(function () {
    appGmail.style.display = "none";
  }, 200);
  currentApp = "";
});
