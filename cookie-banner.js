document.addEventListener("DOMContentLoaded", function () {
    const banner = document.getElementById("cookie-banner");
    const acceptBtn = document.getElementById("accept-cookies");
    const rejectBtn = document.getElementById("reject-cookies");
    const customizeBtn = document.getElementById("customize-cookies");

    // Controlla se il consenso è già stato dato
    if (!localStorage.getItem("cookieConsent")) {
        banner.style.display = "flex";
    } else {
        banner.style.display = "none";
    }

    // Accetta i cookie e chiude il banner
    acceptBtn.addEventListener("click", function () {
        localStorage.setItem("cookieConsent", "accepted");
        banner.style.display = "none";
    });

    // Rifiuta i cookie e chiude il banner
    rejectBtn.addEventListener("click", function () {
        localStorage.setItem("cookieConsent", "rejected");
        banner.style.display = "none";
    });

    // Personalizza i cookie (puoi aggiungere un popup o link a impostazioni avanzate)
    customizeBtn.addEventListener("click", function () {
        alert("Funzione di personalizzazione in sviluppo.");
    });
});
