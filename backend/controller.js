const Product = require("./model");

const getProducts = (req, res, next) => {
  Product.find()
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ error });
    });
};
// const getProductsByName = (req, res, next) => {
//   Product.find()
//     .then((response) => {
//       res.json({ response });
//     })
//     .catch((error) => {
//       res.json({ error });
//     });
// };

const addProduct = (req, res, next) => {
  const newProduct = new Product({
    name: req.body.name,
    reference: req.body.reference,
    price: req.body.price,
    specs: req.body.specs,
    image: req.body.image,
  });
  newProduct
    .save()
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ error });
    });
};
exports.getProducts = getProducts;
exports.addProduct = addProduct;
// exports.getProductsByName = getProductsByName;
