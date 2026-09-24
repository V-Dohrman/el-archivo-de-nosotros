const slides = document.querySelectorAll(".carousel-slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const currentSlideCounter = document.getElementById("currentSlide");
const totalSlidesCounter = document.getElementById("totalSlides");
const archivoItems = document.querySelectorAll(".archivo-item");
const modal = document.getElementById("archivoModal");
const modalContenido = document.getElementById("modalContenido");
const modalCerrar = document.getElementById("modalCerrar");
const menuBoton = document.getElementById("menuBoton");
const menuLateral = document.getElementById("menuLateral");
const menuCerrar = document.getElementById("menuCerrar");

menuBoton.addEventListener("click", () => {
  menuLateral.classList.add("abierto");
});

menuCerrar.addEventListener("click", () => {
  menuLateral.classList.remove("abierto");
});

const menuLinks = document.querySelectorAll(".menu-lateral a");

menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    menuLateral.classList.remove("abierto");
  });
});

let currentSlide = 0;

function showSlide(index) {
  slides.forEach(slide => {
    slide.style.display = "none";
  });

  slides[index].style.display = "block";

  currentSlideCounter.textContent = String(index + 1).padStart(2, "0");
}

nextBtn.addEventListener("click", () => {
  currentSlide++;

  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  showSlide(currentSlide);
});

prevBtn.addEventListener("click", () => {
  currentSlide--;

  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }

  showSlide(currentSlide);
});

showSlide(currentSlide);
totalSlidesCounter.textContent = String(slides.length).padStart(2, "0");

function cerrarModal() {
  modal.style.display = "none";
  document.body.style.overflow = "";
}

archivoItems.forEach(item => {

  const boton = item.querySelector(".archivo-abrir");
  const contenido = item.querySelector(".archivo-contenido");

  boton.addEventListener("click", () => {
  modalContenido.innerHTML = contenido.innerHTML;

  modal.style.display = "block";
  document.body.style.overflow = "hidden";

  });

});

modalCerrar.addEventListener("click", cerrarModal);

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    cerrarModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    cerrarModal();
  }
});
