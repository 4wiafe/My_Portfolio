const hamburgerButton = document.querySelector(".hamburger");
const navContainer = document.querySelector(".nav-container");
const buttonSpans = document.querySelectorAll("button span");


hamburgerButton.addEventListener("click", () => {
  navContainer.classList.toggle("active");

  buttonSpans.forEach(span => span.classList.toggle("active"));
});

navContainer.addEventListener("click", (event) => {
  const target = event.target;

  if (target === "link") {
    navContainer.classList.add("closed");
    return;
  }

  return;
});
