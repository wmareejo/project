const express = require("express");
const bcrypt = require("bcrypt");
const db = require("../db");
const router = express.Router();

//دالة للتحقق من صحة كلمة المرور
function validatePassword(password) {
    // يجب أن تتراوح كلمة المرور بين 8-20 حرفًا وأن تحتوي على حرف صغير وحرف كبير، ورمز خاص
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,20}$/;
    return regex.test(password);
}

// تسجيل مستخدم جديد
router.post("/register", async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({ message: "All fields are required." });
    }
    if (!validatePassword(password)) {
        return res.status(400).json({
            message: "Password must be between 8-20 characters, and include at least one uppercase letter, one lowercase letter, and one special character."
        });
    }
    // التحقق مما إذا كان اسم المستخدم والبريد موجودين مسبقا
    const checkQuery = "SELECT * FROM users WHERE username = ? OR email = ?";
    db.query(checkQuery, [username, email], async (err, results) => {
        if (err) return res.status(500).json({ error: err.message });

        if (results.length > 0) {
            return res.status(400).json({ message: "Username or email already exists." });
        }

        // تجزئة كلمة المرور
        const hashedPassword = await bcrypt.hash(password, 10);
        const sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
        db.query(sql, [username, email, hashedPassword], (err, result) => {
            if (err) return res.status(500).json({ error: err.message });

            res.status(201).json({ message: "User registered successfully!" });
        });
    });
});

// تسجيل دخول المستخدم
router.post("/login", async (req, res) => {
    const { identifier, password } = req.body;
    if (!identifier || !password) {
        return res.status(400).json({ message: "All fields are required." });
    }
    const sql = "SELECT * FROM users WHERE username = ? OR email = ?"; 
    db.query(sql, [identifier, identifier], async (err, results) => { 
        if (err) return res.status(500).json({ error: err.message });

        if (results.length === 0) {
            return res.status(401).json({ message: "Invalid credentials." });
        }

        const user = results[0];
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials." });
        }
        res.status(200).json({
            message: "Login successful!",
            user: { id: user.id, username: user.username, email: user.email },
        });
    });
});

// الحصول على معلومات حساب المستخدم
router.get("/user/:id", (req, res) => {
    const sql = "SELECT id, username, email FROM users WHERE id = ?";
    db.query(sql, [req.params.id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(404).json({ message: "User not found." });

        res.status(200).json(results[0]);
    });
});

// تحديث بيانات المستخدم
router.put("/user/:id", async (req, res) => {
    const { username, email, password } = req.body;
    let sql = "UPDATE users SET username = ?, email = ? WHERE id = ?";
    let params = [username, email, req.params.id];
    if (password) {
        if (!validatePassword(password)) {
            return res.status(400).json({
                message: "Password must be between 8-20 characters, and include at least one uppercase letter, one lowercase letter, and one special character."
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        sql = "UPDATE users SET username = ?, email = ?, password = ? WHERE id = ?";
        params = [username, email, hashedPassword, req.params.id];
    }

    db.query(sql, params, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json({ message: "Profile updated successfully!" });
    });
});

// حذف حساب المستخدم
router.delete("/user/:id", (req, res) => {
    const sql = "DELETE FROM users WHERE id = ?";
    db.query(sql, [req.params.id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json({ message: "Account deleted successfully!" });
    });
});
module.exports = router;