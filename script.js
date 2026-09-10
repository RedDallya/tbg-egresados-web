const topbar = document.querySelector('.topbar');
const btn = document.querySelector('.menu-btn');
btn?.addEventListener('click', () => {
  const open = topbar.classList.toggle('menu-open');
  btn.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => {
  topbar.classList.remove('menu-open');
  btn?.setAttribute('aria-expanded','false');
}));
