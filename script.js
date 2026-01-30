// Toggle Mobile Menu
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Changes icon to X
    navbar.classList.toggle('active'); // Shows menu
};

// Close menu on scroll
window.onscroll = () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Close menu when clicking the logo
document.querySelector('.logo').addEventListener('click', () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
});

// Typing Animation
const typingText = document.querySelector('.typing-text');
const roles = ["AI & Data Science Engineer", "Python Developer", "Problem Solver"];
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
        setTimeout(typeEffect, isDeleting ? 100 : 200);
    }
}

// Theme Switcher
const themeBtn = document.getElementById('theme-toggle');
const body = document.body;
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
    themeBtn.classList.replace('bxs-sun', 'bxs-moon');
}

themeBtn.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    if (currentTheme === 'light') {
        body.removeAttribute('data-theme');
        themeBtn.classList.replace('bxs-moon', 'bxs-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        body.setAttribute('data-theme', 'light');
        themeBtn.classList.replace('bxs-sun', 'bxs-moon');
        localStorage.setItem('theme', 'light');
    }
});

document.addEventListener('DOMContentLoaded', typeEffect);