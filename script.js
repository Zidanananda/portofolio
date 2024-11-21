// Scroll to section smoothly
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Form submission (dummy)
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for contacting me! I will get back to you soon.");
  });
