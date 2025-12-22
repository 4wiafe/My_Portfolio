const hamburgerBtn = document.querySelector(".hamburger");
const buttonSpans = document.querySelectorAll("button span");
const navContainer = document.querySelector(".nav-container");

hamburgerBtn.addEventListener("click", () => {
  buttonSpans.forEach(span => {
    span.classList.toggle("active");
  });

  navContainer.classList.toggle("active");
});

