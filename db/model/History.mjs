import { DataTypes } from "sequelize";
import sequelize from "../db.mjs";

const History = sequelize.define(
  "History",
  {
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    chargingDate: {
      type: DataTypes.DATEONLY,
    },
    startTime: {
      type: DataTypes.DATE,
    },
    endTime: {
      type: DataTypes.DATE,
    },
    stationName: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    cost: {
      type: DataTypes.INTEGER,
    },
  },
  {
    // Other model options go here
  }
);

export default History;
