const express = require('express');
const router = express.Router();

// تسجيل مستخدم جديد
router.post('/register', (req, res) => {
    console.log(`User registration requested`);  // رسالة للسجل عند طلب تسجيل مستخدم جديد
    res.send(`User registered successfully!`);
});

// تسجيل الدخول
router.post('/login', (req, res) => {
    console.log(`User login requested`);  // رسالة للسجل عند طلب تسجيل الدخول
    res.send(`User logged in successfully!`);
});

// تسجيل الخروج
router.post('/logout', (req, res) => {
    console.log(`User logout requested`);  // رسالة للسجل عند طلب تسجيل الخروج
    res.send(`User logged out successfully!`);
});

// تغيير كلمة المرور
router.post('/change-password', (req, res) => {
    console.log(`Password change requested`);  // رسالة للسجل عند طلب تغيير كلمة المرور
    res.send(`Password changed successfully!`);
});

module.exports = router;