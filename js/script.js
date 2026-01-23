document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.documentElement;
  const themeToggle = document.querySelector(".theme-toggle");
  const themeIcon = document.querySelector("i");
  const hamburgerBtn = document.querySelector(".hamburger");
  const navContainer = document.querySelector(".nav-container");
  const hamburgerSpans = document.querySelectorAll("button > span");

  const THEME_KEY = "theme";

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
