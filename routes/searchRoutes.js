// عملية قراءة للبحث عن موضوع
router.get("/topics/search/:keyword", (req, res) => { 
    const sql = "SELECT * FROM topics WHERE title LIKE ?"; 
    db.query(sql, [`%${req.params.keyword}%`], (err, results) => { 
        if (err) return res.status(500).json({ error: err.message }); 
        res.status(200).json(results); 
    }); 
}); 