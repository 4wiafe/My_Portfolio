const rootElement = document.documentElement;
const themeToggle = document.querySelector(".theme-toggle");
const themeIcon = document.querySelector("i");

const THEME_KEY = "theme";

function getSavedTheme() {
  try {
    const savedTheme = localStorage.getItem(THEME_KEY);

    if (savedTheme === "light" || savedTheme === "dark") {
      return savedTheme;
    }

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    return prefersDark ? "dark" : "light";

  } catch (error) {
    console.error("Theme detection failed", error);
    return "light";
  }
}

const theme = getSavedTheme();
rootElement.setAttribute("data-theme", theme);

themeToggle.addEventListener("click", () => {
  const currentTheme = rootElement.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";

  rootElement.setAttribute("data-theme", newTheme);
  localStorage.setItem(THEME_KEY, newTheme);
});
