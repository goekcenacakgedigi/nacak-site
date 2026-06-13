/* ══════════════════════════════════════════════
   NACAK Döviz & Altın — script.js
   Scroll ile yumuşak içerik geçiş animasyonu
   ══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', function () {

  // Animasyon uygulanacak ögeler
  var targets = document.querySelectorAll(
    '.about__inner, .section-header, .service-card, .contact__inner'
  );

  // Kademeli görünme için kartlara küçük gecikme ekle
  document.querySelectorAll('.service-card').forEach(function (card, i) {
    card.style.transitionDelay = (i * 0.08) + 's';
  });

  // Hareket azaltma tercihi varsa animasyonu atla
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!('IntersectionObserver' in window) || reduceMotion) {
    targets.forEach(function (el) { el.classList.add('reveal', 'is-visible'); });
    return;
  }

  // Başlangıç durumunu ver
  targets.forEach(function (el) { el.classList.add('reveal'); });

  var observer = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  targets.forEach(function (el) { observer.observe(el); });

});
