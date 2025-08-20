// Mobile menu toggle functionality
document.querySelector("nav button").addEventListener("click", function () {
  const navLinks = document.querySelector(".md\\:flex.space-x-8");
  navLinks.classList.toggle("hidden");
  navLinks.classList.toggle("flex");
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - 80,
      behavior: "smooth",
    });

    // Close mobile menu if open
    const navLinks = document.querySelector(".md\\:flex.space-x-8");
    if (!navLinks.classList.contains("hidden")) {
      navLinks.classList.add("hidden");
      navLinks.classList.remove("flex");
    }
  });
});

// Animation on scroll
function animateOnScroll() {
  const elements = document.querySelectorAll(".animate__animated");

  elements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (elementPosition < screenPosition) {
      element.style.opacity = "1";
    }
  });
}

document.querySelector("form").addEventListener("submit", function () {
  alert("Thanks for your feedback! We'll get back to you soon.");
});
window.addEventListener("scroll", animateOnScroll);
animateOnScroll(); // Run once on page load
