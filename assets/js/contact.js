document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", async (event) => {
        event.preventDefault(); // Empêche le rechargement de la page

        // Récupération des valeurs
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Vérification simple
        if (!name || !email || !message) {
            showFeedback("⚠️ Merci de remplir tous les champs !", "error");
            return;
        }

        try {
            // ✅ Envoi vers le backend Express (server.js)
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, message })
            });

            if (response.ok) {
                showFeedback("✅ Merci " + name + " ! Votre message a bien été envoyé.", "success");
                form.reset();
            } else {
                showFeedback("❌ Erreur lors de l'envoi. Merci de réessayer plus tard.", "error");
            }
        } catch (error) {
            console.error("Erreur réseau :", error);
            showFeedback("❌ Impossible de contacter le serveur.", "error");
        }
    });
});

/**
 * Affiche un message sous le formulaire
 * @param {string} message - texte à afficher
 * @param {string} type - "success" ou "error"
 */
function showFeedback(message, type) {
    let feedback = document.getElementById("form-feedback");
    if (!feedback) {
        feedback = document.createElement("div");
        feedback.id = "form-feedback";
        document.getElementById("contact-form").appendChild(feedback);
    }

    // Réinitialisation
    feedback.className = "";
    feedback.textContent = message;
    feedback.classList.add(type, "show");

    // ✅ Disparition animée après 5s
    setTimeout(() => {
        feedback.classList.add("hide");
        setTimeout(() => {
            feedback.className = "";
            feedback.textContent = "";
        }, 600);
    }, 5000);
}
