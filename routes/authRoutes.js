// عملية انشاء لاضافة بيانات مستخدم جديد لقاعدة البيانات 
const express = require("express"); 
const bcrypt = require("bcrypt"); 
const db = require("../db"); // ملف اتصال قاعدة البيانات 
 
const router = express.Router(); 
 
// تسجيل مستخدم جديد
router.post("/register", async (req, res) => { 
    const { username, email, password } = req.body; 
 
    if (!username || !email || !password) { 
        return res.status(400).json({ message: "All fields are required." }); 
    } 
 
    const hashedPassword = await bcrypt.hash(password, 10);  
 
    const sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)"; 
    db.query(sql, [username, email, hashedPassword], (err, result) => { 
        if (err) return res.status(500).json({ error: err.message }); 
        res.status(201).json({ message: "User registered successfully!" }); 
    }); 
}); 
 
// عملية قراءة لاسترجاع بيانات المستخدم من قاعدة البيانات 
router.post("/login", async (req, res) => { 
    const { email, password } = req.body; 
 
    if (!email || !password) { 
        return res.status(400).json({ message: "All fields are required." }); 
    } 
 
    const sql = "SELECT * FROM users WHERE email = ?"; 
    db.query(sql, [email], async (err, results) => { 
        if (err) return res.status(500).json({ error: err.message }); 
 
        if (results.length === 0) { 
            return res.status(401).json({ message: "Invalid credentials." }); 
        } 
 
        const user = results[0]; 
        const isMatch = await bcrypt.compare(password, user.password); 
 
        if (!isMatch) { 
            return res.status(401).json({ message: "Invalid credentials." }); 
        } 
 
        res.status(200).json({ message: "Login successful!", user: { id: user.id, username: 
user.name, email: user.email } }); 
    }); 
}); 
 
// الحصول على ملف تعريف المستخدم 
router.get("/user/:id", (req, res) => { 
    const sql = "SELECT id, username, email FROM users WHERE id = ?"; 
    db.query(sql, [req.params.id], (err, results) => { 
        if (err) return res.status(500).json({ error: err.message }); 
        if (results.length === 0) return res.status(404).json({ message: "User not found." }); 
 
        res.status(200).json(results[0]); 
    }); 
});
// عملية لتحديث بيانات المستخدم 
router.put("/user/:id", async (req, res) => { 
    const { username, email, password } = req.body; 
    let sql = "UPDATE users SET username = ?, email = ? WHERE id = ?"; 
    let params = [username, email, req.params.id]; 
 
    if (password) { 
        const hashedPassword = await bcrypt.hash(password, 10); 
        sql = "UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?"; 
        params = [username, email, hashedPassword, req.params.id]; 
    } 
 
    db.query(sql, params, (err, result) => { 
        if (err) return res.status(500).json({ error: err.message }); 
        res.status(200).json({ message: "Profile updated successfully!" }); 
    }); 
}); 
// عملية حذف لازالة حساب المستخدم
router.delete("/user/:id", (req, res) => { 
    const sql = "DELETE FROM users WHERE id = ?"; 
    db.query(sql, [req.params.id], (err, result) => { 
        if (err) return res.status(500).json({ error: err.message }); 
        res.status(200).json({ message: "Account deleted successfully!" }); 
    }); 
}); 
module.exports = router;
