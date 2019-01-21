var button = document.querySelector(".jennifer-button");

var charlyButton = document.querySelector(".charly-button");

var popup = document.querySelector(".modal-jennifer");
var charlyPopup = document.querySelector(".modal-charly");
var close = popup.querySelector(".modal-close");
var charlyClose = charlyPopup.querySelector(".modal-close");

button.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

charlyButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  charlyPopup.classList.add("modal-show");
});

charlyClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  charlyPopup.classList.remove("modal-show");
});
