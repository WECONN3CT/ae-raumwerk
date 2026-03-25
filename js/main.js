/* ============================================
   AE Raumwerk - Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

  // --- Mobile Navigation ---
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.getElementById('mobileNav');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () {
      this.classList.toggle('active');
      mobileNav.classList.toggle('open');
      document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
    });

    // Close mobile nav when clicking a link (not the dropdown toggle)
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // --- Mobile Dropdown ---
  const mobileDropdownToggle = document.querySelector('.mobile-dropdown-toggle');
  const mobileDropdownMenu = document.querySelector('.mobile-dropdown-menu');

  if (mobileDropdownToggle && mobileDropdownMenu) {
    mobileDropdownToggle.addEventListener('click', function () {
      this.classList.toggle('open');
      mobileDropdownMenu.classList.toggle('open');
      this.setAttribute('aria-expanded', mobileDropdownMenu.classList.contains('open'));
    });
  }

  // --- Scroll Fade-In Animations ---
  const fadeElements = document.querySelectorAll('.fade-in');

  if (fadeElements.length > 0) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });

    fadeElements.forEach(function (el) {
      observer.observe(el);
    });
  }

  // --- Header scroll shadow ---
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 10) {
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
      } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
      }
    });
  }

  // --- JotForm auto-resize ---
  window.addEventListener('message', function (e) {
    if (typeof e.data !== 'string') return;
    var args = e.data.split(':');
    var iframe = document.getElementById('JotFormIFrame-240082312915044');
    if (!iframe) return;

    if (args[0] === 'setHeight' && args[1]) {
      iframe.style.height = args[1] + 'px';
    }
    if (args[0] === 'scrollIntoView') {
      iframe.scrollIntoView();
    }
  });

});
