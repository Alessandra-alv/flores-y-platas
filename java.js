const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const dotsContainer = document.querySelector('.dots-container');

let currentIndex = 0;
const slideCount = slides.length;

// Función para actualizar el slider
function updateSlider() {
    slider.style.transform = translateX(-$currentIndex * 100}%);
    updateDots();
}

// Función para ir al slide anterior
function prevSlide() {
    currentIndex = (currentIndex - 1 + slideCount) % slideCount;
    updateSlider();
}

// Función para ir al siguiente slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % slideCount;
    updateSlider();
}

// Función para crear los puntos de navegación
function createDots() {
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateSlider();
        });
        dotsContainer.appendChild(dot);
    });
    updateDots();
}

// Función para actualizar el estado de los puntos
function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.remove('activate');
        if (index === currentIndex) {
            dot.classList.add('activate');
        }
    });
}

// Event listeners para los botones de navegación
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Crear los puntos de navegación
createDots();
const miniaturas = document.querySelectorAll('.miniatura');
const visor = document.getElementById('visor');
const imagenGrande = document.getElementById('imagenGrande');
const cerrar = document.getElementById('cerrar');

miniaturas.forEach(img => {
    img.addEventListener('click', () => {
        imagenGrande.src = img.src;
        visor.classList.remove('oculto');
    });
});

cerrar.addEventListener('click', () => {
    visor.classList.add('oculto');
});

visor.addEventListener('click', (e) => {
    if (e.target === visor) {
        visor.classList.add('oculto');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const noticias = document.querySelectorAll('.noticia');
    const leerMasBotones = document.querySelectorAll('.noticia a');
//
    noticias.forEach(noticia => {
        noticia.addEventListener('mouseenter', () => {
            noticia.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.2)';
            noticia.style.transform = 'scale(1.02)';
        });

        noticia.addEventListener('mouseleave', () => {
            noticia.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
            noticia.style.transform = 'scale(1)';
        });
    });
//
  
        });