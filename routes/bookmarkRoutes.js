const express = require("express");
const router = express.Router();
const db = require("../db"); 

// عملية انشاء لاضافة موضوع في العلامة المرجعية
router.post("/bookmarks", (req, res) => {
    const { userId, topicId } = req.body;
    const sql = "INSERT INTO bookmarks (user_id, topic_id) VALUES (?, ?)";
    
    db.query(sql, [userId, topicId], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: "Bookmark added!" });
    });
});

// عملية قراءة لعرض المواضيع المحفوظة في العلامة المرجعية 
router.get("/bookmarks/:userId", (req, res) => {
    const sql = `
        SELECT * FROM topics 
        INNER JOIN bookmarks ON topics.topic_id = bookmarks.topic_id 
        WHERE bookmarks.user_id = ?
    `;
    
    db.query(sql, [req.params.userId], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json(results);
    });
});

// عملية حذف لازالة موضوع من العلامة المرجعية
router.delete("/bookmarks", (req, res) => {
    const { userId, topicId } = req.body;
    const sql = "DELETE FROM bookmarks WHERE user_id = ? AND topic_id = ?";
    
    db.query(sql, [userId, topicId], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json({ message: "Bookmark removed!" });
    });
});

module.exports = router;