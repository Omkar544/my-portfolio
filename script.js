// Toggle Mobile Menu
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Close menu on link click or scroll
window.onscroll = () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

document.querySelectorAll('.navbar a').forEach(link => {
    link.onclick = () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    };
});

// Typing Animation
const typingText = document.querySelector('.typing-text');
const roles = ["AI & Data Science Engineer", "Software Developer Trainee", "Full-Stack Developer"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentRole = roles[roleIndex];
    if (isDeleting) {
        typingText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        setTimeout(typeEffect, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeEffect, 500);
    } else {
        setTimeout(typeEffect, isDeleting ? 50 : 100);
    }
}

// Theme Switcher
const themeBtn = document.getElementById('theme-toggle');
const body = document.body;

themeBtn.onclick = () => {
    body.classList.toggle('light-theme');
    const isLight = body.classList.contains('light-theme');
    themeBtn.classList.replace(isLight ? 'bxs-sun' : 'bxs-moon', isLight ? 'bxs-moon' : 'bxs-sun');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
};

// Load saved theme
if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-theme');
    themeBtn.classList.replace('bxs-sun', 'bxs-moon');
}

document.addEventListener('DOMContentLoaded', typeEffect);
