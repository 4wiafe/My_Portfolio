const hamburgerBtn = document.querySelector(".hamburger");
const buttonSpans = document.querySelectorAll("button span");

hamburgerBtn.addEventListener("click", () => {
  buttonSpans.forEach(span => {
    span.classList.toggle("active");
  });
});

