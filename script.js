// Smooth scrolling and mobile menu
const navLinks = document.querySelectorAll(".nav-links a");
const menuToggle = document.getElementById("menu-toggle");
const navLinksContainer = document.getElementById("nav-links");


// Mobile menu
menuToggle.addEventListener("click", function () {
    navLinksContainer.classList.toggle("active");
});


// Close mobile menu when a link is clicked
navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinksContainer.classList.remove("active");
    });
});


// Contact form
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    formMessage.textContent =
        "Thank you! Your message has been sent.";

    contactForm.reset();
});