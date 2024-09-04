const modal = document.querySelector(".modal");
const registrationButton = document.querySelector(".registration");
const closeModalButton = document.querySelector(".close-modal");

registrationButton.onclick = function() {
  modal.classList.add("visible");
};

closeModalButton.onclick = function() {
  modal.classList.remove("visible");
};

const counters = document.querySelectorAll('[data-counter]');

if (counters) {
  counters.forEach(container => {
    container.addEventListener('click', e => {
      const target = e.target;

      if (target.closest('.counter__button')) {
        let value = parseInt(target.closest('.container').querySelector('input').value);

        if (target.classList.contains('plus')) {
          value++;
        } else {
          --value;
        }

        if (value <= 0) {
          value = 0;
        }

        if (value >= 20) {
          value = 20;
        }

        target.closest('.container').querySelector('input').value = value;
      }
    })
  })
}
