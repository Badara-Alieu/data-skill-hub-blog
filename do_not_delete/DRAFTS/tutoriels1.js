document.addEventListener("DOMContentLoaded", () => {
    if (!Array.isArray(tutorielsData) || tutorielsData.length === 0) {
        console.warn("Aucun tutoriel trouvé dans tutoriels-data.js");
        return;
    }

    const conteneur = document.getElementById("conteneur-principal");
    if (!conteneur) {
        console.error("Conteneur principal introuvable !");
        return;
    }

    const aside = document.createElement("aside");
    aside.setAttribute("id", "menu-tutoriels");

    const titre = document.createElement("h2");
    titre.textContent = "Tutoriels";
    aside.appendChild(titre);

    const ul = document.createElement("ul");

    tutorielsData.forEach((tuto) => {
        const li = document.createElement("li");

        const a = document.createElement("a");
        a.href = tuto.lien;
        a.textContent = tuto.categorie;
        li.appendChild(a);

        if (tuto.description) {
            const desc = document.createElement("p");
            desc.textContent = tuto.description;
            li.appendChild(desc);
        }

        ul.appendChild(li);
    });

    aside.appendChild(ul);
    conteneur.appendChild(aside);
});


