"use strict";

const address = document.querySelector(".address");
const btnContact = document.querySelector(".btnContact");
const overlay = document.querySelector(".overlay");
const btnCloseContact = document.querySelector(".btnCloseContact");

//opening the window
const openModal = function () {
  address.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

//closing the window
const closeModal = function () {
  address.classList.add("hidden");
  overlay.classList.add("hidden");
};

//escape the modal with key press
const escModal = function (e) {
  console.log(e.key);
  if (e.key === "Escape" && !address.classList.contains("hidden")) {
    closeModal();
  }
};

//Event listeners
overlay.addEventListener("click", closeModal);
btnCloseContact.addEventListener("click", closeModal);
btnContact.addEventListener("click", openModal);
document.addEventListener("keydown", escModal);
