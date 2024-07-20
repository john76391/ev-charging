import { DataTypes } from "sequelize";
import sequelize from "../db.mjs";

const History = sequelize.define(
  "History",
  {
    // Model attributes are defined here
    stationName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
  }
);

export default History;

