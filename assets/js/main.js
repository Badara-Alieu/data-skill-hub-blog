/* ===========================
    Bouton "Retour en haut"
=========================== */
const scrollTopBtn = document.getElementById("scrollTopBtn");

// Affiche ou cache le bouton au scroll
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollTopBtn.classList.add("show");
    } else {
        scrollTopBtn.classList.remove("show");
    }
};

// Au clic, remonter doucement
scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
