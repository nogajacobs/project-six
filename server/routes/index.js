// index.js
const express = require('express');
const app = express();
const userRoutes = require('./routes/users');

app.use('/users', userRoutes);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

// נתיב ליצירת משתמש חדש
app.post('/users', (req, res) => {
    const { username, email } = req.body;
    db.query('INSERT INTO users (username, email) VALUES (?, ?)', [username, email], (err, results) => {
      if (err) {
        throw err;
      }
      res.status(201).json({ id: results.insertId, username, email });
    });
  });
  
  // נתיב לעדכון משתמש לפי ID
  app.put('/users/:id', (req, res) => {
    const userId = req.params.id;
    const { username, email } = req.body;
    db.query('UPDATE users SET username = ?, email = ? WHERE id = ?', [username, email, userId], (err, results) => {
      if (err) {
        throw err;
      }
      res.json({ id: userId, username, email });
    });
  });
  
  // נתיב למחיקת משתמש לפי ID
  app.delete('/users/:id', (req, res) => {
    const userId = req.params.id;
    db.query('DELETE FROM users WHERE id = ?', [userId], (err, results) => {
      if (err) {
        throw err;
      }
      res.json({ message: 'User deleted successfully' });
    });
  });
  