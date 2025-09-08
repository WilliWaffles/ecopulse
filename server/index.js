const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Endpoint lectura JSON
app.get("/api/content", (req, res) => {
  const file = path.join(__dirname, "data", "content.json");
  const json = JSON.parse(fs.readFileSync(file, "utf-8"));
  res.json(json);
});

// Endpoint feedback/comentarios enviados por isurario
app.post("/api/feedback", (req, res) => {
  const { name, email, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Campos incompletos" });
  }
  fs.appendFileSync(
    path.join(__dirname, "feedback.log"),
    `[${new Date().toISOString()}] ${name} <${email}>: ${message}\n`
  );
  res.json({ ok: true, msg: "Feedback recibido. ¡Gracias!" });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`API escuchando en http://localhost:${PORT}`));
