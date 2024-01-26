// ----------MENU-------------------

const menuHamburger = document.querySelector(".humberger");
const navLinks = document.querySelector(".navbar");

menuHamburger.addEventListener("click", () => {
  menuHamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

document.querySelectorAll("a").forEach((n) =>
  n.addEventListener("click", () => {
    menuHamburger.classList.remove("active");
    navLinks.classList.remove("active");
  })
);
// -----------------HEADER SCROLLING---------------
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("fixHeader", window.scrollY > 90);
});

window.onscroll = () => {
  menuHamburger.classList.remove("active");
  navLinks.classList.remove("active");
};

// ----------------------dublicate the featured-content class---------------------

// let copy = document.querySelector(".featured-img").cloneNode(true);

// document.querySelector(".featured-content").appendChild(copy);
