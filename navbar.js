// Seleziona l'icona del menu e il menu principale
const menuIcon = document.getElementById('menu-icon');
const mainMenu = document.getElementById('main-menu');

// Aggiungi un listener per mostrare/nascondere il menu
menuIcon.addEventListener('click', () => {
    mainMenu.classList.toggle('active');
});
