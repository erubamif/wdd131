// ===== TEMPLE SITE JAVASCRIPT =====

// Wait for the DOM to load before running scripts
document.addEventListener('DOMContentLoaded', () => {

    /* ===== Footer: Dynamic Copyright & Last Modified ===== */
    const copyrightYear = document.getElementById('copyright-year');
    const lastModified = document.getElementById('last-modified');

    // Set current year
    if (copyrightYear) {
        copyrightYear.textContent = new Date().getFullYear();
    }

    // Set last modified date
    if (lastModified) {
        lastModified.textContent = document.lastModified;
    }

    /* ===== Hamburger Menu Toggle ===== */
    const hamburgerBtn = document.getElementById('hamburger-button');
    const navMenu = document.querySelector('nav');

    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', () => {
            navMenu.classList.toggle('open');

            // Toggle hamburger icon to X or ≡
            if (navMenu.classList.contains('open')) {
                hamburgerBtn.textContent = '❌';
            } else {
                hamburgerBtn.textContent = '≡';
            }
        });
    }

});