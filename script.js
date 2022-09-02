const menu_toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

menu_toggle.onclick = function () {
  menu_toggle.classList.toggle("active");
  menu.classList.toggle("responsive");
};
//animação do site

const logo = document.querySelector(".logo");
const menus_toggle = document.querySelectorAll(".menu li a");
const banniere = document.querySelector(".banniere h1");
const p = document.querySelector(".banniere p");
const btn = document.querySelector(".banniere a");
const footer = document.querySelector(".banniere span");

window.addEventListener("load", () => {
  const TL = gsap.timeline({ paused: true });
  TL.staggerFrom(logo, 2, { y: -100, opacity: 0, ease: "power2.out" }, 0.2)
    .staggerFrom(menus_toggle, 1, { opacity: 0, ease: "power0.out" }, 0.4)
    .staggerFrom(banniere, 1, { x: -100, opacity: 0, ease: "power2.out" }, 0.6)
    .staggerFrom(p, 1, { x: 100, opacity: 0, ease: "power1.out" }, 0.8)
    .staggerFrom(btn, 1, { y: 50, opacity: 0, ease: "power2.out" }, 1)
    .staggerFrom(footer, 1, { opacity: 0, ease: "power2.out" }, 1.1);

  TL.play();
});
