// ZOOM PHOTOS

const pictures = document.querySelectorAll(".picture");
const image = document.createElement("img");
let details;

pictures.forEach((picture) => {
  picture.addEventListener("click", () => {
    let source = picture.currentSrc;
    image.setAttribute("src", source);
    image.setAttribute("id", "current_picture");
    image.setAttribute("draggable", "false");
    document.getElementById("gallery_zoom__background").appendChild(image);
    document.getElementById("gallery_zoom").style.display = "block";
    details = 1;

    document.getElementById("galleryBack").addEventListener("click", () => {
      document.getElementById("gallery_zoom").style.display = "none";
      image.remove();
      details = 0;
    });

    document.getElementById("circle").addEventListener("click", () => {
      document.getElementById("gallery_zoom").style.display = "none";
      image.remove();
      appGallery.style.animation = "slide-bottom 0.3s";
      setTimeout(function () {
        appGallery.style.display = "none";
      }, 200);
      currentApp = "";
      details = 0;
    });
  });
});

document.getElementById("triangle").addEventListener("click", () => {
  if (details === 1) {
    document.getElementById("gallery_zoom").style.display = "none";
    image.remove();
    details = 0;
  } else {
    appGallery.style.animation = "slide-bottom 0.3s";
    setTimeout(function () {
      appGallery.style.display = "none";
    }, 200);
    currentApp = "";
    details = 0;
  }
});

document.getElementById("galleryBackToHome").addEventListener("click", () => {
  appGallery.style.animation = "slide-bottom 0.3s";
  setTimeout(function () {
    appGallery.style.display = "none";
  }, 200);
  currentApp = "";
});
