import BulkCreateModels from "@/db/model/BulkCreateModels.mjs";
import User from "@/db/model/User.mjs";

export default async function handler(req, res) {
  try {
    const [user, created] = await User.findOrCreate({
      where: { name: "Edward" },
      defaults: {
        name: "Edward",
        username: "edward123",
        email: "edward123@gmail.com",
        password: "Edward123",
      },
    });
    res.status(200).json({ message: "Database initialized successfully" });
  } catch (error) {
    res.status(500).json({ error: "Database initialization failed" });
  }
}
