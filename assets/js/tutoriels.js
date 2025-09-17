document.addEventListener("DOMContentLoaded", () => {
    console.log("✅ tutoriels.js chargé !");
    const container = document.getElementById("categories-container");

    // 🔹 Les 3 fichiers JSON à charger
    const files = [
        { name: "Excel", path: "assets/data/tutoriels-excel.json" },
        { name: "Excel VBA", path: "assets/data/tutoriels-excel-vba.json" },
        { name: "PostgreSQL", path: "assets/data/tutoriels-postgresql.json" }
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

                // --- Liste de tutoriels ---
                const ul = document.createElement("ul");
                ul.className = "tutoriels-liste";
                ul.hidden = true;

                data[file.name].forEach(tuto => {
                    const li = document.createElement("li");
                    const a = document.createElement("a");
                    a.href = tuto.url;
                    a.textContent = tuto.titre;
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
