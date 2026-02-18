// ============================================================
// PalMultimedia — Main JS
// ============================================================

// Sticky navbar shadow on scroll
const navbar = document.getElementById('navbar');
const stickyCta = document.getElementById('stickyCta');

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  // Navbar shadow
  if (y > 20) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');

  // Show sticky CTA after scrolling past hero (~600px)
  if (y > 600) stickyCta.classList.add('visible');
  else stickyCta.classList.remove('visible');
});

// Mobile nav toggle (simple show/hide)
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.style.display === 'flex';
    navLinks.style.display = isOpen ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '70px';
    navLinks.style.left = '0';
    navLinks.style.right = '0';
    navLinks.style.background = '#fff';
    navLinks.style.padding = '16px 24px 24px';
    navLinks.style.borderBottom = '1px solid #e2e8f0';
    navLinks.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)';
    navLinks.style.zIndex = '99';
    if (!isOpen) navbar.style.position = 'relative';
  });

  // Close nav when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.style.display = 'none';
    });
  });
}

// Contact form — prevent default, show success message
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = '✓ Request Sent! We\'ll be in touch soon.';
    btn.style.background = '#16a34a';
    btn.disabled = true;
    // Reset after 5 seconds
    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = '';
      btn.disabled = false;
      contactForm.reset();
    }, 5000);
  });
}

// Smooth scroll for internal anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80; // navbar height
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// Intersection Observer for subtle fade-in animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

// Apply fade-in to cards
const animatedEls = document.querySelectorAll(
  '.service-card, .usp-card, .pain-card, .who-card, .result-item, .process-step, .about-card'
);

animatedEls.forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = `opacity 0.5s ease ${i * 0.05}s, transform 0.5s ease ${i * 0.05}s`;
  observer.observe(el);
});
