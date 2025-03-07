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
        let scrollPosition = window.scrollY + window.innerHeight / 2; // Adjust for better detection

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
    updateActiveLink(); // Call on page load
});
