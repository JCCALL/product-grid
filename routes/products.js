const router = require("express").Router();
const productsController = require("../controllers/productsController");

router
  .route("/all-products")
  .get(productsController.findAll)

router
  .route("/new-product")
  .post(productsController.create)

router
  .route("/update-product/:id")
  .put(productsController.update)

router
  .route("/remove-product/:id")
  .delete(productsController.remove)

module.exports = router;
