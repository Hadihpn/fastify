const fastifySwagger = require("@fastify/swagger");
const { homeRoutes } = require("./routes/index.routes");
const { productRoutes } = require("./routes/product.routes");
const fastifySwaggerUi = require("@fastify/swagger-ui");
const {
  fastifySwaggerConfig,
  fastifySwaggerUiConfig,
} = require("./config/swagger.config");
const { sequelize } = require("./config/sequelize.config");
const { authRoutes } = require("./routes/auth.routes");
const { fastifyBcrypt } = require("fastify-bcrypt");

require("dotenv").config();
const fastify = require("fastify")({
  logger: true,
});
fastify.register(fastifyBcrypt, {
  saltWorkFactor: 12,
});
fastify.register(fastifySwagger, fastifySwaggerConfig);
fastify.register(fastifySwaggerUi, fastifySwaggerUiConfig);
fastify.register(homeRoutes);
fastify.register(productRoutes, { prefix: "products" });
fastify.register(authRoutes, { prefix: "auth" });
const main = async () => {
  try {
    await fastify.listen({ port: process.env.PORT });
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};
main();
module.exports={fastify}