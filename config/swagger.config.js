const fastifySwaggerConfig = {
  swagger: {
    info: {
      title: "fastify swagger",
      description: "swagger documentaion",
      version: "0.1.0",
    },
    tags: [
      {
        name: "products",
        description: "write/read product",
      },
    ],
    schemes: ["http"],
    consumes:["application/json","application/x-www-urlencoded"],
    securityDefinitions: {
      apiKey: {
        type: "apiKey",
        in: "header",
        name: "authorization",
      },
    },
  },
};
const fastifySwaggerUiConfig = {
  prefix: "swagger",
};
module.exports = {
  fastifySwaggerConfig,
  fastifySwaggerUiConfig
};
