const rangeInput = document.querySelectorAll(".range-input input"),
priceInput = document.querySelectorAll(".form-text-wrapper input"),
progress = document.querySelector(".slider .progress");

let PRICEGAP = 1000;

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    // getting two ranges value and parsing them to number
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < PRICEGAP) {
      if (e.target.className === "range-min") {
        //if active slider is min slider
        rangeInput[0].value = maxVal - PRICEGAP;
      } else {
        rangeInput[1].value = minVal + PRICEGAP;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});
