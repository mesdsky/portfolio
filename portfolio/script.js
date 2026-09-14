document.documentElement.classList.add('js');

const progress = document.createElement('div');
progress.className = 'progress-bar';
progress.setAttribute('aria-hidden', 'true');
progress.innerHTML = '<span></span>';
document.body.prepend(progress);
const progressFill = progress.firstElementChild;
const nav = document.querySelector('.nav');

function updateScrollUI() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = max > 0 ? window.scrollY / max : 0;
  progressFill.style.transform = `scaleX(${Math.min(1, Math.max(0, ratio))})`;
  nav.classList.toggle('scrolled', window.scrollY > 24);
}
window.addEventListener('scroll', updateScrollUI, { passive: true });
updateScrollUI();

const revealTargets = [
  ...document.querySelectorAll('.section-heading, .service-card, .case, .timeline-item, .about-card, .contact > *, footer > *')
];
revealTargets.forEach((element, index) => {
  element.classList.add('reveal');
  if (element.classList.contains('service-card')) {
    element.style.setProperty('--delay', `${(index % 3) * 90}ms`);
  }
});

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  revealTargets.forEach((element) => observer.observe(element));
} else {
  revealTargets.forEach((element) => element.classList.add('is-visible'));
}

const dialog = document.querySelector('#case-dialog');
document.querySelector('#open-case').addEventListener('click', () => dialog.showModal());
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});

function updateClock() {
  const time = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Jakarta', hour: '2-digit', minute: '2-digit', hour12: false
  }).format(new Date());
  document.querySelector('#clock').textContent = `${time} WIB`;
}
updateClock();
setInterval(updateClock, 60000);

if (new URLSearchParams(window.location.search).has('qa')) {
  document.documentElement.classList.add('qa');
  revealTargets.forEach((element) => element.classList.add('is-visible'));
}
