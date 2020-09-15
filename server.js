const express = require("express");
const seeder = require('./seeders/20200911212217-Products');
const routes = require("./routes");
const sequelize = require("sequelize");

// Initialize Express
const app = express();
const PORT = process.env.PORT || 8080;
const db = require("./models");
//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Routes
// =============================================================

app.use(routes);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log(`🌎  ==> Server now listening on PORT ${PORT}!`);
    seeder.up(db.Products);
  });
});