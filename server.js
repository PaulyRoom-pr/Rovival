const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const ROOT = __dirname;

// Render can use this endpoint for health checks.
app.get("/health", (_req, res) => {
  res.status(200).type("text/plain").send("Rovival is healthy");
});

// Serve the homepage and only the public assets.
// Repository files such as server.js and package.json are not exposed.
app.get("/", (_req, res) => {
  res.sendFile(path.join(ROOT, "index.html"));
});

for (const file of ["style.css", "jquery.js", "coolplaces.js", "listofplaces.json"]) {
  app.get(`/${file}`, (_req, res, next) => {
    res.sendFile(path.join(ROOT, file), (error) => {
      if (error) next();
    });
  });
}

app.use((_req, res) => {
  res.status(404).type("text/plain").send("Page not found");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Rovival is running on port ${PORT}`);
});
