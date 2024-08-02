const express = require("express");
const cors = require("cors");
const controler = require("./controller");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/products", async (req, res) => {
  try {
    await controler.getProducts((req, res, next) => {
      res.send();
    });
  } catch (error) {
    console.log(error);
  }
});
// app.get('/products/:name', async (req, res) => {
//   try {
//       const products = await controler.getProductsByName.find({ name: req.params.name });
//       res.json(products);
//   } catch (error) {
//       res.status(500).send(error);
//   }
// });
app.post("/addproduct", async (req, res) => {
  try {
    await controler.addProduct(req.body, (cb) => {
      res.send();
    });
  } catch (error) {}
});

module.exports = app;
