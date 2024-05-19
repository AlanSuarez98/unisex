const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

// Endpoint para obtener los datos de las remeras
app.get("/api/remeras", (req, res) => {
  const dataPath = path.join(__dirname, "Remeras.json");
  fs.readFile(dataPath, "utf8", (err, data) => {
    if (err) {
      res.status(500).send("Error reading file");
      return;
    }
    res.json(JSON.parse(data));
  });
});

// Iniciar el servidor
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
