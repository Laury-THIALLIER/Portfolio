// CALCULATRICE

let input = "";

function showValue(btn) {
  input += btn.value;
  document.getElementById("output").innerHTML = input;
}

function doMath() {
  if (input === "") {
    document.getElementById("output").innerHTML = "";
  } else {
    document.getElementById("output").innerHTML = eval(input);
    input = "";
  }
}

function reset() {
  document.getElementById("output").innerHTML = "";
  input = "";
}

function rem1() {
  input = input.replace(/.$/, "");
  document.getElementById("output").innerHTML = input;
}

document
  .getElementById("calculatorBackToHome")
  .addEventListener("click", () => {
    appCalculator.style.animation = "slide-bottom 0.3s";
    setTimeout(function () {
      appCalculator.style.display = "none";
    }, 200);
    currentApp = "";
  });
