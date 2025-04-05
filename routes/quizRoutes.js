const express = require('express');
const router = express.Router();
const db = require('../db');

// عملية انشاء لحفظ جميع نتائج المستخدمين الجدد 
router.post("/quizzes", (req, res) => { 
    const { userId, quizLevel, score } = req.body; 
    const sql = "INSERT INTO quiz_scores (user_id, quiz_level, score) VALUES (?, ?, ?)"; 
    db.query(sql, [userId, quizLevel, score], (err, result) => { 
        if (err) return res.status(500).json({ error: err.message }); 
        res.status(201).json({ message: "Score saved!" }); 
    }); 
}); 
// عملية قراءة لعرض نتائج المستخدمين السابقة 
 
router.get("/quizzes/:userId", (req, res) => { 
    const sql = "SELECT * FROM quiz_scores WHERE user_id = ?"; 
    db.query(sql, [req.params.userId], (err, results) => { 
        if (err) return res.status(500).json({ error: err.message }); 
        res.status(200).json(results); 
    }); 
}); 
// عملية لحذف نتائج المستخدمين
router.delete("/quizzes/:userId", (req, res) => { 
    const sql = "DELETE FROM quiz_scores WHERE user_id = ?"; 
    db.query(sql, [req.params.userId], (err, result) => { 
        if (err) return res.status(500).json({ error: err.message }); 
        res.status(200).json({ message: "Scores reset!" }); 
    }); 
});
module.exports = router;