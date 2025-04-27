const express = require('express');
const router = express.Router();
const db = require('../db');
// عملية قراءة للبحث عن موضوع
router.get("/topics", (req, res) => {
    const keyword = req.query.keyword || '';
    const sql = "SELECT * FROM topics WHERE topic_name LIKE ?";
    db.query(sql, [`%${keyword}%`], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json(results);
    });
});

module.exports = router;