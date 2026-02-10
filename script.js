const navToggle = document.getElementById("nav-toggle");
const nav = document.querySelector(".nav");
const year = document.getElementById("year");
const faqItems = document.querySelectorAll(".faq-item");
const faqPanels = document.querySelectorAll(".faq-panel");
const contactForm = document.getElementById("contact-form");
const contactStatus = document.getElementById("contact-status");

const setStatus = (element, message, isError = false) => {
  if (!element) {
    return;
  }
  element.textContent = message;
  element.classList.remove("status-error", "status-success");
  element.classList.add(isError ? "status-error" : "status-success");
};

if (year) {
  year.textContent = new Date().getFullYear();
}

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}

faqItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    const isOpen = item.getAttribute("aria-expanded") === "true";
    faqItems.forEach((btn, btnIndex) => {
      btn.setAttribute("aria-expanded", "false");
      if (faqPanels[btnIndex]) {
        faqPanels[btnIndex].style.maxHeight = "0px";
      }
    });
    if (!isOpen && faqPanels[index]) {
      item.setAttribute("aria-expanded", "true");
      faqPanels[index].style.maxHeight = `${faqPanels[index].scrollHeight}px`;
    }
  });
});

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    setStatus(contactStatus, "Thanks! Your message has been received. We will reply shortly.");
    contactForm.reset();
  });
}
