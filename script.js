// FLA Website JavaScript

// ===========================
// Mobile Navigation Toggle
// ===========================
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const pillContainer = document.querySelector('.nav-pill-container');
  
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      pillContainer.classList.toggle('active');
      
      // Update aria-expanded for accessibility
      const isExpanded = pillContainer.classList.contains('active');
      menuToggle.setAttribute('aria-expanded', isExpanded);
    });
  }

  // Close mobile menu when clicking outside
  document.addEventListener('click', function(event) {
    if (pillContainer && pillContainer.classList.contains('active')) {
      if (!event.target.closest('.navbar')) {
        pillContainer.classList.remove('active');
        if (menuToggle) {
          menuToggle.setAttribute('aria-expanded', 'false');
        }
      }
    }
  });

  // Handle dropdown on mobile
  const dropdownLinks = document.querySelectorAll('.dropdown > .nav-link');
  dropdownLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const dropdown = this.parentElement;
        const dropdownContent = dropdown.querySelector('.dropdown-content');
        
        if (dropdownContent) {
          dropdownContent.classList.toggle('show');
        }
      }
    });
  });
});

// ===========================
// FAQ Accordion
// ===========================
document.addEventListener('DOMContentLoaded', function() {
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
      const answer = this.nextElementSibling;
      const isActive = this.classList.contains('active');

      // Close all other FAQs
      faqQuestions.forEach(q => {
        if (q !== this) {
          q.classList.remove('active');
          q.nextElementSibling.classList.remove('active');
        }
      });

      // Toggle current FAQ
      this.classList.toggle('active');
      answer.classList.toggle('active');
    });
  });
});

// ===========================
// Smooth Scroll for Anchor Links
// ===========================
document.addEventListener('DOMContentLoaded', function() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Skip if it's just "#" or empty
      if (href === '#' || href === '') return;

      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

        // Close mobile menu if open
        const navMenu = document.querySelector('.nav-menu');
        if (navMenu && navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
        }
      }
    });
  });
});

// ===========================
// Form Submission Handler (Placeholder)
// ===========================
document.addEventListener('DOMContentLoaded', function() {
  const mailingListForm = document.getElementById('mailingListForm');

  if (mailingListForm) {
    mailingListForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(this);
      const data = Object.fromEntries(formData);

      // Placeholder: This is where you would send data to your backend
      console.log('Form submitted with data:', data);

      // Show success message (you can customize this)
      alert('Thank you for joining our mailing list! We\'ll keep you updated on all FLA events and opportunities.');

      // Reset form
      this.reset();

      // In production, replace the alert with a proper success message
      // and send the data to your backend/email service
    });
  }
});

// ===========================
// Active Nav Link Highlighting
// ===========================
document.addEventListener('DOMContentLoaded', function() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || 
        (currentPage === '' && href === 'index.html') ||
        (currentPage === 'index.html' && href === '/')) {
      link.style.color = 'var(--primary-gold)';
      link.style.fontWeight = '600';
    }
  });
});
