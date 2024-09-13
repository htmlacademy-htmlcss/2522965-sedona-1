const modal = document.querySelector('.modal');
const registrationButton = document.querySelector('.registration');
const closeModalButton = document.querySelector('.close-modal');

registrationButton.onclick = function() {
  modal.classList.add('visible');
};

closeModalButton.onclick = function() {
  modal.classList.remove('visible');
};

const decrement = document.querySelector('#decrement-adults');
const increment = document.querySelector('#increment-adults');
const adultsNumber = document.querySelector('#adults-number');
const decrementChilds = document.querySelector('#decrement-childs');
const incrementChilds = document.querySelector('#increment-childs');
const childsNumber = document.querySelector('#childs-number');

decrement.addEventListener('click', () => {
  if (adultsNumber.value <= 0) {
    adultsNumber.value = 0;
  } else {
    adultsNumber.value = parseInt(adultsNumber.value) - 1;
  }
});

increment.addEventListener('click', () => {
  if (adultsNumber.value >= 10) {
    adultsNumber.value = 10;
  } else {
    adultsNumber.value = parseInt(adultsNumber.value) + 1;
  }
});

decrementChilds.addEventListener('click', () => {
  if (childsNumber.value <= 0) {
    childsNumber.value = 0;
  } else {
    childsNumber.value = parseInt(childsNumber.value) - 1;
  }
});

incrementChilds.addEventListener('click', () => {
  if (childsNumber.value >= 10) {
    childsNumber.value = 10;
  } else {
    childsNumber.value = parseInt(childsNumber.value) + 1;
  }
});

