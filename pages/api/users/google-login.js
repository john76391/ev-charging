export default async function handler(req, res) {
  try {
    
  } catch (e) {
    return res.status(500).json({ status: "error", message: "Google登入失敗" });
  }
}
