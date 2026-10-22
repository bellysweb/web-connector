const menuButton = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

if (menuButton && mainNav) {
  menuButton.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  mainNav.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      mainNav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    }
  });
}
