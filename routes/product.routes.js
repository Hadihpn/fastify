const { getOneProduct, getAllProducts } = require("../handler/product.handler");

const Product = {
  type: "object",
  properties: {
    id: {
      type: "integer",
    },
    name: {
      type: "string",
    },
  },
};

const getProductItem = {
  schema: {
    response: {
      200: Product,
    },
  },
  handler: getOneProduct,
};

const getAllProductItem = {
  schema: {
    response: {
      200: {
        type: "array",
        items: Product,
      },
    },
  },
  handler: getAllProducts,
};
const productRoutes=  (fastify, options, done)=> {
  fastify.get("/", getAllProductItem);
  fastify.get("/:id", getProductItem);
  done();
}
module.exports = {
    productRoutes
}
