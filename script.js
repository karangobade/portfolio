// Typing Animation
var typed = new Typed(".typing", {
    strings: [
        "Python Developer",
        "AI/ML Enthusiast",
        "Software Tester",
        "Backend Developer",
        "IT Student"
    ],
    typeSpeed: 80,
    backSpeed: 50,
    loop: true
});

// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Scroll Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(sec => {
    sec.style.opacity = 0;
    sec.style.transform = 'translateY(30px)';
    sec.style.transition = 'all 0.8s ease';
    observer.observe(sec);
});

// Form Submit
function handleSubmit(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    e.target.reset();
}

// Navbar shadow on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.boxShadow = '0 5px 20px rgba(0,0,0,0.3)';
    } else {
        nav.style.boxShadow = 'none';
    }
});