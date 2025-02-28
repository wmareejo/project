const express = require('express');
const router = express.Router();

// البحث عن القوائم
router.get('/search/lists', (req, res) => {
    const { query } = req.query;  // الحصول على نص البحث من الـ query string
    res.send(`Searching for lists with query: ${query}`);
});

// البحث عن المواضيع
router.get('/search/topics', (req, res) => {
    const { query } = req.query;  // الحصول على نص البحث من الـ query string
    res.send(`Searching for topics with query: ${query}`);
});

// البحث عن الاختبارات
router.get('/search/quizzes', (req, res) => {
    const { query } = req.query;  // الحصول على نص البحث من الـ query string
    res.send(`Searching for quizzes with query: ${query}`);
});

module.exports = router;