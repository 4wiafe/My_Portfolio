const hamburgerButton = document.querySelector(".hamburger");
const navContainer = document.querySelector(".nav-container");


hamburgerButton.addEventListener("click", () => {
  navContainer.classList.toggle("active");
});
