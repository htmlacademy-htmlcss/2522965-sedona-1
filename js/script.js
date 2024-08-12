let modal = document.querySelector(".modal");
let registrationButton = document.querySelector(".registration");
let closeModalButton = document.querySelector(".close-modal");

registrationButton.onclick = function() {
  modal.classList.add("visible");
};

closeModalButton.onclick = function() {
  modal.classList.remove("visible");
};


