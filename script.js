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

    // Mapping Technologies to FontAwesome Icons with Colors
    const techIcons = {
        "HTML": { icon: "fab fa-html5", color: "#E34F26" },   // HTML (Orange)
        "CSS": { icon: "fab fa-css3-alt", color: "#1572B6" }, // CSS (Blue)
        "JavaScript": { icon: "fab fa-js", color: "#F7DF1E" }, // JavaScript (Yellow)
        "React": { icon: "fab fa-react", color: "#61DAFB" },  // React (Light Blue)
        "Vue.js": { icon: "fab fa-vuejs", color: "#42B883" },  // Vue.js (Green)
        "Node.js": { icon: "fab fa-node-js", color: "#68A063" }, // Node.js (Greenish)
        "MongoDB": { icon: "fas fa-database", color: "#4DB33D" }, // MongoDB (Green)
        "Python": { icon: "fab fa-python", color: "#3776AB" },  // Python (Blue)
        "Django": { icon: "fas fa-server", color: "#092E20" },  // Django (Dark Green)
        "SEO": { icon: "fas fa-search", color: "#FF5722" },  // SEO (Orange-Red)
        "Figma": { icon: "fab fa-figma", color: "#F24E1E" },  // Figma (Red-Orange)
        "Adobe XD": { icon: "fab fa-adobe", color: "#FF61F6" }, // Adobe XD (Pink)
        "Bootstrap": { icon: "fab fa-bootstrap", color: "#7952B3" }, // Bootstrap (Purple)
        "SASS": { icon: "fab fa-sass", color: "#CC6699" }, // SASS (Pink)
        "Laravel": { icon: "fab fa-laravel", color: "#FF2D20" }, // Laravel (Red)
        "PHP": { icon: "fab fa-php", color: "#777BB4" }, // PHP (Blue)
        "Java": { icon: "fab fa-java", color: "#F89820" }, // Java (Orange)
        "C++": { icon: "fab fa-cuttlefish", color: "#00599C" }, // C++ (Blue)
        "C#": { icon: "fab fa-microsoft", color: "#68217A" }, // C# (Purple)
        "MySQL": { icon: "fas fa-database", color: "#4479A1" }, // MySQL (Blue)
        "Firebase": { icon: "fas fa-fire", color: "#FFCA28" }, // Firebase (Yellow)
        "GraphQL": { icon: "fas fa-project-diagram", color: "#E10098" }, // GraphQL (Pink)
        "Docker": { icon: "fab fa-docker", color: "#2496ED" }, // Docker (Blue)
        "Kubernetes": { icon: "fas fa-cube", color: "#326CE5" }, // Kubernetes (Blue)
        "AWS": { icon: "fab fa-aws", color: "#FF9900" }, // AWS (Orange)
        "Linux": { icon: "fab fa-linux", color: "#FCC624" }, // Linux (Yellow)
        "Git": { icon: "fab fa-git-alt", color: "#F34F29" }, // Git (Orange)
        "GitHub": { icon: "fab fa-github", color: "#181717" } // GitHub (Black)
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
                            ${project.technologies.map(tech => 
                                techIcons[tech] ? 
                                `<i class="${techIcons[tech].icon}" style="color: ${techIcons[tech].color}; font-size: 24px; margin-right: 8px;"></i>` 
                                : '').join('')
                            }
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
document.addEventListener("DOMContentLoaded", function () {
    // Scroll to top on page load
    window.scrollTo(0, 0);

    // // Get all sections
    // const sections = document.querySelectorAll("section");
    // let currentIndex = 0; // Track the current section index
    // let isScrolling = false; // Prevent multiple rapid scrolls

    // function scrollToSection(index) {
    //     if (index >= 0 && index < sections.length) {
    //         sections[index].scrollIntoView({ behavior: "smooth" });
    //         currentIndex = index;
    //     }
    // }

    // // Scroll when arrow keys are pressed
    // document.addEventListener("keydown", function (event) {
    //     if (event.key === "ArrowDown" || event.key === "PageDown") {
    //         event.preventDefault();
    //         scrollToSection(currentIndex + 1);
    //     } else if (event.key === "ArrowUp" || event.key === "PageUp") {
    //         event.preventDefault();
    //         scrollToSection(currentIndex - 1);
    //     }
    // });

    // // Scroll when using the mouse wheel or touchpad
    // window.addEventListener("wheel", function (event) {
    //     if (!isScrolling) {
    //         isScrolling = true;
    //         if (event.deltaY > 0) {
    //             scrollToSection(currentIndex + 1);
    //         } else {
    //             scrollToSection(currentIndex - 1);
    //         }
    //         setTimeout(() => (isScrolling = false), 800); // Prevent multiple fast scrolls
    //     }
    // });
});
document.addEventListener("DOMContentLoaded", function () {
    // ✅ Button Click Event to Redirect
    document.querySelectorAll(".btn-custom").forEach(button => {
        button.addEventListener("click", function (event) {
            event.stopPropagation(); // ✅ Prevent Swiper interference
            const url = this.getAttribute("data-url");
            if (url.startsWith("#")) {
                document.querySelector(url)?.scrollIntoView({ behavior: "smooth" });
            } else {
                window.location.href = url; // ✅ For external links
            }
        });
    });
});  


document.addEventListener("DOMContentLoaded", function () {
    new Glide('.glide-services', {
        type: 'carousel',
        startAt: 0,
        perView: 3,
        focusAt: 'center',
        autoplay: 1500,
        hoverpause: true,
        gap: 20,
        peek: { before: 0, after: 0 },
        breakpoints: {
            1024: { perView: 3 }, // Three cards on tablets
            768: { perView: 1, autoplay: false, gap: 0 } // One card on mobile, no sliding
        }
    }).mount();
    new Glide('.glide-testimonials', {
        type: 'carousel',
        startAt: 0,
        perView: 3,
        focusAt: 'center',
        autoplay: 3000,
        hoverpause: true,
        gap: 20,
        peek: { before: 10, after: 10 },
        breakpoints: {
            1024: { perView: 3 }, // Three cards on tablets
            768: { perView: 1, autoplay: false, gap: 0 } // One card on mobile, no sliding
        }
    }).mount();
});
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-links a");
    const navMenu = document.querySelector(".nav-links"); // Select the menu container

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navMenu.classList.remove("active"); // Close menu after clicking a link
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let typeElement = document.getElementById("typewriter");

    if (typeElement) {
        var typewriter = new Typewriter(typeElement, {
            loop: false,
            delay: 70,
            cursor: "" // Removes the blinking cursor
        });

        typewriter
            .typeString("Transforming Ideas into <span class='highlight'>Digital Success</span>")
            .start();
    } else {
        console.error("Typewriter element not found!");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth <= 768) { // Only for mobile screens
        gsap.registerPlugin(MotionPathPlugin);

        gsap.to(".swipe-hand", {
            motionPath: {
                path: [
                    { x: -30, y: 0 },  
                    { x: 50, y: -10 },  
                    { x: 120, y: 0 }    
                ],
                curviness: 1.5,
                autoRotate: false
            },
            duration: 2, // Slower animation
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut"
        });

    }
});
