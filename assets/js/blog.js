document.addEventListener("DOMContentLoaded", () => {
    console.log("✅ blog.js chargé !");
    const container = document.getElementById("blog-container");

    fetch("../assets/data/blog.json")
        .then(res => res.json())
        .then(data => {
            data.articles.forEach(article => {
                // --- Carte d'article ---
                const card = document.createElement("article");
                card.className = "blog-card";

                // Image
                const img = document.createElement("img");
                img.src = article.image;
                img.alt = article.titre;
                img.className = "blog-thumbnail";

                // Contenu
                const content = document.createElement("div");
                content.className = "blog-content";

                const h3 = document.createElement("h3");
                const link = document.createElement("a");
                link.href = article.url;
                link.textContent = article.titre;
                h3.appendChild(link);

                const p = document.createElement("p");
                p.textContent = article.resume;

                content.appendChild(h3);
                content.appendChild(p);

                card.appendChild(img);
                card.appendChild(content);

                container.appendChild(card);
            });
        })
        .catch(err => console.error("❌ Erreur chargement blog.json :", err));
});








const newsMarquee = document.getElementById('news-marquee');

async function loadNews() {
    try {
        const response = await fetch('https://www.postgresql.org/feed/');
        if (!response.ok) throw new Error('Impossible de récupérer le flux');

        const text = await response.text();
        const parser = new DOMParser();
        const xml = parser.parseFromString(text, "application/xml");
        const items = xml.querySelectorAll('item');

        if (items.length === 0) throw new Error('Pas d’articles trouvés');

        // Créer des liens pour chaque titre
        const links = Array.from(items).slice(0, 5).map(item => {
            const title = item.querySelector('title').textContent;
            const link = item.querySelector('link').textContent;
            return `<a href="${link}" target="_blank">${title}</a>`;
        });

        newsMarquee.innerHTML = links.join('');
    } catch (err) {
        // Texte de secours si erreur ou pas d’Internet
        newsMarquee.innerHTML = '<a href="https://www.postgresql.org/" target="_blank">PostgreSQL 17.6 Released – Nouvelle version stable disponible !</a>';
    }
}

loadNews();

