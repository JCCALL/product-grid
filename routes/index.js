const router = require("express").Router();
const product = require("./products");

router.use("/products", product);