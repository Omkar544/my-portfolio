// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const html = document.documentElement;

// Initialize theme
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    html.classList.add('dark');
    themeIcon.classList.replace('bxs-moon', 'bxs-sun');
}

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

// Typing Animation
const typingElement = document.querySelector('.typing-text');
const roles = ["AI & Data Science Engineer", "Python Developer", "Full-Stack Specialist"];
let roleIdx = 0;
let charIdx = 0;
let isDeleting = false;

function type() {
    const currentRole = roles[roleIdx];
    
    if (isDeleting) {
        typingElement.textContent = currentRole.substring(0, charIdx - 1);
        charIdx--;
    } else {
        typingElement.textContent = currentRole.substring(0, charIdx + 1);
        charIdx++;
    }

    let typeSpeed = isDeleting ? 50 : 150;

    if (!isDeleting && charIdx === currentRole.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}

document.addEventListener('DOMContentLoaded', type);
