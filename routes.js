const path = require("path");

module.exports = (app) => {
  app.get("/", (req, res) => {
    res.view("/pages/index.html");
  })
}