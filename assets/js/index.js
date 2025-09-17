document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("text");
    const text = "Bienvenue sur Data Skill Hub, Apprendre aujourd’hui, partager demain. Je suis un passionné de data et d’informatique, actuellement en apprentissage de PostgreSQL, MySQL, Excel et Excel VBA. Ce site me sert à structurer mes connaissances, mais aussi à partager des ressources pratiques, des tutoriels détaillés et des exercices accessibles à tous. L’objectif à terme est de transformer Data Skill Hub en une véritable plateforme pédagogique ouverte, où chacun pourra apprendre et progresser à son rythme. En attendant, vous trouverez déjà ici des contenus clairs, évolutifs et utiles, adaptés aussi bien aux débutants qu’à ceux qui souhaitent consolider leurs bases. Commencer: Pour débuter, je vous propose un module « Démarrage » qui vous guidera dans l’installation et la configuration de <strong>PostgreSQL</strong> en cinq étapes simples. À la fin de ce parcours, vous disposerez d’un environnement complet et d’une base de données de démonstration pour pratiquer en autonomie. Voir les tutoriels | Faire les exercices";
    
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            container.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    typeWriter();
});
