import jsonwebtoken from "jsonwebtoken";

export default async function authenticate(req, res) {
  const { accessToken } = req.cookies;

  // 如果沒有accessToken
  if (!accessToken) {
    return { status: "error", message: "授權失敗，沒有存取令牌" };
  }

  // verify的callback會帶有decoded payload(解密後的有效資料)，就是user的資料
  return jsonwebtoken.verify(
    accessToken,
    "thisisverstrongaccesstokensecret",
    (err, user) => {
      if (err) {
        return { status: "error", message: "不合法的存取令牌" };
      }

      // user是解密後的有效資料 (包含使用者id跟username)
      return { status: "success", message: "授權成功", user };
    }
  );
}
