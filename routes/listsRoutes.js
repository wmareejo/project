// عملية قراءة لاسترجاع جميع المواضيع من قاعدة البيانات 
router.get("/topics", (req, res) => { 
    const sql = "SELECT * FROM topics"; 
    db.query(sql, (err, results) => { 
        if (err) return res.status(500).json({ error: err.message }); 
        res.status(200).json(results); 
    }); 
}); 