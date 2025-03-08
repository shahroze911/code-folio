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


document.addEventListener("DOMContentLoaded", function () {
    const projectCards = document.querySelectorAll(".project-card");
    const categoryButtons = document.querySelectorAll(".category-btn");

    // Handle project card click for modal
    projectCards.forEach(card => {
        card.addEventListener("click", function () {
            const project = JSON.parse(this.getAttribute("data-project"));

            // Set Modal Content
            document.getElementById("modalTitleText").innerText = project.title;
            document.getElementById("modalImage").src = project.image;
            document.getElementById("modalDescription").innerText = project.description;

            // Update Technologies List
            const techList = document.getElementById("modalTechnologies");
            techList.innerHTML = "";
            project.technologies.forEach(tech => {
                const li = document.createElement("li");
                li.textContent = tech;
                li.classList.add("badge", "bg-secondary", "mx-1", "p-2");
                techList.appendChild(li);
            });

            // Update Tags
            const tagContainer = document.getElementById("modalTags");
            tagContainer.innerHTML = "";
            project.tags.forEach(tag => {
                const span = document.createElement("span");
                span.textContent = tag;
                span.classList.add("badge", "bg-warning", "text-dark", "mx-1", "p-2");
                tagContainer.appendChild(span);
            });

            // Set Demo Link
            document.getElementById("modalDemo").href = project.demo;

            // Show Modal
            const modalElement = document.getElementById("projectModal");
            const modalInstance = new bootstrap.Modal(modalElement);
            modalInstance.show();
        });
    });

    // Handle category filtering
    categoryButtons.forEach(button => {
        button.addEventListener("click", function () {
            const selectedCategory = this.getAttribute("data-category");

            // Update active state
            categoryButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            // Show/hide projects based on category
            projectCards.forEach(card => {
                const cardCategory = card.getAttribute("data-category");
                if (selectedCategory === "all" || cardCategory === selectedCategory) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".mySwiper", {
        slidesPerView: 3, // Show 3 cards per view
        spaceBetween: 20, // Spacing between cards
        loop: true, // Enable infinite scrolling
        autoplay: {
            delay: 3000, // Auto-slide every 3 seconds
            disableOnInteraction: false, // Keep autoplay even after interaction
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            1024: { slidesPerView: 3 }, // 3 slides for desktop
            768: { slidesPerView: 2 }, // 2 slides for tablets
            480: { slidesPerView: 1 }, // 1 slide for mobile
        }
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
}document.addEventListener("DOMContentLoaded", function () {
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
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("portfolioModal");
    modal.addEventListener("show.bs.modal", function () {
        document.body.classList.add("modal-open");
    });
    modal.addEventListener("hidden.bs.modal", function () {
        document.body.classList.remove("modal-open");
    });
});// Portfolio Projects Array
const projects = [
    {
        title: "TechCorp Redesign",
        image: "./assets/hero-image.jpg",
        description: "Revamped TechCorp’s website, improving UX and boosting conversions by 40%.",
        technologies: ["HTML", "CSS", "JavaScript", "React"],
        tags: ["UI/UX", "Corporate Website", "Optimization"],
        category: "web",
        demo: "https://example.com/project-one"
    },
    {
        title: "E-Commerce Dashboard",
        image: "./assets/hero-image.jpg",
        description: "Built a robust e-commerce analytics dashboard with interactive charts.",
        technologies: ["Vue.js", "Node.js", "MongoDB"],
        tags: ["Analytics", "E-Commerce", "Dashboard"],
        category: "web",
        demo: "https://example.com/project-two"
    },
    {
        title: "Mobile App UI Kit",
        image: "./assets/hero-image.jpg",
        description: "Designed a modern UI kit for a financial tracking mobile application.",
        technologies: ["Figma", "Adobe XD"],
        tags: ["Mobile UI", "Fintech", "Design"],
        category: "mobile",
        demo: "https://example.com/project-three"
    },
    {
        title: "SEO Optimization Suite",
        image: "./assets/hero-image.jpg",
        description: "Developed an automated SEO optimization tool for web performance.",
        technologies: ["Python", "Django", "SEO"],
        tags: ["SEO", "Web Tools", "Performance"],
        category: "seo",
        demo: "https://example.com/project-four"
    }
];function renderPortfolio(category = "all") {
    const portfolioGrid = document.getElementById("portfolio-grid");
    portfolioGrid.innerHTML = ""; // Clear existing cards

    const filteredProjects = category === "all" ? projects : projects.filter(project => project.category === category);

    filteredProjects.forEach((project, index) => {
        const cardWrapper = document.createElement("div");
        cardWrapper.classList.add("col-12", "col-md-6", "col-lg-3"); // Responsive grid classes

        const card = document.createElement("div");
        card.classList.add("project-card");

        card.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="img-fluid rounded">
            <div class="card-body">
                <h3 class="card-title">${project.title}</h3>
                <button class="view-project-btn" data-index="${index}">
                    <i class="fas fa-eye"></i> View Project
                </button>
            </div>
        `;

        cardWrapper.appendChild(card);
        portfolioGrid.appendChild(cardWrapper);
    });

    // Attach event listeners
    document.querySelectorAll(".view-project-btn").forEach(button => {
        button.addEventListener("click", event => {
            event.stopPropagation();
            const projectIndex = button.getAttribute("data-index");
            openProjectModal(projectIndex);
        });
    });
}



// Function to Open Modal and Populate Data
function openProjectModal(index) {
    const project = projects[index];

    document.getElementById("modalTitleText").textContent = project.title;
    document.getElementById("modalImage").src = project.image;
    document.getElementById("modalDescription").textContent = project.description;

    // Populate Technologies
    const techList = document.getElementById("modalTechnologies");
    techList.innerHTML = "";
    project.technologies.forEach(tech => {
        const techItem = document.createElement("li");
        techItem.textContent = tech;
        techItem.classList.add("badge", "bg-secondary", "me-1");
        techList.appendChild(techItem);
    });

    // Populate Tags
    const tagList = document.getElementById("modalTags");
    tagList.innerHTML = "";
    project.tags.forEach(tag => {
        const tagSpan = document.createElement("span");
        tagSpan.textContent = tag;
        tagSpan.classList.add("badge", "bg-dark", "me-1");
        tagList.appendChild(tagSpan);
    });

    // Set Demo Link
    const demoButton = document.getElementById("modalDemo");
    demoButton.href = project.demo;

    // Open Modal
    const projectModal = new bootstrap.Modal(document.getElementById("projectModal"));
    projectModal.show();
}

// Function to Handle Category Filtering
document.querySelectorAll(".category-btn").forEach(button => {
    button.addEventListener("click", function () {
        document.querySelectorAll(".category-btn").forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");

        const selectedCategory = this.getAttribute("data-category");
        renderPortfolio(selectedCategory);
    });
});

// Initial Call to Render All Projects
renderPortfolio();


