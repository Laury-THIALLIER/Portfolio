// HEURES ET DATE

function showDay(id) {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let element = document.getElementById(id);
  let date = new Date().toLocaleDateString("fr-FR", options);
  dateCapitalize = date.charAt(0).toUpperCase() + date.slice(1);
  element.textContent = dateCapitalize;
}

showTime("home_hour");
window.setInterval("showTime('home_hour');", 1000);
showDay("home_day");
window.setInterval("showDay('home_day');", 1000);

// OPEN APPS

let currentApp;

// Trello

let appIconTrello = document.getElementById("trello");
appTrello = document.querySelector(".trello");

appIconTrello.addEventListener("click", () => {
  appTrello.style.display = "block";
  appTrello.style.animation = "slide-top 0.3s";
  currentApp = "Trello";
});

// LinkedIn

let appIconLinkedIn = document.getElementById("linkedin");
let appLinkedIn = document.querySelector(".linkedin");

appIconLinkedIn.addEventListener("click", () => {
  appLinkedIn.style.display = "block";
  appLinkedIn.style.animation = "slide-top 0.3s";
  currentApp = "LinkedIn";
});

// Steam

let appIconSteam = document.getElementById("steam");
let appSteam = document.querySelector(".steam");

appIconSteam.addEventListener("click", () => {
  appSteam.style.display = "block";
  appSteam.style.animation = "slide-top 0.3s";
  currentApp = "Steam";
});

// Galerie

let appIconGallery = document.getElementById("gallery");
let appGallery = document.querySelector(".gallery");

appIconGallery.addEventListener("click", () => {
  appGallery.style.display = "block";
  appGallery.style.animation = "slide-top 0.3s";
  currentApp = "Gallery";
});

// Musique

let appIconMusic = document.getElementById("music");
let appMusic = document.querySelector(".music");

appIconMusic.addEventListener("click", () => {
  appMusic.style.display = "block";
  appMusic.style.animation = "slide-top 0.3s";
  currentApp = "Music";
});

// Netflix

let appIconNetflix = document.getElementById("netflix");
let appNetflix = document.querySelector(".netflix");

appIconNetflix.addEventListener("click", () => {
  appNetflix.style.display = "block";
  appNetflix.style.animation = "slide-top 0.3s";
  currentApp = "Netflix";
});

// Calculatrice

let appIconCalculator = document.getElementById("calculator");
let appCalculator = document.querySelector(".calculator");

appIconCalculator.addEventListener("click", () => {
  appCalculator.style.display = "block";
  appCalculator.style.animation = "slide-top 0.3s";
  currentApp = "Calculator";
});

// Dashlane

let appIconDashlane = document.getElementById("dashlane");
let appDashlane = document.querySelector(".dashlane");

appIconDashlane.addEventListener("click", () => {
  appDashlane.style.display = "block";
  appDashlane.style.animation = "slide-top 0.3s";
  currentApp = "Dashlane";
});

// Notes

let appIconNotes = document.getElementById("notes");
let appNotes = document.querySelector(".notes");

appIconNotes.addEventListener("click", () => {
  appNotes.style.display = "block";
  appNotes.style.animation = "slide-top 0.3s";
  currentApp = "Notes";
});

// Gmail

let appIconGmail = document.getElementById("gmail");
let appGmail = document.querySelector(".gmail");

appIconGmail.addEventListener("click", () => {
  appGmail.style.display = "block";
  appGmail.style.animation = "slide-top 0.3s";
  currentApp = "Gmail";
});

// Messages

let appIconMessages = document.getElementById("messages");
let appMessages = document.querySelector(".messages");

appIconMessages.addEventListener("click", () => {
  appMessages.style.display = "block";
  appMessages.style.animation = "slide-top 0.3s";
  currentApp = "Messages";
});

// EXIT APPS

let circle = document.getElementById("circle");

