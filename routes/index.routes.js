const fastify = require("fastify");

const homeRoutes = (fastify, options, done) => {
  fastify.get("/", (req, reply) => {
    reply.send({
      message: "Hello Fastify",
    });
  });
  done()
};
module.exports = {
  homeRoutes,
};
