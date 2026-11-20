/* ═══════════════════════════════════════════
   SAM'S CLUB – $500 GIFT CARD LANDING PAGE
   main.js
   ═══════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── Countdown timer ─────────────────── */
  function initCountdown() {
    const el = document.getElementById('countdown-timer');
    if (!el) return;

    // Pick a random start between 8–18 min so it feels live
    let totalSeconds = Math.floor(Math.random() * 600) + 480;

    function tick() {
      const m = Math.floor(totalSeconds / 60);
      const s = totalSeconds % 60;
      el.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;

      if (totalSeconds <= 60) {
        el.style.color = '#E31837';
      }

      if (totalSeconds > 0) {
        totalSeconds--;
        setTimeout(tick, 1000);
      } else {
        el.textContent = '00:00';
        el.style.color = '#E31837';
      }
    }

    tick();
  }

  /* ── Animated claim counter ──────────── */
  function initClaimsCounter() {
    const el = document.getElementById('claims-count');
    if (!el) return;

    // Start at a believable number, slowly increment
    let count = Math.floor(Math.random() * 300) + 1200;
    el.textContent = count.toLocaleString();

    setInterval(function () {
      if (Math.random() < 0.4) {        // ~40% chance each 3 s
        count += Math.floor(Math.random() * 3) + 1;
        el.textContent = count.toLocaleString();

        // Brief highlight flash
        el.style.transition = 'color 0.15s';
        el.style.color = '#E31837';
        setTimeout(function () { el.style.color = ''; }, 500);
      }
    }, 3000);
  }

  /* ── CTA button click handler ────────── */
  function initCTA() {
    const btn = document.getElementById('cta-btn');
    if (!btn) return;

    btn.addEventListener('click', function () {
      // New tab opens instantly via target="_blank" on the anchor.
      // Just show a quick visual confirmation — no redirect delay needed.
      btn.innerHTML = '✅ Opened! <span class="cta-arrow">↗</span>';
      btn.style.opacity = '0.80';
      setTimeout(function () {
        btn.innerHTML = 'Claim Your $500 Gift Card <span class="cta-arrow">→</span>';
        btn.style.opacity = '1';
      }, 2000);
    });
  }

  /* ── Step hover – announce for a11y ─── */
  function initStepHovers() {
    const steps = document.querySelectorAll('.step-item');
    steps.forEach(function (step) {
      step.setAttribute('tabindex', '0');
      step.setAttribute('role', 'listitem');
    });
  }

  /* ── Reduced-motion guard ────────────── */
  function respectMotionPreference() {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) {
      document.documentElement.style.setProperty('--anim-dur', '0.001s');
    }
  }

  /* ── Init ────────────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {
    respectMotionPreference();
    initCountdown();
    initClaimsCounter();
    initCTA();
    initStepHovers();
  });

})();
