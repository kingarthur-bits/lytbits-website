document.addEventListener("DOMContentLoaded", function () {
  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });

    document.querySelectorAll(".nav-links a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
      });
    });
  }

  // Highlight active nav link based on current page
  var currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(function (link) {
    var href = link.getAttribute("href");
    if (href === currentPage) {
      link.classList.add("active");
    }
  });

  // Set current year in footer
  var yearEl = document.getElementById("current-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Build the contact email at runtime rather than embedding it in the
  // page source. This does nothing against a targeted attacker, but it
  // stops the address from being picked up by simple scrapers that only
  // read raw HTML/JS text looking for an "@" pattern.
  var emailUser = "info";
  var emailDomain = "lytbits.sg";
  var emailAddress = emailUser + "@" + emailDomain;

  var emailCta = document.getElementById("email-cta");
  if (emailCta) {
    emailCta.href = "mailto:" + emailAddress + "?subject=" + encodeURIComponent("Advisory Inquiry");
    emailCta.textContent = "Email " + emailAddress;
  }
});
