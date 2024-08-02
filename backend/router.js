const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.get("/products", controller.getProducts);
router.post("/addproducts", controller.addProduct);
// router.get("/products/:name", controller.getProductsByName);

module.exports = router;
