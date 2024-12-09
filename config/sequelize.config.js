const { Sequelize } = require("sequelize")

const sequelize = new Sequelize("postgres://postgres:HADIh3pn@localhost:5433/fastify")
const dbConnection = async()=>{
    await sequelize.authenticate();
    console.log("connected to postgress succesfully");
}
dbConnection();

module.exports = {
    sequelize
}