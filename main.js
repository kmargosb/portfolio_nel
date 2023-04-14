// import {
//   cloud1,
//   cloud2,
//   moon,
//   nombre,
//   line,
//   line2,
//   developer,
//   btnMoon,
//   btnSun,
//   btnSwitch,
//   btnmenu,
//   switchAfter,
//   menuBtn,
//   contactBTN,
//   mainBtn,
//   tecnology,
//   about_left,
//   about_rigth,
// } from "/variables.js";


let cloud2 = document.querySelector(".nube2");
let cloud1 = document.querySelector(".nube1");
let moon = document.querySelector(".moon");
let nombre = document.querySelector("h1");
let line = document.querySelector(".l1");
let line2 = document.querySelector(".l2");
let developer = document.querySelector(".developer");
const btnSwitch = document.querySelector(".switch");
const switchAfter = document.querySelector(".switch-after");
const btnSun = document.querySelector(".fa-sun");
const btnMoon = document.querySelector(".fa-moon");
const menuBtn = document.querySelector(".menu-btn");
const btnmenu = document.querySelector(".btnmenu");
const contactBTN = document.getElementById("cont-btn");
const mainBtn = document.getElementById("main-btn");
const imgMoon = document.querySelector(".moon");
const about_left = document.querySelector(".des1");
const about_rigth = document.querySelector(".des2");
const tecnology = document.querySelector(".tecnology");
const card = document.querySelector('.card');

menuBtn.addEventListener("click", () => {
  btnmenu.classList.toggle("btnmenu");
});
contactBTN.addEventListener("click", () => {
  btnmenu.classList.toggle("btnmenu");
});
mainBtn.addEventListener("click", () => {
  btnmenu.classList.toggle("btnmenu");
});

const cargarImagen = (entradas, observer) => {
  console.log(entradas);
  // console.log(observer);

  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      // console.log(entrada)
      entrada.target.classList.add("visible");
    } else {
      // console.log(entrada)
      entrada.target.classList.remove("visible");
    }
  });
};

const observer = new IntersectionObserver(cargarImagen, {
  root: null,
  rootMargin: "800px 0px 0px 800px",
  threshold: 1.0,
});

observer.observe(nombre);
observer.observe(line);
observer.observe(line2);
observer.observe(developer);
observer.observe(about_left);
observer.observe(about_rigth);
observer.observe(tecnology);

document.onmousemove = function (e) {
  // console.log(e)
  let x = -e.clientX;
  let y = -e.clientY;
  let z = 0;

  // document.body.style.backgroundPosition = x / 10000 + "px " + y / 50 + "px";
  moon.style.transform =
    "translate3d(" + x / 30 + "px, " + y / 30 + "px, " + z + "px)";
  cloud1.style.transform =
    "translate3d(" + x / 15 + "px, " + y / 10 + "px, " + z + "px)";
  cloud2.style.transform =
    "translate3d(" + x / 20 + "px, " + y / 20 + "px, " + z + "px)";
};

btnSwitch.addEventListener("click", () => {
  document.body.classList.toggle("light");
  btnSwitch.classList.toggle("active");
  moon.classList.toggle("moon-off");
  btnSun.classList.toggle("switch-s");
  btnMoon.classList.toggle("switch-m");
  switchAfter.classList.toggle("switch-r");
});

window.addEventListener(
  "deviceorientation",
  function (event) {
    let alpha = Math.round(event.alpha);
    let beta = Math.round(event.beta);
    let gamma = Math.round(event.gamma);

    moon.style.transform =
      "translate3d(" + gamma / 5 + "px, " + beta / 5 + "px, " + alpha + "px)";
    cloud1.style.transform =
      "translate3d(" + gamma + "px, " + beta + "px, " + alpha + "px)";
    cloud2.style.transform =
      "translate3d(" + gamma / 3 + "px, " + beta / 3 + "px, " + alpha + "px)";
  },
  true
);
