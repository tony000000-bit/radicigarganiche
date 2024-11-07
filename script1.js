// Script per lo slideshow
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].classList.add('active');
}

// Avvia lo slideshow
slides[currentSlide].classList.add('active');
setInterval(showNextSlide, 5000); // Cambia slide ogni 5 secondi

// Script per il menu a tendina (responsive)
const menuIcon = document.getElementById('menu-icon');
const mainMenu = document.getElementById('main-menu');

menuIcon.addEventListener('click', () => {
    mainMenu.classList.toggle('active');
});

// Chiude il menu quando si clicca fuori
document.addEventListener('click', (e) => {
    if (!menuIcon.contains(e.target) && !mainMenu.contains(e.target)) {
        mainMenu.classList.remove('active');
    }
});

// Script per le carte: aggiunge animazione al passaggio del mouse
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.opacity = '0.7'; // Aumenta la trasparenza al passaggio del mouse
    });

    card.addEventListener('mouseout', () => {
        card.style.opacity = '1'; // Ripristina l'opacità originale quando il mouse esce
    });
});

// Controllo per verificare se il sito è in modalità desktop o mobile e applica stili appropriati
function adjustForScreenSize() {
    if (window.innerWidth <= 768) {
        mainMenu.style.display = 'none'; // Nasconde il menu su dispositivi mobili fino a quando non viene attivato
    } else {
        mainMenu.style.display = 'flex'; // Mostra il menu su desktop
    }
}

window.addEventListener('resize', adjustForScreenSize);
adjustForScreenSize(); // Chiama la funzione all'avvio per impostare correttamente il layout
