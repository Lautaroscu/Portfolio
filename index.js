"use strict";
const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;
const isDarkMode = localStorage.getItem("darkMode") === "enabled";
if (isDarkMode) {
  body.classList.add("dark-mode");
  darkModeToggle.checked = true;
}
darkModeToggle.addEventListener("change", () => {
  if (darkModeToggle.checked) {
    body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled");
  } else {
    body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "disabled");
  }
});
window.location.pathname.includes("portfolio.html")
  ? (body.style.overflow = "auto")
  : (body.style.overflow = "hidden");
