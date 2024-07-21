import cookie from "cookie";
import authenticate from "@/middleware/authenticate";

export default async function handle(req, res) {
  try {
    if (req.method === "POST") {
      // 驗證登入狀態
      const result = await authenticate(req, res);

      if (result.status === "success") {
        // 設置過去的日期來清除 Cookie
        const expires = new Date(0);
        // 清除 Cookie
        res.setHeader(
          "Set-Cookie",
          cookie.serialize("accessToken", "", {
            httpOnly: true,
            // 設置過期時間為過去
            expires: expires,
            path: "/",
          })
        );

        // 回應登出成功
        res.status(200).json({ status: "success", message: "登出成功" });
      } else {
        // 回應登出失敗
        res
          .status(200)
          .json({ status: "error", message: "登出失敗，請重新登入" });
      }
    } else {
      res.status(405).json({ status: "error", message: "Method not allowed" });
    }
  } catch (e) {
    res.status(500).json({ status: "error", message: "登出失敗" });
  }
}
