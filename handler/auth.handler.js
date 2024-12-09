const { USER } = require("../model/user.model");
 const bcrypt = require('bcrypt');
const saltRounds = 10;
// const {fastify} = require("../server")
const registerHandler =async (req, reply) => {
  const { firstName,lastName,userName,password } = req.body;
  const newUser = new USER({
    firstName,
    lastName,
    userName,
    password:await bcrypt.hashSync(password,saltRounds)
  })
  await newUser.save();
  reply.send(newUser);
};
const loginHandler =async (req, reply) => {
  const {userName,password } = req.body;
  const user = await USER.findOne({
    where:{
      userName
    }
  })
  if(!user) throw new Error("not found any user")
  const compareResult = await bcrypt.compare(password,user.password)
  if(!compareResult) throw new Error("not found any user")

  reply.send(user);
};

module.exports = {
    registerHandler,
    loginHandler
};
