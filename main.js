document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.fixed-nav .nav-item');
  const sections = document.querySelectorAll('.content-section');

  function updateActiveLink() {
    let current = '';
    const scrollPosition = window.pageYOffset + window.innerHeight / 2; // Check position from the middle of the viewport

    sections.forEach(section => {
      if (section.offsetTop <= scrollPosition) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.href.includes(current)) {
        link.classList.add('active');
      }
    });
  }

  // Initial check on page load
  updateActiveLink();

  // Update on scroll
  window.addEventListener('scroll', updateActiveLink);
});
