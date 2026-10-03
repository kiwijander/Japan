/* Menu button */
var nav = document.querySelector(".nav");
var button = document.querySelector(".nav__more");

/* Open and close */
button.addEventListener("click", function () {
  var isOpen = nav.classList.toggle("open");
  button.setAttribute("aria-expanded", isOpen);
});
