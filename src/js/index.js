// Toggle del menú móvil
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('hidden');
});

// Efecto Typewriter
var app = document.getElementById('typewriter');
var typewriter = new Typewriter(app, { loop: true, delay: 75 });
typewriter.typeString('Desarrollador de Aplicaciones Web')
  .pauseFor(1500)
  .deleteAll()
  .typeString('Programador junior')
  .pauseFor(1500)
  .deleteAll()
  .typeString('Diseñador de Páginas Web')
  .pauseFor(1500)
  .start();

// Pausar video al terminar
const video = document.getElementById('background-video');
video.addEventListener('ended', function () {
  video.pause();
});

// Duplicar slider para animación continua
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("slider");
  slider.innerHTML += slider.innerHTML;
  const scrollDistance = slider.scrollWidth / 2;
  slider.style.setProperty("--scroll-distance", scrollDistance + "px");
});

// Funcionalidad de flip card
document.querySelectorAll('.flip-card-front img').forEach(img => {
  img.addEventListener('click', function (e) {
    e.stopPropagation();
    const card = this.closest('.flip-card');
    card.classList.add('flipped');
  });
});
document.querySelectorAll('.flip-back-btn').forEach(btn => {
  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    const card = this.closest('.flip-card');
    card.classList.remove('flipped');
  });
});

// Inicializar VANTA
VANTA.NET({
  el: "#acerca-de",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x3f99ff,
  backgroundColor: 0x111827,
  points: 15.00
});

// Cambiar fondo del navbar al scrollear
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > window.innerHeight - 50) {
    navbar.classList.add('bg-blue-900');
  } else {
    navbar.classList.remove('bg-blue-900');
  }
});
