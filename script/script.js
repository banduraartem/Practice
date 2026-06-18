
  document.addEventListener('DOMContentLoaded', () => {
    const mobileToggle = document.querySelector('.mobile-toggle');
    const desktopNav = document.querySelector('.desktop-nav');

    mobileToggle.addEventListener('click', () => {
      // Перемикаємо клас для відображення меню
      desktopNav.classList.toggle('active');
      // Перемикаємо клас для анімації самої кнопки (бургер -> хрестик)
      mobileToggle.classList.toggle('active');
    });

    // Закриваємо меню при кліку на будь-яке посилання всередині
    const navLinks = desktopNav.querySelectorAll('a, button');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        desktopNav.classList.remove('active');
        mobileToggle.classList.remove('active');
      });
    });
  });
