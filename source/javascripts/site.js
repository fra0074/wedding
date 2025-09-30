// Wedding Site JavaScript

document.addEventListener('DOMContentLoaded', function() {
  initNavbar();
  initSmoothScroll();
  initLanguageSelector();
  initMobileMenu();
  initAccordions();
  initTabs();
});

// Navbar scroll effect
function initNavbar() {
  const navbar = document.getElementById('navbar');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// Smooth scrolling
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 70; // Account for fixed navbar
        
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        const mobileMenu = document.getElementById('mobileMenu');
        mobileMenu.classList.remove('active');
      }
    });
  });
}

// Language selector
function initLanguageSelector() {
  const languageBtn = document.getElementById('languageBtn');
  const languageDropdown = document.getElementById('languageDropdown');
  
  if (languageBtn && languageDropdown) {
    languageBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      languageDropdown.classList.toggle('active');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function() {
      languageDropdown.classList.remove('active');
    });
    
    languageDropdown.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  }
}

// Mobile menu
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
    });
  }
}

// Accordion functionality
function initAccordions() {
  const accordionTriggers = document.querySelectorAll('.accordion-trigger');
  
  accordionTriggers.forEach(trigger => {
    trigger.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      const accordionId = this.getAttribute('data-accordion');
      const content = document.getElementById(accordionId);
      const chevron = this.querySelector('.chevron');
      
      if (content && chevron) {
        const isActive = content.classList.contains('active');
        
        // Close all other accordions first
        accordionTriggers.forEach(otherTrigger => {
          if (otherTrigger !== this) {
            const otherId = otherTrigger.getAttribute('data-accordion');
            const otherContent = document.getElementById(otherId);
            const otherChevron = otherTrigger.querySelector('.chevron');
            
            if (otherContent) {
              otherContent.style.maxHeight = '0px';
              otherContent.classList.remove('active');
            }
            if (otherChevron) {
              otherChevron.style.transform = 'rotate(0deg)';
            }
          }
        });
        
        // Toggle current accordion
        if (isActive) {
          // Close current accordion
          content.style.maxHeight = '0px';
          content.classList.remove('active');
          chevron.style.transform = 'rotate(0deg)';
        } else {
          // Open current accordion
          content.style.maxHeight = content.scrollHeight + 'px';
          content.classList.add('active');
          chevron.style.transform = 'rotate(180deg)';
        }
      }
    });
  });
}

// Tab functionality
function initTabs() {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabPanels = document.querySelectorAll('.tab-panel');
  
  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      const targetTab = this.getAttribute('data-tab');
      
      // Remove active class from all buttons and panels
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabPanels.forEach(panel => panel.classList.remove('active'));
      
      // Add active class to clicked button and corresponding panel
      this.classList.add('active');
      const targetPanel = document.getElementById(targetTab);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });
}

// Utility functions
function fadeIn(element, duration = 300) {
  element.style.opacity = 0;
  element.style.display = 'block';
  
  let start = performance.now();
  
  function animate(currentTime) {
    let elapsed = currentTime - start;
    let progress = elapsed / duration;
    
    if (progress < 1) {
      element.style.opacity = progress;
      requestAnimationFrame(animate);
    } else {
      element.style.opacity = 1;
    }
  }
  
  requestAnimationFrame(animate);
}

function fadeOut(element, duration = 300) {
  let start = performance.now();
  
  function animate(currentTime) {
    let elapsed = currentTime - start;
    let progress = elapsed / duration;
    
    if (progress < 1) {
      element.style.opacity = 1 - progress;
      requestAnimationFrame(animate);
    } else {
      element.style.opacity = 0;
      element.style.display = 'none';
    }
  }
  
  requestAnimationFrame(animate);
}