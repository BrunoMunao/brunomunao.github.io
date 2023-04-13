/* Toggler */
const toggleMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            nav.classList.toggle("show");
        });
    }
};

toggleMenu("nav-toggle", "nav-menu");

/* Menu active */
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
    // Set link as active
    navLink.forEach((n) => n.classList.remove("active"));
    this.classList.add("active");

    // Remove menu mobile
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

/* New scroll animation */

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

/* Dark Mode */
function darkModeToggle() {
    document.body.classList.toggle("dark-mode");
}
const moon = document.getElementById("moon");

moon.addEventListener("click", darkModeToggle);
