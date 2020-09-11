const router = require("express").Router();
const productsController = require("../../controllers/productsController");

// Matches with "/api/products"
router.route("/")
  .get(productsController.findAll)

  router.route("/new")  
  .post(productsController.create);

// Matches with "/api/products/:id"
router
  .route("/:id")
  .put(productsController.update)
  .delete(productsController.remove);

module.exports = router;
