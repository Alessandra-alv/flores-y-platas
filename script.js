const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const dotsContainer = document.querySelector('.dots-container');

let currentIndex = 0;
const slideCount = slides.length;

// Función para actualizar el slider
function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
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