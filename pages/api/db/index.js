import BulkCreateModels from "@/db/model/BulkCreateModels.mjs";
import User from "@/db/model/User.mjs";

export default async function handler(req, res) {
  try {
    const [user, created] = await User.findOrCreate({
      where: { name: "Edward" },
      defaults: {
        name: "Edward",
        username: "test123",
        email: "test1234@gmail.com",
        password: "Test1234",
      },
    });
    res.status(200).json({ message: "Database initialized successfully" });
  } catch (error) {
    res.status(500).json({ error: "Database initialization failed" });
  }
}
