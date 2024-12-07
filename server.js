const fastifySwagger = require("@fastify/swagger");
const { homeRoutes } = require("./routes/index.routes");
const { productRoutes } = require("./routes/product.routes");
const fastifySwaggerUi = require("@fastify/swagger-ui");

require("dotenv").config();
const fastify = require("fastify")({
  logger: true,
});
fastify.register(fastifySwagger, {
  swagger: {
    info: {
      title: "fastify swagger",
      description:"swagger documentaion",
      version:"0.1.0"
    },
    tags:[
      {
        name:"products",description:"write/read product"
      }
    ],
    schemes:["http"],
    securityDefinitions:{
      apiKey:{
        type:"apiKey",
        in:"header",
        name:"authorization"
      }
    }
  },
});
fastify.register(fastifySwaggerUi, {
  prefix: "swagger",
});
fastify.register(homeRoutes);
fastify.register(productRoutes, { prefix: "products" });
const main = async () => {
  try {
    await fastify.listen({ port: process.env.PORT });
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};
main();
