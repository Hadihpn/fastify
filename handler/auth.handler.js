const { USER } = require("../model/user.model");

const registerHandler =async (req, reply) => {
  const { firstName,lastName,userName,password } = req.body;
  const newUser = new USER({
    firstName,
    lastName,
    userName,
    password
  })
  await newUser.save();
  reply.send(newUser);
};


module.exports = {
    registerHandler,
};
