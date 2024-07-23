import sequelize from "../db.mjs";
import User from "./User.mjs";
import History from "./History.mjs";

User.hasMany(History, { foreignKey: "customerId" });
History.belongsTo(User, { foreignKey: "customerId" });

await sequelize.sync();

export { User, History };
