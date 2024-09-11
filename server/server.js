// server/server.js
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Enable CORS
app.use(cors());

// Parse JSON bodies
app.use(express.json());

// הגדרת החיבור ל-MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'NOGA18emuna',
  database: 'fullstacksix'
});

// חיבור למסד הנתונים
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL');
});

// נתיב לקבלת כל המשתמשים
app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      throw err;
    }
    res.json(results);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
