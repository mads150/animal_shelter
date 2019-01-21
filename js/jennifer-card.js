var button = document.querySelector(".jennifer-button");

var popup = document.querySelector(".modal-jennifer");
var close = popup.querySelector(".modal-close");

button.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});
