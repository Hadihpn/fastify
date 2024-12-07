const fastify = require("fastify");
const indexRoute = {
  schema: {
    tags: ["Home"],
    security: [
      {
        apiKey:[],
      },
    ],
    response: {
      200: {
        type: "object",
        properties: {
          header: {
            type: "object",
            properties: {
              authorization: {
                type: "string",
              },
            },
          },
          message: { type: "string" },
        },
      },
    },
  },
  handler: (req, reply) => {
    reply.send({
      header: req.headers,
      message: "hello fastify",
    });
  },
};
const homeRoutes = (fastify, options, done) => {
  fastify.get("/", indexRoute);
  done();
};
module.exports = {
  homeRoutes,
};
