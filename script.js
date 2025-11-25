/* script.js — interactive behaviours for multi-page site */

// Path to uploaded CV file (local path provided during upload)
const CV_PATH = '/mnt/data/Kritika.pdf';

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isHidden = getComputedStyle(navLinks).display === 'none';
    navLinks.style.display = isHidden ? 'flex' : 'none';
  });

  // close the mobile menu when clicking a link
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    if (window.innerWidth <= 880) navLinks.style.display = 'none';
  }));
}

// Accessibility: keyboard focus ring handling
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('focus', () => a.style.outline = '3px solid rgba(168,135,102,0.14)');
  a.addEventListener('blur', () => a.style.outline = 'none');
});

// Animate skill bars after page load
function animateSkills() {
  document.body.classList.add('loaded');
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', animateSkills);
} else {
  animateSkills();
}

// Smooth scroll for in-page links (projects anchors)
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const href = a.getAttribute('href');
    if (href.length > 1) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
