let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].classList.add('active');
}

// Mostra la prima slide
slides[currentSlide].classList.add('active');

// Cambia slide ogni 5 secondi
setInterval(showNextSlide, 5000);

