(function () {
  'use strict';

  /* ---------- Page Loader ---------- */
  window.addEventListener('load', () => {
    const loader = document.getElementById('pageLoader');
    if (loader) setTimeout(() => loader.classList.add('is-hidden'), 350);
  });

  /* ---------- Navbar solid-on-scroll + Back to top ---------- */
  const navbar = document.getElementById('mainNav');
  const backToTop = document.getElementById('backToTop');

  const onScroll = () => {
    const y = window.scrollY;
    if (navbar) {
      if (y > 60) {
        navbar.classList.add('navbar-solid');
        navbar.classList.remove('navbar-transparent');
      } else {
        navbar.classList.add('navbar-transparent');
        navbar.classList.remove('navbar-solid');
      }
    }
    if (backToTop) backToTop.classList.toggle('is-visible', y > 400);

    // Subtle hero parallax
    const heroImg = document.querySelector('.hero-image-wrap');
    if (heroImg && y < window.innerHeight) {
      heroImg.style.transform = `translateY(${y * 0.08}px)`;
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  backToTop && backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---------- Smooth scroll + mobile menu auto-close ---------- */
  const navLinks = document.querySelectorAll('a[href^="#"]');
  const collapseEl = document.getElementById('navContent');
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({ top, behavior: 'smooth' });
        if (collapseEl && collapseEl.classList.contains('show') && window.bootstrap) {
          const inst = window.bootstrap.Collapse.getInstance(collapseEl) || new window.bootstrap.Collapse(collapseEl, { toggle: false });
          inst.hide();
        }
      }
    });
  });

  /* ---------- Active link highlighting via scroll ---------- */
  const sectionIds = ['home', 'products', 'categories', 'about', 'testimonials', 'contact'];
  const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
  const linkMap = {};
  document.querySelectorAll('.nav-underline-link').forEach((a) => {
    const id = (a.getAttribute('href') || '').replace('#', '');
    if (id) linkMap[id] = a;
  });

  const updateActive = () => {
    const fromTop = window.scrollY + 120;
    let current = sections[0] ? sections[0].id : '';
    sections.forEach((s) => { if (s.offsetTop <= fromTop) current = s.id; });
    Object.values(linkMap).forEach((a) => a.classList.remove('active'));
    if (linkMap[current]) linkMap[current].classList.add('active');
  };
  window.addEventListener('scroll', updateActive, { passive: true });
  updateActive();

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  /* ---------- Counters ---------- */
  const counters = document.querySelectorAll('.counter');
  const formatNumber = (n) => n.toLocaleString('en-US');
  const animateCounter = (el) => {
    const target = parseInt(el.dataset.target || '0', 10);
    const duration = 1800;
    const start = performance.now();
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.floor(eased * target);
      el.textContent = formatNumber(value) + (progress === 1 && target >= 1000 ? '+' : '');
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  if ('IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          animateCounter(e.target);
          counterObserver.unobserve(e.target);
        }
      });
    }, { threshold: 0.4 });
    counters.forEach((c) => counterObserver.observe(c));
  } else {
    counters.forEach(animateCounter);
  }

  /* ---------- Newsletter ---------- */
  const newsletterForm = document.getElementById('newsletterForm');
  const newsletterMsg = document.getElementById('newsletterMsg');
  newsletterForm && newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = newsletterForm.querySelector('input[type="email"]');
    const value = (input.value || '').trim();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    if (!valid) {
      newsletterMsg.textContent = 'Please enter a valid email address.';
      newsletterMsg.style.color = '#fca5a5';
      input.focus();
      return;
    }
    newsletterMsg.textContent = '🎉 Thanks for subscribing! Check your inbox.';
    newsletterMsg.style.color = '';
    newsletterForm.reset();
  });

  /* ---------- Contact form (Bootstrap validation) ---------- */
  const contactForm = document.getElementById('contactForm');
  const contactMsg = document.getElementById('contactMsg');
  contactForm && contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!contactForm.checkValidity()) {
      contactForm.classList.add('was-validated');
      contactMsg.textContent = '';
      return;
    }
    contactMsg.textContent = '✅ Thanks! Your message has been sent, we\'ll be in touch soon.';
    contactForm.classList.remove('was-validated');
    contactForm.reset();
  });

  /* ---------- Add to cart micro-feedback ---------- */
  document.querySelectorAll('.btn-cart').forEach((btn) => {
    btn.addEventListener('click', () => {
      const original = btn.innerHTML;
      btn.innerHTML = '<i class="bi bi-check2"></i> Added';
      btn.disabled = true;
      setTimeout(() => { btn.innerHTML = original; btn.disabled = false; }, 1400);
      const badge = document.querySelector('.cart-badge');
      if (badge) badge.textContent = String(parseInt(badge.textContent || '0', 10) + 1);
    });
  });

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
