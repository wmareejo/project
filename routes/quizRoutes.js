const express = require('express');
const router = express.Router();
const db = require('../db');

// عملية انشاء لحفظ جميع نتائج المستخدمين الجدد 
router.post("/quizzes", (req, res) => { 
    const { userId, quizid, score } = req.body; 

    const sql = "INSERT INTO user_scores (user_id, quiz_id, score) VALUES (?, ?, ?)"; 
    
    db.query(sql, [userId, quizid, score], (err, result) => { 
        if (err) return res.status(500).json({ error: err.message }); 
        res.status(201).json({ message: "Score saved!" }); 
    }); 
}); 
// عملية قراءة لعرض نتائج المستخدمين السابقة 
 
router.get("/quizzes/:userId", (req, res) => { 
    const sql = "SELECT * FROM user_scores WHERE user_id = ?"; 
    db.query(sql, [req.params.userId], (err, results) => { 
        if (err) return res.status(500).json({ error: err.message }); 
        res.status(200).json(results); 
    }); 
}); 
// عملية لحذف نتائج المستخدمين
router.delete("/quizzes/:userId", (req, res) => { 
    const sql = "DELETE FROM user_scores WHERE user_id = ?"; 
    db.query(sql, [req.params.userId], (err, result) => { 
        if (err) return res.status(500).json({ error: err.message }); 
        res.status(200).json({ message: "Scores reset!" }); 
    }); 
});

// for Quiz Level 1
router.get('/level1', (req, res) => {
    const sql = "SELECT * FROM questions WHERE quiz_id = 1";
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json(results);
    });
});

// for Quiz Level 2
router.get('/level2', (req, res) => {
    const sql = "SELECT * FROM questions WHERE quiz_id = 2";
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json(results);
    });
});



module.exports = router;