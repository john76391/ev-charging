import { DataTypes } from "sequelize";
import sequelize from "../db.mjs";
import { passwordHash } from "@/db/password-hash.mjs";

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // 設置唯一約束
    },
    username: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    birth_date: {
      type: DataTypes.DATEONLY, //只需要日期
      allowNull: true,
    },
    sex: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    postcode: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    google_uid: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    line_uid: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    photo_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    line_access_token: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    hooks: {
      // user是傳入的參數，舉例來說，當註冊會員時，會傳入name, username, password等，user就包含這些資料
      beforeCreate: async (user) => {
        if (user.password) {
          user.password = await passwordHash(user.password);
        }
      },
    },
  }
);

export default User;
