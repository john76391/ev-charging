import authenticate from "@/middleware/authenticate";
import { History, User } from "@/db/model/BulkCreateModels.mjs";

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      // 驗證登入狀態
      const result = await authenticate(req, res);
      // 驗證登入狀態成功才取得使用者資料
      if (result.status === "success") {
        const history = await History.findAll({
          where: { customerId: result.user.id },
          raw: true,
        });

        return res.json({ status: "success", history });
      } else {
        return res.json(result);
      }
    } else {
      return res
        .status(405)
        .json({ status: "error", message: "Method not allowed" });
    }
  } catch (e) {
    return res.status(500).json({ status: "error", message: "取得資料失敗" });
  }
}
