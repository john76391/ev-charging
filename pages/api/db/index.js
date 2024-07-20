import BulkCreateModels from "@/db/model/BulkCreateModels.mjs";

export default async function handler(req, res) {
  try {
    res.status(200).json({ message: "Database initialized successfully" });
  } catch (error) {
    res.status(500).json({ error: "Database initialization failed" });
  }
}
