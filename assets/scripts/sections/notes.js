document.getElementById("notesBackToHome").addEventListener("click", () => {
  appNotes.style.animation = "slide-bottom 0.3s";
  setTimeout(function () {
    appNotes.style.display = "none";
  }, 200);
  currentApp = "";
});
