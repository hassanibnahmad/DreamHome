// transition link

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
// CARDS SLIDER USING Swiperjs.com

var swiper = new Swiper(".properties-slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  // slidesPerGroup: 3,
  loop: true,
  grabCursor: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// let copy = document.querySelector(".featured-img").cloneNode(true);

// document.querySelector(".featured-content").appendChild(copy);
