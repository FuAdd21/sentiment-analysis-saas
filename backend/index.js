const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' })); // Adjust for Vercel URL later

// Initialize SQLite database
const db = new sqlite3.Database('feedback.db', (err) => {
  if (err) console.error('Database error:', err.message);
  else {
    // Create feedback table if it doesn't exist
    db.run(`
      CREATE TABLE IF NOT EXISTS feedback (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        feedback TEXT,
        source TEXT,
        timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
        sentiment TEXT
      )
    `);
    console.log('Database connected and table created');
  }
});

// API endpoint to save feedback
app.post('/api/feedback', (req, res) => {
  const { feedback, source } = req.body;
  if (!feedback || !source) {
    return res.status(400).json({ error: 'Feedback and source are required' });
  }
  db.run(
    'INSERT INTO feedback (feedback, source) VALUES (?, ?)',
    [feedback, source],
    function (err) {
      if (err) {
        res.status(500).json({ error: 'Failed to save feedback' });
      } else {
        res.status(201).json({ id: this.lastID, message: 'Feedback saved' });
      }
    }
  );
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Close database connection on process exit
process.on('SIGINT', () => {
  db.close((err) => {
    if (err) console.error('Error closing database:', err.message);
    console.log('Database connection closed');
    process.exit(0);
  });
});