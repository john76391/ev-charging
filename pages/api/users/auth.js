import authenticate from "@/middleware/authenticate";
import User from "@/db/model/User.mjs";

export default async function handler(req, res) {
  try {
    // 驗證登入狀態
    const result = await authenticate(req, res);
    // 驗證登入狀態成功才取得使用者資料
    if (result.status === "success") {
      const user = await User.findByPk(result.user.id, {
        raw: true,
      });

      // 移除密碼
      delete user.password;
      return res.json({ status: "success", user });
    } else {
      return res.json(result);
    }
  } catch (e) {
    console.log(e);
  }
}
