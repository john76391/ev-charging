import User from "@/db/model/User.mjs";
import { compareHash } from "@/db/password-hash.mjs";
import jsonwebtoken from "jsonwebtoken";
import cookie from "cookie";

export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      // 從前端來的使用者資料
      const loginUser = req.body;

      // 檢查從前端來的資料哪些為必要
      if (!loginUser.username || !loginUser.password) {
        return res.json({ status: "error", message: "缺少必要資料" });
      }

      // 查詢資料庫是否有這個使用者
      const user = await User.findOne({
        where: {
          username: loginUser.username,
        },
        // 預設情況下,所有finder方法的結果都是模型類別的instance
        // 這表示在資料庫傳回結果之後 Sequelize 會自動將所有內容包裝在適當的instance object中
        // 在少數情況下,當結果太多時,這種包裝可能會效率低下
        // 所以加上raw:true可以僅收到簡單的JS物件
        raw: true,
      });

      // 檢查使用者是否存在
      if (!user) {
        return res.json({ status: "error", message: "使用者不存在" });
      }

      // 比較登入時的密碼純字串跟資料庫中的加密過後的密碼
      const isValid = await compareHash(loginUser.password, user.password);

      // 密碼錯誤的處理方式
      if (!isValid) {
        return res.json({ status: "error", message: "密碼錯誤" });
      }

      // 存取令牌access token
      const returnUser = {
        id: user.id,
        username: user.username,
      };

      // 產生存取令牌(access token)，其中包含會員資料
      const accessToken = jsonwebtoken.sign(
        returnUser,
        "thisisverstrongaccesstokensecret",
        {
          expiresIn: "3d",
        }
      );

      // 設置 Cookie 過期時間為 3 天後
      const expires = new Date();
      expires.setDate(expires.getDate() + 3);

      // 設置 Cookie
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("accessToken", accessToken, {
          httpOnly: true,
          expires: expires,
          sameSite: "strict",
          // Cookie 在整個網站中有效
          path: "/",
        })
      );

      // 不回傳密碼
      delete user.password;
      // 傳送access token回應(例如react可以儲存在state中使用)
      res.status(200).json({
        status: "success",
        data: { accessToken },
      });
    } else {
      res.status(405).json({ status: "error", message: "Method not allowed" });
    }
  } catch (e) {
    res.status(500).json({ error: "登入失敗" });
  }
}
