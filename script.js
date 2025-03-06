document.addEventListener("DOMContentLoaded", () => {
    // Register ScrollToPlugin
    gsap.registerPlugin(ScrollToPlugin);

    // Smooth scrolling for navigation links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            if (document.querySelector(targetId)) {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: { y: targetId, offsetY: 70 }, // Offset to adjust for fixed navbar
                    ease: "power2.inOut"
                });
            }
        });
    });

    // Mobile navigation toggle
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector("nav ul");

    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");

        anime({
            targets: "nav ul",
            opacity: [0, 1],
            translateY: [-20, 0],
            duration: 500,
            easing: "easeOutQuad"
        });
    });

    // Navbar background change on scroll
    const navbar = document.getElementById("navbar");
    window.addEventListener("scroll", () => {
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
document.querySelectorAll('.scroll-down, .scroll-up').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.carousel-dots .dot');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');

// Function to go to a specific slide
function goToSlide(index) {
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    updateCarousel();
}

// Function to move to the next slide
function nextSlide() {
    goToSlide(currentSlide + 1);
}

// Function to move to the previous slide
function prevSlide() {
    goToSlide(currentSlide - 1);
}

// Function to update the carousel
function updateCarousel() {
    // Hide all slides
    slides.forEach(slide => slide.classList.remove('active'));
    // Show the current slide
    slides[currentSlide].classList.add('active');

    // Update active dot
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

// Event listeners for dot navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => goToSlide(index));
});

// Event listeners for arrow navigation
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Initialize carousel
updateCarousel();


const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const clientsGrid = document.querySelector('.clients-grid');
const clientCards = document.querySelectorAll('.client-card');
const clientsPerScroll = 4; // Show 4 clients at a time
let currentIndex = 0; // Track the current position

// Function to update the scroll position
function updateScrollPosition() {
    const newTransformValue = -(currentIndex * (clientCards[0].offsetWidth + 25)); // Adjust gap
    clientsGrid.style.transform = `translateX(${newTransformValue}px)`;
}

// Next button functionality
nextBtn.addEventListener('click', () => {
    if (currentIndex < clientCards.length / clientsPerScroll - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Loop back to start
    }
    updateScrollPosition();
});

// Previous button functionality
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = Math.floor(clientCards.length / clientsPerScroll) - 1; // Loop to last set
    }
    updateScrollPosition();
});



