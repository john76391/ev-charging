import User from "@/db/model/User.mjs";
import { Op } from "sequelize";

export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      // 要新增的會員資料
      const newUser = req.body;

      // 檢查從前端來的資料哪些為必要(name, username...)
      if (
        !newUser.name ||
        !newUser.username ||
        !newUser.email ||
        !newUser.password ||
        !newUser.confirmPassword
      ) {
        return res.json({ status: "error", message: "缺少必要資料" });
      }

      // 執行後user是建立的會員資料，created為布林值
      // where指的是不可以有相同的資料，如username或是email不能有相同的
      // defaults用於建立新資料用需要的資料
      const [user, created] = await User.findOrCreate({
        where: {
          [Op.or]: [{ username: newUser.username }, { email: newUser.email }],
        },
        defaults: {
          name: newUser.name,
          username: newUser.username,
          email: newUser.email,
          password: newUser.password,
        },
      });

      // 新增失敗
      if (!created) {
        if (user.username === newUser.username) {
          return res.json({ status: "error", message: "此帳號已存在" });
        } else if (user.email === newUser.email) {
          return res.json({ status: "error", message: "此信箱已存在" });
        } else {
          return res.json({
            status: "error",
            message: "建立會員失敗",
          });
        }
      }

      // 成功建立會員的回應
      // 狀態201是建立資料的標準回應，
      return res.status(201).json({
        status: "success",
        data: user,
      });
    }
  } catch (error) {
    res.status(500).json({ error: "創建會員失敗" });
  }
}
