const hMenu = document.getElementById('h-menu');
const navMenu = document.getElementById('nav-menu');

hMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
});

navMenu.addEventListener('click', (e) => {
    if(e.target.tagName === 'A') {
        navMenu.classList.remove('show-menu');
    }
});

window.addEventListener('resize', () => {
    if(window.innerWidth > 1100) {
        navMenu.classList.remove('show-menu');
    }
});