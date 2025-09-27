document.addEventListener('DOMContentLoaded', () => {

    /* =========================
       1. Smooth Scrolling & Mobile Menu Close
    ========================= */
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const target = this.getAttribute('href');
            if (target.startsWith('#')) {
                e.preventDefault();
                const section = document.querySelector(target);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                    history.pushState(null, '', target);
                }
                const navMenu = document.querySelector('.nav-menu');
                const menuToggle = document.querySelector('.menu-toggle');
                if (navMenu?.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    menuToggle?.setAttribute('aria-expanded', 'false');
                }
            }
        });
    });

    /* =========================
       2. Mobile Menu Toggle
    ========================= */
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('active');
        });
    }

    /* =========================
       3. Highlight Active Link on Scroll
    ========================= */
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href')?.includes(current)) {
                link.classList.add('active');
            }
        });
    });

    /* =========================
       4. Contact Form Submission Alert
    ========================= */
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! This is a frontend-only form and does not submit data.');
            contactForm.reset();
        });
    }

    /* =========================
       5. Hero Slideshow
    ========================= */
    const slides = document.querySelectorAll(".slide");
    if (slides.length > 0) {
        let currentIndex = 0;
        let slideInterval;

        const showSlide = (index) => {
            slides.forEach((slide, i) => slide.classList.toggle('active', i === index));
        };

        const nextSlide = () => {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        };

        const prevSlide = () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            showSlide(currentIndex);
        };

        const nextBtn = document.querySelector(".next");
        const prevBtn = document.querySelector(".prev");

        nextBtn?.addEventListener('click', () => { nextSlide(); resetInterval(); });
        prevBtn?.addEventListener('click', () => { prevSlide(); resetInterval(); });

        const startInterval = () => { slideInterval = setInterval(nextSlide, 5000); };
        const resetInterval = () => { clearInterval(slideInterval); startInterval(); };

        showSlide(currentIndex);
        startInterval();
    }

});
