const { registerHandler, loginHandler } = require("../handler/auth.handler");

const register = {
  schema: {
    tags: ["Auth"],
    body: {
      type: "object",
      properties: {
        firstName: {
          type: "string",
        },
        lastName: {
          type: "string",
        },
        userName: {
          type: "string",
        },
        password: {
          type: "string",
        },
      },
    },
    response: {
      200: {
        message:"user created succesfully"
      },
    },
  },
  handler: registerHandler,
};
const login = {
  schema: {
    tags: ["Auth"],
    body: {
      type: "object",
      properties: {
        userName: {
          type: "string",
        },
        password: {
          type: "string",
        },
      },
    },
    response: {
      200: {
        message:"logged in succesfully"
      },
    },
  },
  handler: loginHandler,
};


const authRoutes = (fastify, options, done) => {
  fastify.post("/register", register);
  fastify.post("/login", login);
  done();
};
module.exports = {
  authRoutes,
};
