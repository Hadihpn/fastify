const { USER } = require("../model/user.model");
const bcrypt = require("bcrypt");
const fastifyJwt = require("@fastify/jwt");
const jwt = require("jsonwebtoken");
const saltRounds = 10;
// const {fastify} = require("../server")
const fastify = require("fastify")({
  logger: true,
});
fastify.register(fastifyJwt, {
  secret: "fastify5464645487",
});
const registerHandler = async (req, reply) => {
  const { firstName, lastName, userName, password } = req.body;
  const newUser = new USER({
    firstName,
    lastName,
    userName,
    password: await bcrypt.hashSync(password, saltRounds),
  });
  await newUser.save();
  reply.send(newUser);
};
const loginHandler = async (req, reply) => {
  const { userName, password } = req.body;
  const user = await USER.findOne({
    where: {
      userName,
    },
  });
  if (!user) throw new Error("not found any user");
  const compareResult = await bcrypt.compare(password, user.password);
  if (!compareResult) throw new Error("not found any user");
  user.accessToken = await jwt.sign({ userName }, { expiresIn: "1m" });
  await user.save;
  reply.send(user.accessToken);
};

module.exports = {
  registerHandler,
  loginHandler,
};
