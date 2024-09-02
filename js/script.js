const modal = document.querySelector(".modal");
const registrationButton = document.querySelector(".registration");
const closeModalButton = document.querySelector(".close-modal");

registrationButton.onclick = function() {
  modal.classList.add("visible");
};

closeModalButton.onclick = function() {
  modal.classList.remove("visible");
};
