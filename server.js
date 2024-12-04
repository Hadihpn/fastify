require("dotenv").config();
const fastify = require("fastify")({
  logger: true,
});
const main = async () => {
  try {
    await fastify.listen({port:process.env.PORT});
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};
main()