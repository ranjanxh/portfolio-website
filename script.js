document.addEventListener('DOMContentLoaded', function() {
    // Update current year in footer
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Optional: Add a class to the header on scroll for a sticky/shrink effect (like the example)
    const header = document.querySelector('.header');
    const heroSection = document.querySelector('.hero-section');
    const headerHeight = header.offsetHeight; // Get initial header height

    window.addEventListener('scroll', () => {
        if (window.scrollY > heroSection.offsetHeight - headerHeight) { // Adjust threshold as needed
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // You would need to add CSS for .header.scrolled to make it appear/shrink/change background
    // Example CSS for .header.scrolled (add to your style.css):
    /*
    .header.scrolled {
        position: fixed;
        background-color: var(--bg-dark); // Or a slightly transparent version
        box-shadow: 0 2px 10px rgba(0,0,0,0.5);
        padding: 15px 0; // Make it slightly smaller
    }
    */
});