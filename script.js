document.addEventListener("DOMContentLoaded", function() {
  
  // Mobile menu toggle functionality
  const menuIcon = document.querySelector('.menu-icon');
  const navItems = document.querySelector('.nav_items');
  
  if (menuIcon) {
    menuIcon.addEventListener('click', function() {
      if (navItems.style.display === 'block') {
        navItems.style.display = 'none';
      } else {
        navItems.style.display = 'block';
        // Adjust nav items styling for mobile
        navItems.style.position = 'absolute';
        navItems.style.top = '60px';
        navItems.style.left = '0';
        navItems.style.width = '100%';
        navItems.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        navItems.style.zIndex = '1000';
        navItems.style.padding = '1rem 0';
        
        // Adjust nav list styling
        const navList = navItems.querySelector('ul');
        navList.style.flexDirection = 'column';
        navList.style.alignItems = 'center';
        navList.style.gap = '1rem';
      }
    });
  }

  // Accordion functionality for explore options
  const options = document.querySelectorAll('.options');
  
  options.forEach(option => {
    const button = option.querySelector('button');
    const icon = option.querySelector('i');
    
    option.addEventListener('click', function() {
      // This would toggle dropdown content in a real implementation
      // Here we'll just animate the icon for visual feedback
      if (icon.classList.contains('fa-angle-down')) {
        icon.classList.remove('fa-angle-down');
        icon.classList.add('fa-angle-up');
      } else {
        icon.classList.remove('fa-angle-up');
        icon.classList.add('fa-angle-down');
      }
    });
  });

  // Form submission handling
  const appForm = document.querySelector('.submit');
  
  if (appForm) {
    appForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const emailInput = appForm.querySelector('input[type="text"]');
      const emailValue = emailInput.value.trim();
      
      if (emailValue === '') {
        // Show error for empty input
        emailInput.style.borderColor = '#e23744';
        
        // Reset after a delay
        setTimeout(() => {
          emailInput.style.borderColor = '#e0e0e0';
        }, 3000);
      } else if (!isValidEmail(emailValue)) {
        // Show error for invalid email format
        emailInput.style.borderColor = '#e23744';
        
        // Reset after a delay
        setTimeout(() => {
          emailInput.style.borderColor = '#e0e0e0';
        }, 3000);
      } else {
        // Success feedback
        const button = appForm.querySelector('button');
        const originalText = button.textContent;
        
        button.textContent = 'Sent!';
        button.style.backgroundColor = '#4CAF50';
        emailInput.value = '';
        
        // Reset after a delay
        setTimeout(() => {
          button.textContent = originalText;
          button.style.backgroundColor = '#e23744';
        }, 3000);
      }
    });
  }

  // Email validation helper function
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Smooth scroll to sections when clicking on nav links
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // This would typically scroll to sections in a real implementation
      // Since we don't have section IDs, we'll just animate for visual feedback
      link.style.opacity = '0.7';
      
      setTimeout(() => {
        link.style.opacity = '1';
      }, 300);
    });
  });

  // "See more" functionality for popular locations
  const seeMoreBox = document.querySelector('.box:last-child');
  
  if (seeMoreBox) {
    seeMoreBox.addEventListener('click', function() {
      const icon = seeMoreBox.querySelector('i');
      
      if (icon.classList.contains('fa-angle-down')) {
        icon.classList.remove('fa-angle-down');
        icon.classList.add('fa-angle-up');
        
        // This would typically show more locations
        // Here we just provide visual feedback
        seeMoreBox.style.backgroundColor = '#f8f8f8';
        
        setTimeout(() => {
          seeMoreBox.style.backgroundColor = 'transparent';
          icon.classList.remove('fa-angle-up');
          icon.classList.add('fa-angle-down');
        }, 1000);
      }
    });
  }

  // Add scroll animation effects for various elements
  const animateOnScroll = function() {
    const cards = document.querySelectorAll('.card');
    const boxes = document.querySelectorAll('.box');
    
    cards.forEach(card => {
      const cardPosition = card.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      
      if (cardPosition < screenPosition) {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }
    });
    
    boxes.forEach(box => {
      const boxPosition = box.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      
      if (boxPosition < screenPosition) {
        box.style.opacity = '1';
        box.style.transform = 'translateX(0)';
      }
    });
  };

  // Set initial styles for animation elements
  const cards = document.querySelectorAll('.card');
  const boxes = document.querySelectorAll('.box');
  
  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });
  
  boxes.forEach(box => {
    box.style.opacity = '0';
    box.style.transform = 'translateX(-20px)';
    box.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });

  // Call animation on load and scroll
  animateOnScroll();
  window.addEventListener('scroll', animateOnScroll);
});
