/*====================================== MENU SHOW Y HIDDEN=========================================*/
const navMenu = document.getElementById("nav-menu");
const navToglle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

/*=== MENU SHOW === */
/* Validate if contant exists */
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navToggle.classlist.add("show-menu");
    });
}

/*===== MENU HIDDEN ====*/
/* Validate if constant exists */
if (navColse) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}

/*================================ REMOVE MENU MOBILE ========================== */
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove(show-menu);
}
navLink.forEach((n) => n.addEventListener("click", linkAction));