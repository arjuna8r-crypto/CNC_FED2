// Select elements
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

// Toggle menu on click
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
