// script.js

document.addEventListener("DOMContentLoaded", function() {
  // Group dark mode icon elements for desktop and mobile
  const icons = {
    desktop: {
      sun: document.getElementById("icon-sun"),
      moon: document.getElementById("icon-moon")
    },
    mobile: {
      sun: document.getElementById("icon-sun-mobile"),
      moon: document.getElementById("icon-moon-mobile")
    }
  };

  const themeToggle = document.getElementById("theme-toggle");
  const mobileThemeToggle = document.getElementById("mobile-theme-toggle");

  // Helper function to update icon visibility
  function updateIconVisibility(isDark, iconSet) {
    if (iconSet) {
      iconSet.sun.classList.toggle("hidden", isDark);
      iconSet.moon.classList.toggle("hidden", !isDark);
    }
  }

  function setTheme(theme) {
    const isDark = theme === "dark";
    // Toggle dark mode on the <html> element for Tailwind's dark: utilities
    document.documentElement.classList.toggle("dark", isDark);
    updateIconVisibility(isDark, icons.desktop);
    updateIconVisibility(isDark, icons.mobile);
    localStorage.setItem("theme", theme);
  }

  // Initialize theme from localStorage (default to light)
  const savedTheme = localStorage.getItem("theme") || "light";
  setTheme(savedTheme);

  // Attach event listeners to toggle buttons
  if (themeToggle) {
    themeToggle.addEventListener("click", function() {
      const newTheme = document.documentElement.classList.contains("dark") ? "light" : "dark";
      setTheme(newTheme);
    });
  }

  if (mobileThemeToggle) {
    mobileThemeToggle.addEventListener("click", function() {
      const newTheme = document.documentElement.classList.contains("dark") ? "light" : "dark";
      setTheme(newTheme);
    });
  }

  // Update Footer Year
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Hamburger Menu Toggle for Mobile Navigation using Tailwind's "hidden" class
  const menuToggle = document.getElementById("menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener("click", function() {
      mobileNav.classList.toggle("hidden");
    });
  }

  // Auto-close mobile navigation when a link is clicked
  document.querySelectorAll("#mobile-nav a").forEach(link => {
    link.addEventListener("click", function() {
      mobileNav.classList.add("hidden");
    });
  });

  // Optional: Close mobile nav when window is resized above 768px
  window.addEventListener("resize", function() {
    if (window.innerWidth >= 768) {
      mobileNav.classList.add("hidden");
    }
  });
});
