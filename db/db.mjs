import { Sequelize } from "sequelize";

// connecting to a database
// 參數順序 database, username, password, {options}
const sequelize = new Sequelize("ems", "isaac", "GAxo5I", {
  host: "localhost",
  port: "3306",
  dialect: "mysql",
  timezone: "+08:00",
});

// testing the connection
try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

// 給models define使用
export default sequelize;
