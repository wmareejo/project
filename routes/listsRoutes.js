const express = require('express');
const router = express.Router();

// عرض جميع القوائم
router.get('/', (req, res) => {
    console.log(`Fetching all lists`);  // رسالة للسجل عند طلب عرض جميع القوائم
    res.send(`All lists retrieved successfully!`);
});

// عرض جميع المواضيع
router.get('/topics', (req, res) => {
    console.log(`Fetching all topics`);  // رسالة للسجل عند طلب عرض جميع المواضيع
    res.send(`All topics retrieved successfully!`);
});

// عرض موضوع محدد
router.get('/topics/:id', (req, res) => {
    console.log(`Fetching topic with ID: ${req.params.id}`);  // رسالة للسجل عند طلب موضوع معين
    res.send(`Topic with ID ${req.params.id} retrieved successfully!`);
});

// عرض مواضيع تحت قائمة محددة
router.get('/:listId/topics', (req, res) => {
    console.log(`Fetching topics under list ID: ${req.params.listId}`);  // رسالة للسجل عند طلب مواضيع تحت قائمة محددة
    res.send(`Topics under list ID ${req.params.listId} retrieved successfully!`);
});

module.exports = router;