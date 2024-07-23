import BulkCreateModels from "@/db/model/BulkCreateModels.mjs";
import User from "@/db/model/User.mjs";
import History from "@/db/model/History.mjs";

export default async function handler(req, res) {
  try {
    const [user, createdUser] = await User.findOrCreate({
      where: { name: "Test" },
      defaults: {
        name: "Test",
        username: "test123",
        email: "test123@gmail.com",
        password: "Test1234",
      },
    });

    const [history, createdHistory] = await History.findOrCreate({
      where: { customerId: 1 },
      defaults: {
        customerId: 1,
        chargingDate: "2024-07-23",
        startTime: "2024-07-23 10:20:30",
        endTime: "2024-07-23 10:35:40",
        stationName: "汐止智興停車場",
        address: "新北市八里區觀海大道36號",
        cost: 150,
      },
    });

    res.status(200).json({ message: "Database initialized successfully" });
  } catch (error) {
    res.status(500).json({ error: "Database initialization failed" });
  }
}
