document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".custom-navbar");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});

AOS.init();
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (navbarCollapse.classList.contains("show")) {
                navbarToggler.click(); // Close navbar on mobile
            }
        });
    });

    // Add scroll effect to navbar
    window.addEventListener("scroll", function () {
        let navbar = document.querySelector(".navbar");
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const aboutBoxes = document.querySelectorAll(".about-box");

    aboutBoxes.forEach((box) => {
        box.addEventListener("mouseover", () => {
            box.style.transform = "translateY(-10px) scale(1.02)";
            box.style.transition = "transform 0.3s ease-in-out";
        });

        box.addEventListener("mouseout", () => {
            box.style.transform = "translateY(0) scale(1)";
        });
    });
});document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".mySwiper", {
        slidesPerView: 3, // Default: 3 slides visible
        spaceBetween: 20, // Spacing between slides
        loop: true, // Enable infinite scrolling
        autoplay: {
            delay: 3000, // Auto-slide every 3 seconds
            disableOnInteraction: false, // Autoplay continues after swipe
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true, // Allow pagination clicks
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        grabCursor: true, // Shows hand cursor for better UX
        touchRatio: 1, // Enables swipe gestures
        breakpoints: {
            1024: { 
                slidesPerView: 3, // Show 3 slides on medium screens
                loop: true, // Enable looping on medium screens
                autoplay: true, // Enable autoplay on medium screens
                navigation: { 
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                pagination: { 
                    el: ".swiper-pagination",
                    clickable: true, // Allow pagination clicks
                },
                grabCursor: true, // Enable hand cursor
                touchRatio: 1, // Enable swipe gestures
                observer: true, // Enable observer to watch for changes
                observeParents: true, // Observe changes to parent elements
            },
            768: { 
                slidesPerView: 1, // 1 slide at a time on small screens
                spaceBetween: 0, // No space between slides
                loop: false, // Disable looping on small screens
                autoplay: false, // Disable autoplay on small screens
                navigation: { 
                    nextEl: null,
                    prevEl: null,
                },
                pagination: { 
                    el: null,
                },
                grabCursor: false, // Disable hand cursor
                touchRatio: 0, // Disable swipe gestures
                observer: true, 
                observeParents: true,
            },
            480: {
                slidesPerView: 1, // 1 slide at a time on mobile
                spaceBetween: 0, // No space between slides
                loop: false, // Disable looping on mobile
                autoplay: false, // Disable autoplay on mobile
                navigation: { 
                    nextEl: null,
                    prevEl: null,
                },
                pagination: { 
                    el: null,
                },
                grabCursor: false, // Disable hand cursor
                touchRatio: 0, // Disable swipe gestures
                observer: true, 
                observeParents: true,
            },
            480: {
                slidesPerView: 1, // Show 1 slide at a time on mobile
                spaceBetween: 0, // No space between slides
                loop: true, // Enable looping on mobile
                autoplay: true, // Enable autoplay on mobile
                navigation: { 
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                pagination: { 
                    el: ".swiper-pagination",
                    clickable: true,
                },
                grabCursor: true, // Enable hand cursor
                touchRatio: 1, // Enable swipe gestures
                observer: true,
                observeParents: true,
            }
            
            
        },
    });

    // Disable animations completely for mobile screens (less than 768px)
    if (window.innerWidth < 768) {
        swiper.on('init', function () {
            // Force disable animations for mobile by setting transition property to none
            document.querySelectorAll('.swiper-slide').forEach(slide => {
                slide.style.transition = 'none !important'; // Disable transition on mobile
                slide.style.innerWidth='100%';
            });
        });
    }
});






// Highlight Active Navbar Item Based on Scroll
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    function updateActiveLink() {
        let scrollPosition = window.scrollY + window.innerHeight / 2;

        sections.forEach((section) => {
            let sectionTop = section.offsetTop;
            let sectionHeight = section.clientHeight;
            let sectionId = section.getAttribute("id");

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach((link) => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${sectionId}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }

    window.addEventListener("scroll", updateActiveLink);
    updateActiveLink();
});

// Toggle Mobile Menu
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".counter");
    counters.forEach(counter => {
        counter.innerText = "0";
        const updateCounter = () => {
            const target = +counter.getAttribute("data-target");
            const count = +counter.innerText;
            const increment = Math.max(1, target / 100);
            if (count < target) {
                counter.innerText = `${Math.ceil(count + increment)}`;
                setTimeout(updateCounter, 20);
            } else {
                counter.innerText = target;
            }
        };
        updateCounter();
    });
});

document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function() {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        
        document.querySelectorAll('.about-text').forEach(content => content.style.display = 'none');
        document.getElementById(this.getAttribute('data-target')).style.display = 'block';
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const projectData = JSON.parse(document.getElementById("project-data").textContent);
    const portfolioGrid = document.getElementById("portfolio-grid");

    // Mapping Technologies to FontAwesome Icons
    const techIcons = {
        "HTML": "fab fa-html5",
        "CSS": "fab fa-css3-alt",
        "JavaScript": "fab fa-js",
        "React": "fab fa-react",
        "Vue.js": "fab fa-vuejs",
        "Node.js": "fab fa-node-js",
        "MongoDB": "fas fa-database",
        "Python": "fab fa-python",
        "Django": "fas fa-server",
        "SEO": "fas fa-search",
        "Figma": "fab fa-figma",
        "Adobe XD": "fab fa-adobe"
    };

    function createProjectCard(project) {
        return `
            <div class="col-md-4">
                <div class="card dark-card">
                    <img src="${project.image}" alt="${project.title}">
                    <div class="card-body">
                        <h5>${project.title}</h5>
                        <p>${project.description}</p>
                        <div class="tech-icons">
                            ${project.technologies.map(tech => techIcons[tech] ? `<i class="${techIcons[tech]}"></i>` : '').join('')}
                        </div>
                    </div>
                    <div class="btn-container">
                        <a href="${project.demo}" class="btn btn-primary" target="_blank">View Project</a>
                    </div>
                </div>
            </div>
        `;
    }

    // Load Projects
    function loadProjects(filter = "all") {
        portfolioGrid.innerHTML = projectData
            .filter(proj => filter === "all" || proj.category === filter)
            .map(createProjectCard)
            .join("");
    }

    // Load All Projects Initially
    loadProjects();

    // Filter Projects
    document.querySelectorAll(".category-btn").forEach(btn => {
        btn.addEventListener("click", function () {
            document.querySelector(".category-btn.active").classList.remove("active");
            this.classList.add("active");
            loadProjects(this.getAttribute("data-category"));
        });
    });
});

emailjs.init('062QrqU8Enk1it5Q6');

function sendEmail(event) {
event.preventDefault();
const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
};

emailjs.send('service_mkyverp', 'template_mm2iu85', formData)
    .then(response => {
        alert('Message Sent Successfully!');
        document.getElementById('contact-form').reset();
    })
    .catch(error => {
        alert('Error sending message: ' + error.text);
    });
}
