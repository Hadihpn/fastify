const { homeRoutes } = require("./routes/index.routes");
const { productRoutes } = require("./routes/product.routes");

require("dotenv").config();
const fastify = require("fastify")({
  logger: true,
});
fastify.register(homeRoutes)
fastify.register(productRoutes,{prefix:"products"})
const main = async () => {
  try {
    await fastify.listen({port:process.env.PORT});
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};
main()