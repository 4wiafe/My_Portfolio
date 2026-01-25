document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.documentElement;
  const themeToggle = document.querySelector(".theme-toggle");
  const themeIcon = document.querySelector("i");
  const hamburgerBtn = document.querySelector(".hamburger");
  const navContainer = document.querySelector(".nav-container");
  const navLinks = document.querySelectorAll(".nav-links li a");

  const THEME_KEY = "theme";
  let isMenuOpen = false;

  function lockScroll() {
    document.body.style.overflow = "hidden";
  }

  function unlockScroll() {
    document.body.style.overflow = "";
  }

  const navTimeline = gsap.timeline({
    paused: true,
    defaults: {
      duration: 0.45,
      ease: "power3.inOut"
    },
    onStart: lockScroll,
    onReverseComplete: unlockScroll
  });

  navTimeline
    .to(navContainer, {
      scaleY: 1,
      opacity: 1,
      pointerEvents: "auto"
    }, "-=0.1")
    .from(navLinks, {
      y: -12,
      opacity: 0,
      stagger: 0.08
    }, "-=0.25")
    .to('.bar1', { rotate: -135, y: 8 }, 0)
    .to('.bar2', { opacity: 0 }, 0)
    .to('.bar3', { rotate: 135, y: -8 }, 0);

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
    isMenuOpen = !isMenuOpen;
    isMenuOpen ? navTimeline.play() : navTimeline.reverse();
  });
});
