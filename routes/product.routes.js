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
    tags: ["Product"],
    params: {
      type: "object",
      properties: {
        id: {
          type: "string",
          description: "the id of product",
        },
      },
    },
    response: {
      200: Product,
    },
  },
  handler: getOneProduct,
};

const getAllProductItem = {
  schema: {
    tags: ["Product"],
    security: [
      {
        apiKey: {},
      },
    ],
    response: {
      200: {
        type: "array",
        items: Product,
      },
    },
  },
  handler: getAllProducts,
};
const productRoutes = (fastify, options, done) => {
  fastify.get("/", getAllProductItem);
  fastify.get("/:id", getProductItem);
  done();
};
module.exports = {
  productRoutes,
};
