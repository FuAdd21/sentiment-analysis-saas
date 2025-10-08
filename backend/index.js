import express from "express";
import sqlite3 from "sqlite3";
import { open } from "sqlite";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Connect to SQLite database (ephemeral on Vercel)
let db;

(async () => {
  db = await open({
    filename: "./backend/feedback.db",
    driver: sqlite3.Database,
  });

  await db.exec(`CREATE TABLE IF NOT EXISTS feedback (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    message TEXT,
    sentiment TEXT
  )`);
})();

// Routes
app.post("/api/feedback", async (req, res) => {
  const { message, sentiment } = req.body;
  await db.run("INSERT INTO feedback (message, sentiment) VALUES (?, ?)", [
    message,
    sentiment,
  ]);
  res.json({ success: true });
});

app.get("/api/feedback", async (req, res) => {
  const rows = await db.all("SELECT * FROM feedback");
  res.json(rows);
});

// Export as Vercel serverless handler
export default app;
