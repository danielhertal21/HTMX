import { Sequelize } from "sequelize";
import User from "./model/User.js";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./src/db/database.sqlite",
  logging: false
});

User.init(sequelize);

sequelize.sync({ alter: true });
console.log("START")
export default sequelize;
