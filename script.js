document.addEventListener('DOMContentLoaded', () => {
    
    // --- OPTION D: PRELOADER ---
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                preloader.classList.add('fade-out');
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 500);
            }, 1500); // 1.5 seconds delay
        });
    }

    // --- OPTION F: SCROLL PROGRESS BAR ---
    window.addEventListener('scroll', () => {
        const progressBar = document.querySelector('.scroll-progress');
        if (progressBar) {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (scrollTop / scrollHeight) * 100;
            progressBar.style.width = scrolled + "%";
        }
    });

    // --- OPTION C: CUSTOM CURSOR ---
    const cursor = document.querySelector('.cursor');
    if (cursor) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        // Hover effect for links and buttons
        const links = document.querySelectorAll('a, button, .job-card, .contact-link, .back-link');
        links.forEach(link => {
            link.addEventListener('mouseenter', () => cursor.classList.add('expand'));
            link.addEventListener('mouseleave', () => cursor.classList.remove('expand'));
        });
    }

    // --- FORM SUBMISSION & CONFETTI (Only runs if form exists) ---
    const form = document.getElementById('joinForm');
    if (form) {
        const emailInput = document.getElementById('emailInput');
        const btn = form.querySelector('button');

        form.addEventListener('submit', (e) => {
            e.preventDefault(); 

            const email = emailInput.value;

            if (email) {
                console.log(`New subscriber: ${email}`);

                // OPTION A: TRIGGER CONFETTI
                if (typeof confetti === 'function') {
                    confetti({
                        particleCount: 150,
                        spread: 70,
                        origin: { y: 0.6 }
                    });
                }

                // Save original button text
                const originalText = btn.innerText;
                
                // Visual Success State
                btn.innerText = "You're in!";
                btn.style.backgroundColor = "#28a745"; // Green
                btn.style.color = "white";
                btn.style.border = "none";

                // Clear input
                emailInput.value = "";

                // Reset after 3 seconds
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.style.backgroundColor = "black";
                    btn.style.color = "white";
                }, 3000);
            }
        });
    }
});