const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.get("/products", controller.getProducts);
router.post("/addproducts", controller.addProduct);

module.exports = router;
