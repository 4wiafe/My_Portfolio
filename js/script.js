const menuBtn = document.querySelector(".menu-btn");
const navContainer = document.querySelector(".nav-container");
const menuBars = document.querySelectorAll(".menu-btn span");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  menuBars.forEach(bar => bar.classList.toggle("open"));
  navContainer.classList.toggle("open");
});

navLinks.addEventListener("click", (event) => {
  const target = event.target.dataset.id;

  if (target !== "link") {
    return;
  }

  if (navContainer.classList.contains("open")) {
    navContainer.classList.remove("open");
  }

  menuBars.forEach(bar => bar.classList.remove("open"));
});
