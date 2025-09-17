/*
document.addEventListener("DOMContentLoaded", () => {
    console.log("✅ exercices.js chargé !");
    const container = document.getElementById("exercices-container");

    fetch("assets/data/exercices.json")
        .then(res => res.json())
        .then(data => {
            Object.entries(data).forEach(([categorie, exercices]) => {
                // --- Bouton catégorie ---
                const btn = document.createElement("button");
                btn.className = "category-btn";
                btn.type = "button";
                btn.setAttribute("aria-expanded", "false");
                btn.textContent = categorie;

                // --- Liste d’exercices ---
                const ul = document.createElement("ul");
                ul.className = "exercices-liste";
                ul.hidden = true;

                exercices.forEach(exo => {
                    const li = document.createElement("li");
                    const a = document.createElement("a");
                    a.href = exo.url;
                    a.textContent = exo.titre;
                    li.appendChild(a);
                    ul.appendChild(li);
                });

                // --- Gestion de l’accordéon ---
                btn.addEventListener("click", () => {
                    const isOpen = btn.getAttribute("aria-expanded") === "true";
                    btn.setAttribute("aria-expanded", String(!isOpen));
                    ul.hidden = isOpen;
                    ul.style.maxHeight = isOpen ? "0" : ul.scrollHeight + "px";
                });

                // --- Injection dans la page ---
                container.appendChild(btn);
                container.appendChild(ul);
            });
        })
        .catch(err => console.error("❌ Erreur chargement exercices.json :", err));
});
*/




document.addEventListener("DOMContentLoaded", () => {
    console.log("✅ exercices.js chargé !");
    const container = document.getElementById("exercices-container");

    // 🔹 Les 3 fichiers JSON à charger
    const files = [
        { name: "Excel", path: "assets/data/exercices-excel.json" },
        { name: "Excel VBA", path: "assets/data/exercices-excel-vba.json" },
        { name: "PostgreSQL", path: "assets/data/exercices-postgresql.json" }
    ];

    // 🔹 Charger chaque fichier
    files.forEach(file => {
        fetch(file.path)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Erreur HTTP ${res.status}`);
                }
                return res.json();
            })
            .then(data => {
                // --- Bouton catégorie ---
                const btn = document.createElement("button");
                btn.className = "category-btn";
                btn.type = "button";
                btn.setAttribute("aria-expanded", "false");
                btn.textContent = file.name;

                // --- Liste des exercices ---
                const ul = document.createElement("ul");
                ul.className = "exercices-liste";
                ul.hidden = true;

                data[file.name].forEach(exo => {
                    const li = document.createElement("li");
                    const a = document.createElement("a");
                    a.href = exo.url;
                    a.textContent = exo.titre;
                    li.appendChild(a);
                    ul.appendChild(li);
                });

                // --- Gestion accordéon ---
                btn.addEventListener("click", () => {
                    const isOpen = btn.getAttribute("aria-expanded") === "true";
                    btn.setAttribute("aria-expanded", String(!isOpen));
                    ul.hidden = isOpen;
                    ul.style.maxHeight = isOpen ? "0" : ul.scrollHeight + "px";
                });

                // --- Injection dans la page ---
                container.appendChild(btn);
                container.appendChild(ul);
            })
            .catch(err => console.error(`❌ Erreur chargement ${file.path} :`, err));
    });
});
