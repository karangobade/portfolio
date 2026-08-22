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

 const EXPERIENCE_DATA = [
    {
      icon: "🛡️",
      title: "Virtual Internship – Fortinet",
      date: "Jan 2024 – Mar 2024",
      bullets: [
        "Gained foundational knowledge in cybersecurity & network security",
        "Worked on simulated real-world security scenarios",
        "Learned about threat detection and mitigation strategies"
      ],
      cert: {
        img: "assets/gallery/net_inter.jpg",
        title: "Fortinet Virtual Internship Certificate",
        issuer: "Fortinet & EduSkills/AICTE · Jan–Mar 2024",
        desc: "10-week Network Security Associate program covering foundational cybersecurity and network security concepts."
      }
    },
    {
      icon: "🐍",
      title: "Python Full Stack Developer – EduSkills Academy",
      date: "Apr 2026 – Jun 2026",
      bullets: [
        "Completed intensive Python Full Stack Development program covering Flask, FastAPI, REST APIs, and frontend integration.",
        "Built and deployed web applications using Python backend with HTML/CSS/JS frontend.",
        "Gained experience with database design using MySQL and MongoDB."
      ],
      cert: {
        img: "assets/gallery/python_full.jpg",
        title: "Python Full Stack Developer Certificate",
        issuer: "EduSkills Academy / AICTE · Apr–Jun 2026",
        desc: "Full stack development training covering Flask, FastAPI, REST APIs, database design, and frontend integration."
      }
    },
    {
      icon: "💼",
      title: "Python Development Intern – QSkill (Squarcell Resource India)",
      date: "Jul 2026 – Aug 2026",
      bullets: [
      "Completed a 1-month virtual Python Development internship focused on hands-on skill building and real-world project implementation.",
      "Built a Flask-based sentiment analysis web application integrated with TextBlob for text classification",
      "Integrated Google Gemini API to add AI-powered functionality to a project",
      "Worked independently in a remote setup with flexible timing, delivering tasks aligned with project requirements"
      ],
      cert: {
        img: "assets/gallery/qskill-offer.jpg",
        title: "QSkill Internship Offer Letter",
        issuer: "Squarcell Resource India Pvt. Ltd · Jul–Aug 2026",
        desc: "Offer letter for the 1-month virtual Python Development internship."
      }
    }
  ];
 
  const list = document.getElementById('expList');
  EXPERIENCE_DATA.forEach(exp => {
    const card = document.createElement('div');
    card.className = 'exp-card';
    card.innerHTML = `
      <div class="exp-head">
        <div class="exp-icon">${exp.icon}</div>
        <div>
          <h3>${exp.title}</h3>
          <p class="exp-date">${exp.date}</p>
        </div>
      </div>
      <ul>${exp.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
      <button class="cert-btn">View Certificate</button>
    `;
    card.querySelector('.cert-btn').addEventListener('click', () => openModal(exp.cert));
    list.appendChild(card);
  });

 const GALLERY_DATA = [
    {
      title: "Python Programming",
      issuer: "Skill India · 2025",
      img: "assets/gallery/python.jpg",
      desc: "Python Programming (Reliance Foundation Skilling Academy) — Core programming principles, control flow, functions, data structures, and algorithmic logic in Python."
    },
    {
      title: "Django Skill Up",
      issuer: "GeeksforGeeks · 2025",
      img: "assets/gallery/django.jpg",
      desc: "Django Skill Up (GeeksforGeeks) — Server-side web application development using Django, covering MVC/MVT patterns, routing, models, and template rendering."
    },
    {
      title: "Software Engineering Job Simulation",
      issuer: "Forage",
      img: "assets/gallery/Software Engineering Job Simulation.jpg",
      desc: "Software Engineering Job Simulation (Quantium / Forage) — Practical software engineering tasks including environment setup, data processing pipelines, building and enhancing Dash web applications, and automated test suite creation."
    },
    {
      title: "JavaScript",
      issuer: "Simplilearn · 2026",
      img: "assets/gallery/javascript.jpg",
      desc: "JavaScript for Beginners (Simplilearn SkillUP) — Core JavaScript syntax, variables, functions, event handling, and interactive web scripting fundamentals."
    },
    {
      title: "Software Testing",
      issuer: "Simplilearn · 2026",
      img: "assets/gallery/soft_test.jpg",
      desc: "Introduction to Software Testing (Simplilearn) — Software Quality Assurance (QA) fundamentals, manual/automated testing concepts, defect tracking, and the software testing lifecycle (STLC)."
    },
    {
      title: "MongoDB Overview",
      issuer: "MongoDB, Inc. · 2025",
      img: "assets/gallery/mongodb.jpg",
      desc: "Introduction to MongoDB's document model, CRUD operations, and database fundamentals."
    },
    {
      title: "Oracle Cloud Infrastructure",
      issuer: "Oracle University",
      img: "assets/gallery/oracal.jpg",
      desc: "OCI 2025 Certified Foundations Associate (Oracle) — Core cloud infrastructure concepts, Oracle Cloud architecture, security, networking, and essential OCI services."
    },
    {
      title: "Data Structures & Algorithms",
      issuer: "Simplilearn · 2025",
      img: "assets/gallery/dsa.jpg",
      desc: "Core DSA concepts including arrays, trees, graphs, sorting/searching, and complexity analysis."
    },
    {
      title: "Prompt Engineering with GitHub Copilot",
      issuer: "Microsoft · 2025",
      img: "assets/gallery/prompt_eng.jpg",
      desc: "Prompt Engineering with GitHub Copilot (Simplilearn / Microsoft) — Principles of effective prompting, integrating AI developer tooling into IDEs, and accelerating productivity with GitHub Copilot.Techniques for writing effective prompts and using GitHub Copilot for AI-assisted development."
    },
    {
      title: "Generative AI for Beginners",
      issuer: "Simplilearn · 2025",
      img: "assets/gallery/gen_ai.jpg",
      desc: "Foundations of generative AI models, use cases, and practical applications."
    },
    {
      title: "Computer Vision with Azure",
      issuer: "Microsoft · 2025",
      img: "assets/gallery/com_vision.jpg",
      desc: "Build a Computer Vision App with Azure Cognitive Services (Microsoft / Coursera) — Designing and deploying cloud-powered image analysis and computer vision solutions using Azure Cognitive Services."
    },
    {
      title: "Network Security Associate Virtual Internship",
      issuer: "EduSkills Academy/Fortinet",
      img: "assets/gallery/net_inter.jpg",
      desc: "Network Security Associate Virtual Internship (EduSkills / Fortinet / AICTE) — 10-week virtual internship focusing on network defense fundamentals, Fortinet cybersecurity solutions, firewall management, and threat mitigation."
    },
    {
      title: "Python Full Stack Internship",
      issuer: "EduSkills Academy",
      img: "assets/gallery/python_full.jpg",
      desc: "Python Full Stack Internship (EduSkills Academy) — 10-week comprehensive program covering responsive frontend design (HTML, CSS, Bootstrap, JavaScript/DOM), backend development with Python and Django, SQL database querying, and Git version control.."
    },
        {
      title: "Python Development Intern",
      issuer: "QSkill",
      img: "assets/gallery/qskill-offer.jpg",
      desc: "Completed a 1-month virtual Python Development internship focused on hands-on skill building and real-world project implementation.Built a Flask-based sentiment analysis web application integrated with TextBlob for text classification"
    },
  ];

  const grid = document.getElementById('galleryGrid');
  const overlay = document.getElementById('modalOverlay');
  const modalImg = document.getElementById('modalImg');
  const modalTitle = document.getElementById('modalTitle');
  const modalIssuer = document.getElementById('modalIssuer');
  const modalDesc = document.getElementById('modalDesc');
  const closeBtn = document.getElementById('modalClose');

  GALLERY_DATA.forEach(item => {
    const card = document.createElement('div');
    card.className = 'gallery-card';
    card.tabIndex = 0;
    card.innerHTML = `
      <img src="${item.img}" alt="${item.title}" loading="lazy" />
      <div class="card-body">
        <h4>${item.title}</h4>
        <p>${item.issuer}</p>
      </div>
    `;
    const open = () => openModal(item);
    card.addEventListener('click', open);
    card.addEventListener('keydown', e => { if (e.key === 'Enter') open(); });
    grid.appendChild(card);
  });

  function openModal(item){
    modalImg.src = item.img;
    modalImg.alt = item.title;
    modalTitle.textContent = item.title;
    modalIssuer.textContent = item.issuer;
    modalDesc.textContent = item.desc;
    overlay.classList.add('open');
  }
  function closeModal(){ overlay.classList.remove('open'); }

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  