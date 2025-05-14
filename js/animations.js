export function setupAnimations() {
  // Reveal elements on scroll
  const revealElements = document.querySelectorAll('.reveal');
  
  function checkReveal() {
    const windowHeight = window.innerHeight;
    const revealPoint = 150;
    
    revealElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      
      if (elementTop < windowHeight - revealPoint) {
        element.classList.add('active');
      }
    });
  }
  
  // Check on load
  window.addEventListener('DOMContentLoaded', checkReveal);
  
  // Check on scroll
  window.addEventListener('scroll', checkReveal);
  
  // Optional: Add typing effect to hero text
  const addTypingEffect = () => {
    const heroHeading = document.querySelector('.hero h1');
    
    if (heroHeading) {
      heroHeading.classList.add('typing-effect');
    }
  };
  
  // Smooth scrolling for anchor links
  const smoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  };
  
  // Animate skill bars
  const animateSkillBars = () => {
    const skills = document.querySelectorAll('.skill-level');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.width = entry.target.style.width;
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    skills.forEach(skill => {
      // Initially set width to 0
      const originalWidth = skill.style.width;
      skill.style.width = '0%';
      
      // Animate when in viewport
      observer.observe(skill);
      
      // Set animation after a delay
      setTimeout(() => {
        skill.style.transition = 'width 1.5s ease-in-out';
        skill.style.width = originalWidth;
      }, 200);
    });
  };
  
  // Initialize animations
  smoothScroll();
  animateSkillBars();
}