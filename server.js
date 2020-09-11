const express = require("express");
// const path = require("path");
// const morgan = require("morgan");
// const helmet = require("helmet")
// const { join } = require("path");
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const logger = require("morgan")
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
// app.use(morgan("dev"));
// app.use(helmet());
// app.use(express.static(join(__dirname, "build")));



// // Configure middleware
//     // Use morgan
//     app.use(logger("dev"));
//     // Use body parser
//     app.use(bodyParser.json());
//     // Use cors
//     app.use(cors());

// Static directory
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Routes
// =============================================================

app.use(routes);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log(`🌎  ==> Server now listening on PORT ${PORT}!`);
    seeder.up(db.Products);
  });
});