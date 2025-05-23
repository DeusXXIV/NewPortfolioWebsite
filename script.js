document.addEventListener("DOMContentLoaded", function() {
  // -----------------------------
  // Dark Mode Toggling
  // -----------------------------
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

  function updateIconVisibility(isDark, iconSet) {
    if (iconSet) {
      iconSet.sun.classList.toggle("hidden", isDark);
      iconSet.moon.classList.toggle("hidden", !isDark);
    }
  }

  function setTheme(theme) {
    const isDark = theme === "dark";
    document.documentElement.classList.toggle("dark", isDark);
    updateIconVisibility(isDark, icons.desktop);
    updateIconVisibility(isDark, icons.mobile);
    localStorage.setItem("theme", theme);
  }

  const savedTheme = localStorage.getItem("theme") || "light";
  setTheme(savedTheme);

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

  // -----------------------------
  // Update Footer Year
  // -----------------------------
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // -----------------------------
  // Mobile Navigation Toggle
  // -----------------------------
  const menuToggle = document.getElementById("menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener("click", function() {
      mobileNav.classList.toggle("hidden");
    });
  }

  document.querySelectorAll("#mobile-nav a").forEach(link => {
    link.addEventListener("click", function() {
      mobileNav.classList.add("hidden");
    });
  });

  window.addEventListener("resize", function() {
    if (window.innerWidth >= 768) {
      mobileNav.classList.add("hidden");
    }
  });

   
  // Preview Modal Functionality for all preview triggers:
  const previewTriggers = document.querySelectorAll('.preview-trigger');
  const previewModal = document.getElementById('preview-modal');
  const modalImg = document.getElementById('modal-img');

  previewTriggers.forEach(trigger => {
    trigger.addEventListener('click', function(e) {
      e.stopPropagation();
      e.preventDefault();
      const imgSrc = trigger.getAttribute('data-preview-src');
      if (imgSrc) {
        modalImg.src = imgSrc;
      }
      previewModal.classList.remove('hidden');
    });
  });

  previewModal.addEventListener('click', function(e) {
    if (e.target === previewModal) {
      previewModal.classList.add('hidden');
    }
  });
});
