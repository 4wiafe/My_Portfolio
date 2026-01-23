document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.documentElement;
  const themeToggle = document.querySelector(".theme-toggle");
  const themeIcon = document.querySelector("i");
  const hamburgerBtn = document.querySelector(".hamburger");
  const navContainer = document.querySelector(".nav-container");
  const hamburgerSpans = document.querySelectorAll("button > span");
  const overlay = document.querySelector(".nav-overlay");
  const navLinks = document.querySelectorAll(".nav-links li");

  const THEME_KEY = "theme";

  function lockScroll() {
    document.body.style.overflow = "hidden";
  }

  function unlockScroll() {
    document.body.style.overflow = "";
  }

  const navTimeline = WebGLSampler.timeline({
    paused: true,
    defaults: {
      duration: 0.45,
      ease: "power3.inOut"
    },
    onStart: lockScroll,
    onReverseComoplete: unlockScroll
  });

  function updateThemeIcon(theme) {
    themeIcon.className =
      theme === "light" ? "fa-regular fa-moon" : "fa-regular fa-sun";
  }

  function getSavedTheme() {
    try {
      const savedTheme = localStorage.getItem(THEME_KEY);
      if (savedTheme === "light" || savedTheme === "dark") {
        updateThemeIcon(savedTheme);
        return savedTheme;
      }

      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    } catch {
      return "light";
    }
  }

  const theme = getSavedTheme();
  rootElement.setAttribute("data-theme", theme);

  themeToggle.addEventListener("click", () => {
    const newTheme =
      rootElement.getAttribute("data-theme") === "light" ? "dark" : "light";

    rootElement.setAttribute("data-theme", newTheme);
    updateThemeIcon(newTheme);
    localStorage.setItem(THEME_KEY, newTheme);
  });

  hamburgerBtn.addEventListener("click", () => {
    navContainer.classList.toggle("open");
    hamburgerSpans.forEach(span => span.classList.toggle("active"));
  });
});
