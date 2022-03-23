document.getElementById("netflixBackToHome").addEventListener("click", () => {
  appNetflix.style.animation = "slide-bottom 0.3s";
  setTimeout(function () {
    appNetflix.style.display = "none";
  }, 200);
  currentApp = "";
});
