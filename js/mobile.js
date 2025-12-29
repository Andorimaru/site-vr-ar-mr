const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileMenu = document.getElementById('mobile-menu');

hamburgerBtn.addEventListener('click', () => {

    hamburgerBtn.classList.toggle('active');
    mobileMenu.classList.toggle('open');
});


document.addEventListener('click', (e) => {
    if (!hamburgerBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
        hamburgerBtn.classList.remove('active');
        mobileMenu.classList.remove('open');
    }
});