circle.addEventListener("click", () => {
  switch (currentApp) {
    case "Trello":
      appTrello.style.animation = "slide-bottom 0.3s";
      setTimeout(function () {
        appTrello.style.display = "none";
      }, 200);
      currentApp = "";
      break;
    case "LinkedIn":
      appLinkedIn.style.animation = "slide-bottom 0.3s";
      setTimeout(function () {
        appLinkedIn.style.display = "none";
      }, 200);
      currentApp = "";
      break;
    case "Steam":
      appSteam.style.animation = "slide-bottom 0.3s";
      setTimeout(function () {
        appSteam.style.display = "none";
      }, 200);
      currentApp = "";
      break;
    case "Gallery":
      appGallery.style.animation = "slide-bottom 0.3s";
      setTimeout(function () {
        appGallery.style.display = "none";
      }, 200);
      currentApp = "";
      break;
    case "Music":
      appMusic.style.animation = "slide-bottom 0.3s";
      setTimeout(function () {
        appMusic.style.display = "none";
      }, 200);
      currentApp = "";
      break;
    case "Netflix":
      appNetflix.style.animation = "slide-bottom 0.3s";
      setTimeout(function () {
        appNetflix.style.display = "none";
      }, 200);
      currentApp = "";
      break;
    case "Calculator":
      appCalculator.style.animation = "slide-bottom 0.3s";
      setTimeout(function () {
        appCalculator.style.display = "none";
      }, 200);
      currentApp = "";
      break;
    case "Dashlane":
      appDashlane.style.animation = "slide-bottom 0.3s";
      setTimeout(function () {
        appDashlane.style.display = "none";
      }, 200);
      currentApp = "";
      break;
    case "Notes":
      appNotes.style.animation = "slide-bottom 0.3s";
      setTimeout(function () {
        appNotes.style.display = "none";
      }, 200);
      currentApp = "";
      break;
    case "Gmail":
      appGmail.style.animation = "slide-bottom 0.3s";
      setTimeout(function () {
        appGmail.style.display = "none";
      }, 200);
      currentApp = "";
      break;
    case "Messages":
      appMessages.style.animation = "slide-bottom 0.3s";
      setTimeout(function () {
        appMessages.style.display = "none";
      }, 200);
      currentApp = "";
      break;
    default:
    // console.log("Erreur : currentApp = " + currentApp);
  }
});

let triangle = document.getElementById("triangle");

triangle.addEventListener("click", () => {
  switch (currentApp) {
    case "LinkedIn":
      appLinkedIn.style.animation = "slide-bottom 0.3s";
      setTimeout(function () {
        appLinkedIn.style.display = "none";
      }, 200);
      currentApp = "";
      break;
    case "Steam":
      appSteam.style.animation = "slide-bottom 0.3s";
      setTimeout(function () {
        appSteam.style.display = "none";
      }, 200);
      currentApp = "";
      break;
    case "Music":
      appMusic.style.animation = "slide-bottom 0.3s";
      setTimeout(function () {
        appMusic.style.display = "none";
      }, 200);
      currentApp = "";
      break;
    case "Netflix":
      appNetflix.style.animation = "slide-bottom 0.3s";
      setTimeout(function () {
        appNetflix.style.display = "none";
      }, 200);
      currentApp = "";
      break;
    case "Calculator":
      appCalculator.style.animation = "slide-bottom 0.3s";
      setTimeout(function () {
        appCalculator.style.display = "none";
      }, 200);
      currentApp = "";
      break;
    case "Dashlane":
      appDashlane.style.animation = "slide-bottom 0.3s";
      setTimeout(function () {
        appDashlane.style.display = "none";
      }, 200);
      currentApp = "";
      break;
    case "Notes":
      appNotes.style.animation = "slide-bottom 0.3s";
      setTimeout(function () {
        appNotes.style.display = "none";
      }, 200);
      currentApp = "";
      break;
    case "Gmail":
      appGmail.style.animation = "slide-bottom 0.3s";
      setTimeout(function () {
        appGmail.style.display = "none";
      }, 200);
      currentApp = "";
      break;
    case "Messages":
      appMessages.style.animation = "slide-bottom 0.3s";
      setTimeout(function () {
        appMessages.style.display = "none";
      }, 200);
      currentApp = "";
      break;
    default:
    // console.log("Erreur : currentApp = " + currentApp);
  }
});
