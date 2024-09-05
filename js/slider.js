const rangeInput = document.querySelectorAll('.range-input input');
const priceInput = document.querySelectorAll('.form-text-wrapper input');
const progress = document.querySelector('.slider .progress');

let PRICEGAP = 1000;

rangeInput.forEach((input) => {
  input.addEventListener('input', (e) => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < PRICEGAP) {
      if (e.target.className === 'range-min') {
        rangeInput[0].value = maxVal - PRICEGAP;
      } else {
        rangeInput[1].value = minVal + PRICEGAP;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      progress.style.left = (minVal / rangeInput[0].max) * 100 + '%';
      progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + '%';
    }
  });
});


document.querySelector('#reset-btn').addEventListener('click', () => {
  progress.style.left = 0 + '%';
  progress.style.right = 25 + '%';
})
