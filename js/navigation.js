export function setupNavigation() {
  const header = document.getElementById('header');
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  const navLinksArray = document.querySelectorAll('.nav-link');
  
  // Handle scroll event for changing header style
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Toggle mobile menu
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
    
    // Transform hamburger to X
    if (menuToggle.classList.contains('active')) {
      menuToggle.children[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      menuToggle.children[1].style.opacity = '0';
      menuToggle.children[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      menuToggle.children[0].style.transform = 'none';
      menuToggle.children[1].style.opacity = '1';
      menuToggle.children[2].style.transform = 'none';
    }
  });
  
  // Close mobile menu when clicking a nav link
  navLinksArray.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      menuToggle.classList.remove('active');
      menuToggle.children[0].style.transform = 'none';
      menuToggle.children[1].style.opacity = '1';
      menuToggle.children[2].style.transform = 'none';
      
      // Set active link
      navLinksArray.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });
  
  // Set active link based on scroll position
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    
    // Get all sections
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinksArray.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
}