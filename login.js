// Professional Portfolio - Aniruddh Bhate

console.log("Portfolio loaded successfully. Welcome, Aniruddh!");

// --- Login Modal Logic ---
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const closeBtn = document.querySelector('.close-btn');

loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = 'none';
    }
});

document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Welcome back, Aniruddh! (Demo login)');
    loginModal.style.display = 'none';
});

// --- Contact Form ---
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
    e.target.reset();
});

// --- Smooth Scroll ---
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

console.log("All interactive features initialized for Aniruddh's portfolio.");