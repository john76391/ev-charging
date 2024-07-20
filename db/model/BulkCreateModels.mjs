import sequelize from "../db.mjs";
import User from "./User.mjs";
import History from "./History.mjs";

await sequelize.sync();
