// server.js
const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 3000;

// Middleware pour parser du JSON (utile pour le formulaire Contact)
app.use(express.json());

// Définir le dossier public (racine de ton site)
app.use(express.static(path.join(__dirname)));

// Route pour Contact (sauvegarde dans messages.json)
app.post("/api/contact", (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: "Tous les champs sont requis" });
    }

    const filePath = path.join(__dirname, "assets", "data", "messages.json");

    let messages = [];
    if (fs.existsSync(filePath)) {
        messages = JSON.parse(fs.readFileSync(filePath, "utf8"));
    }

    const newMessage = {
        id: Date.now(),
        name,
        email,
        message,
        date: new Date().toISOString()
    };

    messages.push(newMessage);

    fs.writeFileSync(filePath, JSON.stringify(messages, null, 4), "utf8");

    res.status(200).json({ success: true, message: "Message sauvegardé ✅" });
});

// 👉 Redirection automatique : si l’utilisateur va sur "/", on renvoie index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
    console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
});
