// ===== Footer: Dynamic Year and Last Modified =====
const yearSpan = document.getElementById('year');
const lastModifiedSpan = document.getElementById('last-modified');

// Set current year
yearSpan.textContent = new Date().getFullYear();

// Set last modified date
lastModifiedSpan.textContent = document.lastModified;

// ===== Responsive Hamburger Menu =====
// Create hamburger button dynamically
const nav = document.querySelector('nav');
const hamburger = document.createElement('button');
hamburger.id = 'hamburger';
hamburger.setAttribute('aria-label', 'Toggle menu');
hamburger.textContent = '≡';
hamburger.style.fontSize = '1.8rem';
hamburger.style.background = 'none';
hamburger.style.border = 'none';
hamburger.style.cursor = 'pointer';

// Insert hamburger before nav links
nav.prepend(hamburger);

// Toggle 'open' class on nav when hamburger is clicked
hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
    
    // Change icon to X if open, back to ≡ if closed
    if (nav.classList.contains('open')) {
        hamburger.textContent = '❌';
    } else {
        hamburger.textContent = '≡';
    }
});

// ===== Optional: Hide nav links by default on mobile =====
// This can also be done in CSS using media queries