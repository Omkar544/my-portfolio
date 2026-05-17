// TOP-LEVEL DOM CACHING MATRIX
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const html = document.documentElement;

const menuBtn = document.getElementById('menu-btn');
const menuIcon = document.getElementById('menu-icon');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

// INITIALIZE THEME DEPLOYMENT MATRIX
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    html.classList.add('dark');
    themeIcon.classList.replace('bxs-moon', 'bxs-sun');
} else {
    html.classList.remove('dark');
    themeIcon.classList.replace('bxs-sun', 'bxs-moon');
}

// EVENT LISTENER: DARK THEME TOGGLE INTERRUPT
themeToggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    if (html.classList.contains('dark')) {
        localStorage.theme = 'dark';
        themeIcon.classList.replace('bxs-moon', 'bxs-sun');
    } else {
        localStorage.theme = 'light';
        themeIcon.classList.replace('bxs-sun', 'bxs-moon');
    }
});

// EVENT LISTENER: MOBILE DRAWER ROUTER INTERRUPT
menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    if (mobileMenu.classList.contains('hidden')) {
        menuIcon.classList.replace('bx-x', 'bx-menu');
    } else {
        menuIcon.classList.replace('bx-menu', 'bx-x');
    }
});

// COLLAPSE MOBILE DRAWER MATRIX ON NAV-LINK INTERRUPT
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.replace('bx-x', 'bx-menu');
    });
});

// TYPING ENGINE ANIMATION MATRIX
const typingElement = document.querySelector('.typing-text');
const roles = ["AI & Data Science Engineer", "Python Backend Developer", "Full-Stack Specialist"];
let roleIdx = 0;
let charIdx = 0;
let isDeleting = false;

function typeEngine() {
    if (!typingElement) return;
    
    const currentRole = roles[roleIdx];
    
    if (isDeleting) {
        typingElement.textContent = currentRole.substring(0, charIdx - 1);
        charIdx--;
    } else {
        typingElement.textContent = currentRole.substring(0, charIdx + 1);
        charIdx++;
    }

    let executionSpeed = isDeleting ? 40 : 100;

    if (!isDeleting && charIdx === currentRole.length) {
        executionSpeed = 2500; // Peak hold limit on line end
        isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
        executionSpeed = 400; // Rest latency buffer before typing next line
    }

    setTimeout(typeEngine, executionSpeed);
}

// INITIALIZE SYSTEM THREADS
document.addEventListener('DOMContentLoaded', () => {
    typeEngine();
});
