const express = require('express');
const router = express.Router();
const db = require('../db');

// عملية قراءة لاسترجاع جميع المواضيع من قاعدة البيانات 
router.get("/topics", (req, res) => { 
    const sql = "SELECT * FROM topics"; 
    db.query(sql, (err, results) => { 
        if (err) {
console.error('Error fetching topics:', err);
return res.status(500).json({ error: 'Failed to fetch topics' });
}
          res.status(200).json(results); // Send the topics as JSON
        });
      });
      // عملية قراءة لاسترجاع موضوع واحد حسب الـ ID
router.get("/topics/:id", (req, res) => {
    const topicId = req.params.id;
    const sql = "SELECT * FROM topics WHERE id = ?";
    db.query(sql, [topicId], (err, results) => {
        if (err) {
            console.error('Error fetching topic by ID:', err);
            return res.status(500).json({ error: 'Failed to fetch topic' });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: 'Topic not found' });
        }
        res.status(200).json(results[0]); // Send the topic as JSON
    });
});
      module.exports = router;
