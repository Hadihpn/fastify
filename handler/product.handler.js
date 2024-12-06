const Products = require("../db/products");

const getOneProduct = (req, reply) => {
  const { id } = req.params;
  const product = Products.find(p=> p.id == id);
  if (!product) reply.code(404).send("cannot find anything with this id");
  reply.send(product);
};
const getAllProducts = (req, reply) => {

  reply.send(Products);
};

module.exports = {
  getOneProduct,
  getAllProducts,
};
