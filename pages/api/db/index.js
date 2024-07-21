import BulkCreateModels from "@/db/model/BulkCreateModels.mjs";
import User from "@/db/model/User.mjs";

export default async function handler(req, res) {
  try {
    const [user, created] = await User.findOrCreate({
      where: { name: "Test" },
      defaults: {
        name: "Test",
        username: "test123",
        email: "test123@gmail.com",
        password: "Test1234",
      },
    });
    res.status(200).json({ message: "Database initialized successfully" });
  } catch (error) {
    res.status(500).json({ error: "Database initialization failed" });
  }
}
