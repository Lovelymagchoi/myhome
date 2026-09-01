const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('nav');

menuButton?.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  nav.style.display = expanded ? '' : 'flex';
  if (!expanded) {
    nav.style.position = 'absolute';
    nav.style.top = '72px';
    nav.style.left = '0';
    nav.style.right = '0';
    nav.style.padding = '22px 6vw';
    nav.style.background = '#f7f2e8';
    nav.style.flexDirection = 'column';
    nav.style.alignItems = 'flex-start';
  }
});
