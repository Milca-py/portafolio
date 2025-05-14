export function setupContactForm() {
  const contactForm = document.getElementById('contact-form');
  
  if (!contactForm) return;
  
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Validate form
    if (!validateForm(name, email, message)) {
      return;
    }
    
    // Normally, you would send form data to a server here
    // For this demo, we'll simulate a successful submission
    showSuccessMessage(contactForm);
    
    // Reset form
    contactForm.reset();
  });
  
  // Form validation
  function validateForm(name, email, message) {
    let isValid = true;
    
    // Clear any existing error messages
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(msg => msg.remove());
    
    // Validate name
    if (name.trim() === '') {
      addErrorMessage('name', 'Please enter your name');
      isValid = false;
    }
    
    // Validate email
    if (!isValidEmail(email)) {
      addErrorMessage('email', 'Please enter a valid email address');
      isValid = false;
    }
    
    // Validate message
    if (message.trim() === '') {
      addErrorMessage('message', 'Please enter your message');
      isValid = false;
    }
    
    return isValid;
  }
  
  // Add error message to form field
  function addErrorMessage(inputId, message) {
    const input = document.getElementById(inputId);
    input.classList.add('error');
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    errorDiv.style.color = 'red';
    errorDiv.style.fontSize = '0.875rem';
    errorDiv.style.marginTop = '0.25rem';
    
    input.parentNode.appendChild(errorDiv);
    
    // Add shake animation
    input.classList.add('shake');
    setTimeout(() => {
      input.classList.remove('shake');
    }, 600);
    
    // Remove error on input
    input.addEventListener('input', () => {
      input.classList.remove('error');
      const errorMsg = input.parentNode.querySelector('.error-message');
      if (errorMsg) {
        errorMsg.remove();
      }
    });
  }
  
  // Email validation helper
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  // Show success message
  function showSuccessMessage(form) {
    // Check if success message already exists
    let successMsg = document.querySelector('.form-success');
    
    if (!successMsg) {
      // Create success message
      successMsg = document.createElement('div');
      successMsg.className = 'form-success';
      successMsg.textContent = 'Your message has been sent successfully!';
      
      // Add success message after form
      form.parentNode.appendChild(successMsg);
    }
    
    // Show the message
    successMsg.classList.add('show');
    
    // Hide the message after 5 seconds
    setTimeout(() => {
      successMsg.classList.remove('show');
    }, 5000);
  }
}