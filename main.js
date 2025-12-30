// let burgerBtn = document.querySelector(".burger-menu-btn");
// let burgerMenu = document.querySelector(".burger-menu");

// let isBurgerOpen = false;

// burgerBtn.onclick = function () {
//     if (!isBurgerOpen) {
//         burgerMenu.style.display = "block";
//         burgerBtn.style.backgroundPosition = "center left 50px, center";
//         isBurgerOpen = true;
//     }
//     else if (isBurgerOpen) {
//         burgerMenu.style.display = "none";
//         burgerBtn.style.backgroundPosition = "center, center left 50px";
//         isBurgerOpen = false;
//     }
// }

const menuBtn = document.querySelector('.menu-icon');
const closeBtn = document.querySelector('.close-icon');
const mobileNav = document.querySelector('.mobile-navbar');
const menuContent = document.querySelector('.head-content');

// Open mobile menu
menuBtn.addEventListener("click", () => {
    mobileNav.classList.add('open');
    menuContent.classList.add('open');
});

// Close mobile menu
closeBtn.addEventListener("click", () => {
    mobileNav.classList.remove('open');
    menuContent.classList.remove('open');
});


