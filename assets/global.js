/**
 * New Avatar Theme — Global JavaScript
 */

class NewAvatarTheme {
  constructor() {
    this.initHeader();
    this.initSmoothScroll();
    this.initAnimations();
    this.initNewsletter();
  }

  initHeader() {
    const header = document.querySelector('[data-header]');
    if (!header) return;

    const toggle = header.querySelector('[data-menu-toggle]');
    const nav = header.querySelector('[data-nav]');

    if (toggle && nav) {
      toggle.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', isOpen);
        document.body.classList.toggle('menu-open', isOpen);
      });

      nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          nav.classList.remove('is-open');
          toggle.setAttribute('aria-expanded', 'false');
          document.body.classList.remove('menu-open');
        });
      });
    }

    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const current = window.scrollY;
      header.classList.toggle('is-scrolled', current > 50);
      header.classList.toggle('is-hidden', current > lastScroll && current > 200);
      lastScroll = current;
    }, { passive: true });
  }

  initSmoothScroll() {
    document.querySelectorAll('a[href*="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const url = new URL(anchor.href, window.location.origin);
        // Only intercept same-page anchors; let cross-page links navigate normally
        if (url.pathname !== window.location.pathname || !url.hash) return;
        const target = document.querySelector(url.hash);
        if (target) {
          e.preventDefault();
          const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 72;
          const top = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      });
    });

    // Smooth-scroll to anchor with header offset after cross-page navigation
    if (window.location.hash) {
      const target = document.querySelector(window.location.hash);
      if (target) {
        setTimeout(() => {
          const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 72;
          const top = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }, 100);
      }
    }
  }

  initAnimations() {
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
  }

  initNewsletter() {
    document.querySelectorAll('[data-newsletter-form]').forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = form.querySelector('input[type="email"]');
        const btn = form.querySelector('button');
        if (!input?.value) return;

        btn.textContent = 'Subscribed ✓';
        btn.disabled = true;
        input.value = '';
        setTimeout(() => {
          btn.textContent = btn.dataset.defaultText || 'Subscribe';
          btn.disabled = false;
        }, 3000);
      });
    });
  }
}

document.addEventListener('DOMContentLoaded', () => new NewAvatarTheme());
