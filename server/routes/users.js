// routes/users.js
const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

// הגדרת חיבור ל-MySQL בתוך קובץ זה או ייבוא של חיבור קיים

// נתיב לקבלת כל המשתמשים
router.get('/', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

module.exports = router;
