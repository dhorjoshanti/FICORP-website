// FICORP WEBSITE
// Simple navigation and optional AJAX Formspree submission.

const header = document.querySelector(".site-header");
const homeSection = document.querySelector("#home");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");

// Show navigation after scrolling beyond the opening section.
const updateHeader = () => {
  if (!homeSection || window.innerWidth <= 900) return;
  header.classList.toggle("visible", window.scrollY > homeSection.offsetHeight * 0.35);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });
window.addEventListener("resize", updateHeader);

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Keep footer year current automatically.
document.querySelector("#year").textContent = new Date().getFullYear();

// Optional AJAX handling for Formspree.
// The form still works normally if this script is removed.
const form = document.querySelector("#contact-form");
const status = document.querySelector("#form-status");

if (form) {
  form.addEventListener("submit", async (event) => {
    const endpoint = form.getAttribute("action");

    // Prevent accidental testing before the real Formspree ID is inserted.
    if (endpoint.includes("YOUR_FORMSPREE_FORM_ID")) {
      event.preventDefault();
      if (status) {
        status.textContent = "Form setup is pending. Please add your Formspree form ID.";
      }
      return;
    }

    event.preventDefault();

    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;

    submitButton.disabled = true;
    submitButton.textContent = "Sending...";
    if (status) status.textContent = "";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { "Accept": "application/json" }
      });

      if (response.ok) {
        form.reset();
        if (status) status.textContent = "Thank you. Your message has been sent.";
      } else {
        if (status) status.textContent = "Something went wrong. Please try again or email us directly.";
      }
    } catch (error) {
      if (status) status.textContent = "Unable to send your message. Please try again later.";
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = originalText;
    }
  });
}
