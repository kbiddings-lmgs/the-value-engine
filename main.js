document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.fixed-nav .nav-item');
  const sections = document.querySelectorAll('.content-section');

  const updateNavHighlight = () => {
    let currentSectionId = '';
    const scrollY = window.scrollY;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100; // Offset to highlight before reaching the top
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.id;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === currentSectionId) {
        link.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', updateNavHighlight);
});
