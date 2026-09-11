/* YOUNESS SALMI — site scripts (vanilla, no deps) */
(function () {
  'use strict';

  /* Mobile nav toggle */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('siteNav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.textContent = open ? 'CLOSE' : 'MENU';
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { nav.classList.remove('open'); toggle.textContent = 'MENU'; });
    });
  }

  /* Footer year */
  var yearEls = document.querySelectorAll('[data-year]');
  yearEls.forEach(function (el) { el.textContent = new Date().getFullYear(); });

  /* Projects index filter */
  var filterBar = document.querySelector('[data-filter-bar]');
  if (filterBar) {
    var buttons = filterBar.querySelectorAll('.filter-btn');
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        buttons.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var f = btn.getAttribute('data-filter');
        document.querySelectorAll('.proj').forEach(function (card) {
          var tags = card.getAttribute('data-tags') || '';
          card.classList.toggle('hide', f !== 'all' && tags.indexOf(f) === -1);
        });
      });
    });
  }

  /* Case-study subnav scrollspy */
  var subnav = document.querySelector('.page-subnav');
  if (subnav && typeof IntersectionObserver !== 'undefined') {
    var links = subnav.querySelectorAll('a');
    var map = {};
    links.forEach(function (l) { map[l.getAttribute('href').slice(1)] = l; });
    var sections = links.map(function (l) { return document.getElementById(l.getAttribute('href').slice(1)); }).filter(Boolean);
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          links.forEach(function (l) { l.removeAttribute('aria-current'); });
          var link = map[e.target.id];
          if (link) link.setAttribute('aria-current', 'page');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* Carousel */
  document.querySelectorAll('[data-carousel]').forEach(function (carousel) {
    var track = carousel.querySelector('[data-track]');
    var dotsEl = carousel.querySelector('[data-dots]');
    var slides = Array.prototype.slice.call(track.children);
    var dots = [];

    slides.forEach(function (_, i) {
      var d = document.createElement('button');
      d.type = 'button';
      d.className = 'carousel-dot';
      d.setAttribute('aria-label', 'Slide ' + (i + 1));
      d.addEventListener('click', function () { go(i); });
      dotsEl.appendChild(d);
      dots.push(d);
    });

    function clamp(i) { return Math.max(0, Math.min(i, slides.length - 1)); }
    function go(i) { track.scrollLeft = slides[clamp(i)].offsetLeft; }
    function slideWidth() { return track.clientWidth; }
    function indexOf() { return Math.round(track.scrollLeft / slideWidth()); }

    var clock;
    track.addEventListener('scroll', function () {
      clearTimeout(clock);
      clock = setTimeout(function () {
        var i = indexOf();
        dots.forEach(function (d, j) { d.classList.toggle('is-active', j === i); });
        if (i === 0) { carousel.querySelector('[data-prev]').setAttribute('disabled', 'disabled'); }
        else { carousel.querySelector('[data-prev]').removeAttribute('disabled'); }
        if (i === slides.length - 1) { carousel.querySelector('[data-next]').setAttribute('disabled', 'disabled'); }
        else { carousel.querySelector('[data-next]').removeAttribute('disabled'); }
      }, 60);
    });

    carousel.querySelector('[data-prev]').addEventListener('click', function () { go(indexOf() - 1); });
    carousel.querySelector('[data-next]').addEventListener('click', function () { go(indexOf() + 1); });

    var down = false, startX = 0, startLeft = 0;
    track.addEventListener('pointerdown', function (e) {
      down = true;
      startX = e.clientX;
      startLeft = track.scrollLeft;
      track.classList.add('is-dragging');
    });
    window.addEventListener('pointermove', function (e) {
      if (!down) return;
      track.scrollLeft = startLeft - (e.clientX - startX);
    });
    window.addEventListener('pointerup', function () {
      down = false;
      track.classList.remove('is-dragging');
    });
    track.addEventListener('scrollend', function () {
      track.classList.remove('is-dragging');
    });

    track.dispatchEvent(new Event('scroll'));
  });

  /* Contact form -> Formspree (AJAX) */
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = contactForm.querySelector('button[type="submit"]');
      var sentEl = contactForm.querySelector('[data-i18n="form.sent"]');
      var errEl = contactForm.querySelector('[data-i18n="form.error"]');
      sentEl.hidden = true;
      errEl.hidden = true;
      btn.disabled = true;
      fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { 'Accept': 'application/json' }
      }).then(function (res) {
        btn.disabled = false;
        if (res.ok) {
          contactForm.reset();
          sentEl.hidden = false;
        } else {
          errEl.hidden = false;
        }
      }).catch(function () {
        btn.disabled = false;
        errEl.hidden = false;
      });
    });
  }
})();