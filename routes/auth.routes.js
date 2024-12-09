const { registerHandler } = require("../handler/auth.handler");

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

// const login = {
//   schema: {
//     tags: ["Auth"],
//     security: [
//       {
//         apiKey: {},
//       },
//     ],
//     response: {
//       200: {
//         type: "array",
//         items: Product,
//       },
//     },
//   },
//   handler: getAllProducts,
// };
const authRoutes = (fastify, options, done) => {
  fastify.post("/register", register);
  done();
};
module.exports = {
  authRoutes,
};
