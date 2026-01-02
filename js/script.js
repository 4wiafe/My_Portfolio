const hamburgerBtn = document.querySelector(".hamburger");
const buttonSpans = document.querySelectorAll("button span");
const navContainer = document.querySelector(".nav-container");
const typewriterElement = document.querySelector(".typewriter");
const hireBtns = document.querySelectorAll(".hire-btn");
const hero = document.querySelector(".hero");
const documentBody = document.querySelector("body");

hamburgerBtn.addEventListener("click", () => {
  buttonSpans.forEach(span => {
    span.classList.toggle("active");
  });

  navContainer.classList.toggle("active");
});

navContainer.addEventListener("click", (event) => {
  const target = event.target.dataset;

  if (target.id !== "list") return;

  if (target.id === "list") {
    navContainer.classList.remove("active");

    buttonSpans.forEach(span => {
      span.classList.remove("active");
    });
  }
});

const words = [
  "Front-end Engineer",
  "UI/UX Enthusiast",
  "AI Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typingSpeed = 100;
const deletingSpped = 50;
const pauseAfterTyping = 1500;
const pauseAfterDeleting = 500;

function typing() {
  const currentWord = words[wordIndex];

  if (!deleting) {
    typewriterElement.textContent = currentWord.slice(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentWord.length) {
      setTimeout(() => deleting = true, pauseAfterTyping);
    }

  } else {
    typewriterElement.textContent = currentWord.slice(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  const speed = deleting ? deletingSpped : typingSpeed;

  setTimeout(typing, speed);
}

typing();

hireBtns.forEach(button => {
  button.addEventListener("click", () => {
    document.getElementById("contact").scrollIntoView({
      behavior: "smooth"
    });
  });
});

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  hero.style.backgroundPositionY = `${scrollY * 0.4}px`;
});

documentBody.addEventListener("click", (e) => {
  if (
    navContainer.classList.contains("active") &&
    !navContainer.contains(e.target) &&
    !hamburgerBtn.contains(e.target)
  ) {
    navContainer.classList.remove("active");
    buttonSpans.forEach(span => {
      span.classList.remove("active");
    });
  }
});

