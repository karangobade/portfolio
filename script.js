// Typing Animation
var typed = new Typed(".typing", {
    strings: [
        "Python Developer",
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
const FORM_ENDPOINT = "https://formspree.io/f/xwvgeorz";
 
function handleSubmit(e) {
    e.preventDefault();
 
    const form = e.target;
    const submitBtn = document.getElementById('submitBtn');
    const status = document.getElementById('formStatus');
    const originalBtnText = submitBtn.innerHTML;
 
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Sending...';
    status.textContent = '';
    status.style.color = '';
 
    fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
    })
    .then(response => {
        if (response.ok) {
            status.textContent = 'Thank you! Your message has been sent. I will get back to you soon.';
            status.style.color = '#22c55e';
            form.reset();
        } else {
            response.json().then(data => {
                status.textContent = (data.errors && data.errors.map(e => e.message).join(', ')) ||
                    'Something went wrong. Please try again or email me directly.';
                status.style.color = '#ef4444';
            });
        }
    })
    .catch(() => {
        status.textContent = 'Network error. Please try again or email me directly.';
        status.style.color = '#ef4444';
    })
    .finally(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
    });
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
