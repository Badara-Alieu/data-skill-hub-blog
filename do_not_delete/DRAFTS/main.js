/* Bouton "Retour en haut" (global) */
document.addEventListener("DOMContentLoaded", () => {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (!scrollTopBtn) return;

    const onScroll = () => {
        const y = window.pageYOffset || document.documentElement.scrollTop;
        if (y > 200) {
            scrollTopBtn.classList.add("show");
        } else {
            scrollTopBtn.classList.remove("show");
        }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // état initial

    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
