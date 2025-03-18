const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

const sunIcon = `<svg class="theme-icon" width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 1C11 0.447715 11.4477 0 12 0C12.5523 0 13 0.447715 13 1V3C13 3.55228 12.5523 4 12 4C11.4477 4 11 3.55228 11 3V1Z" fill="#111111" stroke-width="0.5" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12ZM8.06167 12C8.06167 14.1751 9.82492 15.9383 12 15.9383C14.1751 15.9383 15.9383 14.1751 15.9383 12C15.9383 9.82492 14.1751 8.06167 12 8.06167C9.82492 8.06167 8.06167 9.82492 8.06167 12Z" fill="#111111" stroke-width="0.5"/>
<path d="M20.4853 3.51472C20.0947 3.12419 19.4616 3.12419 19.0711 3.51472L17.6568 4.92893C17.2663 5.31946 17.2663 5.95262 17.6568 6.34315C18.0474 6.73367 18.6805 6.73367 19.0711 6.34315L20.4853 4.92893C20.8758 4.53841 20.8758 3.90524 20.4853 3.51472Z" fill="#111111" stroke-width="0.5"/>
<path d="M1 13C0.447715 13 0 12.5523 0 12C0 11.4477 0.447715 11 1 11H3C3.55228 11 4 11.4477 4 12C4 12.5523 3.55228 13 3 13H1Z" fill="#111111" stroke-width="0.5"/>
<path d="M3.51472 3.51472C3.1242 3.90524 3.1242 4.53841 3.51472 4.92893L4.92894 6.34315C5.31946 6.73367 5.95263 6.73367 6.34315 6.34315C6.73368 5.95262 6.73368 5.31946 6.34315 4.92893L4.92894 3.51472C4.53841 3.12419 3.90525 3.12419 3.51472 3.51472Z" fill="#111111" stroke-width="0.5"/>
<path d="M11 21C11 20.4477 11.4477 20 12 20C12.5523 20 13 20.4477 13 21V23C13 23.5523 12.5523 24 12 24C11.4477 24 11 23.5523 11 23V21Z" fill="#111111" stroke-width="0.5"/>
<path d="M6.34315 17.6569C5.95263 17.2663 5.31946 17.2663 4.92894 17.6569L3.51473 19.0711C3.1242 19.4616 3.1242 20.0948 3.51473 20.4853C3.90525 20.8758 4.53842 20.8758 4.92894 20.4853L6.34315 19.0711C6.73368 18.6805 6.73368 18.0474 6.34315 17.6569Z" fill="#111111" stroke-width="0.5"/>
<path d="M21 13C20.4477 13 20 12.5523 20 12C20 11.4477 20.4477 11 21 11H23C23.5523 11 24 11.4477 24 12C24 12.5523 23.5523 13 23 13H21Z" fill="#111111" stroke-width="0.5"/>
<path d="M17.6568 17.6569C17.2663 18.0474 17.2663 18.6805 17.6568 19.0711L19.0711 20.4853C19.4616 20.8758 20.0947 20.8758 20.4853 20.4853C20.8758 20.0948 20.8758 19.4616 20.4853 19.0711L19.0711 17.6569C18.6805 17.2663 18.0474 17.2663 17.6568 17.6569Z" fill="#111111" stroke-width="0.5"/>
</svg>`;

const moonIcon = `<svg class="theme-icon" width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g transform="scale(-1,1) translate(-24,0)">
    <path d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z" 
      stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
</svg>`;

// Toggle theme
function toggleTheme() {
  const isDark = body.classList.toggle('dark-theme');

  // SVG
  themeToggle.innerHTML = isDark ? moonIcon : sunIcon;

  // title update
  themeToggle.setAttribute(
    'title',
    isDark ? 'Switch to light mode' : 'Switch to dark mode'
  );

  // Save in localStorage
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Check saved theme
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const isDark = savedTheme ? savedTheme === 'dark' : prefersDark;

  if (isDark) {
    body.classList.add('dark-theme');
  }

  themeToggle.innerHTML = isDark ? moonIcon : sunIcon;
  themeToggle.setAttribute(
    'title',
    isDark ? 'Switch to light mode' : 'Switch to dark mode'
  );
});

themeToggle.addEventListener('click', toggleTheme);

// Mobile menu

const mobileMenu = document.querySelector('.mobile-menu');
const openMenuBtn = document.querySelector('.burger-menu');
const closeMenuBtn = document.querySelector('.close-menu-btn');
const closeMenuLinks = document.querySelectorAll('.menu-item');

const toggleMenu = () => {
  const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true';
  openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
  mobileMenu.classList.toggle('is-open');
  body.classList.toggle('no-scroll', mobileMenu.classList.contains('is-open'));
};

openMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);

closeMenuLinks.forEach(item => item.addEventListener('click', toggleMenu));

// Slider Menu

document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.querySelector('.desktop-menu-btn');
  const navList = document.querySelector('.nav-list');
  let menuOpen = false;
  let closeTimeout;

  function openMenu() {
    if (!menuOpen) {
      navList.classList.add('active');
    }
  }

  function closeMenu() {
    closeTimeout = setTimeout(() => {
      if (!navList.matches(':hover') && !menuButton.matches(':hover')) {
        navList.classList.remove('active');
        menuOpen = false;
      }
    }, 3000);
  }

  menuButton.addEventListener('mouseenter', function () {
    openMenu();
  });

  navList.addEventListener('mouseenter', function () {
    openMenu();
  });

  menuButton.addEventListener('mouseleave', function () {
    closeMenu();
  });

  navList.addEventListener('mouseleave', function () {
    closeMenu();
  });
});
