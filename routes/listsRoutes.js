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
          res.status(200).json(results);
        });
      });
      // عملية قراءة لاسترجاع موضوع واحد حسب الـ ID
      router.get("/topics/:id", (req, res) => {
        const topicId = req.params.id;
        console.log("🔍 Topic ID:", topicId); // debug
        const sql = "SELECT * FROM topics WHERE topic_id = ?";
        db.query(sql, [topicId], (err, results) => {
            if (err) {
                console.error('❌ SQL Error:', err.message); // log actual error
                return res.status(500).json({ error: 'Failed to fetch topic' });
            }        
            if (results.length === 0) {
                console.log("⚠️ No topic found with that ID.");
                return res.status(404).json({ message: 'Topic not found' });
            }
            console.log("✅ Topic found:", results[0]);
            res.status(200).json(results[0]);
        });
    });    
module.exports = router;