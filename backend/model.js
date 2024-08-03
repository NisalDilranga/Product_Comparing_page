const mongoose = require("mongoose");

// id = auto increement
const productSchema = new mongoose.Schema({
  name: String,
  reference: String,
  price: Number,
  specs: String,
  image: String,
  network: String,
  launchdate: String,
  bodydata: String,
  size: String
});
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
