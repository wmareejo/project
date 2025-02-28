const express = require('express');
const router = express.Router();

// عرض جميع الاختبارات
router.get('/', (req, res) => {
    console.log(`Fetching all quizzes`);  // إضافة رسالة للسجل عند طلب عرض جميع الاختبارات
    res.send(`All quizzes retrieved successfully!`);
});

// عرض كويز محدد
router.get('/:id', (req, res) => {
    console.log(`Fetching quiz with ID: ${req.params.id}`);  // إضافة رسالة للسجل عند طلب كويز محدد
    res.send(`Quiz with ID ${req.params.id} retrieved successfully!`);
});

// عرض اسئلة الكويز
router.get('/:id/questions', (req, res) => {
    console.log(`Fetching questions for quiz with ID: ${req.params.id}`);  // إضافة رسالة للسجل عند طلب أسئلة الكويز
    res.send(`Questions for quiz with ID ${req.params.id} retrieved successfully!`);
});

// تسليم الاختبار وعرض الدرجة
router.post('/:id/submit', (req, res) => {
    const { score } = req.body;
    console.log(`Submitting quiz with ID: ${req.params.id}. Score: ${score}`);  // إضافة رسالة للسجل عند تسليم الاختبار
    res.send(`Quiz with ID ${req.params.id} submitted successfully! Your score is: ${score}`);
});

module.exports = router;