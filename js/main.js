import { setupNavigation } from './navigation.js';
import { setupProjects } from './projects.js';
import { setupAnimations } from './animations.js';
import { setupContactForm } from './contact.js';

// Initialize all components
document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  setupProjects();
  setupAnimations();
  setupContactForm();
  
  // Back to top button
  setupBackToTop();
});

// Setup back to top button
function setupBackToTop() {
  const backToTopButton = document.createElement('button');
  backToTopButton.className = 'back-to-top';
  backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
  document.body.appendChild(backToTopButton);
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      backToTopButton.classList.add('visible');
    } else {
      backToTopButton.classList.remove('visible');
    }
  });
  
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}