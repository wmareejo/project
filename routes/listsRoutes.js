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
      
      module.exports = router;