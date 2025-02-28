const express = require('express');
const router = express.Router();

// حفظ موضوع في العلامات المرجعية
router.post('/:id/bookmark', (req, res) => {
    console.log(`Bookmarking topic with ID: ${req.params.id}`);  // رسالة للسجل عند حفظ الموضوع في العلامات المرجعية
    res.send(`Topic with ID ${req.params.id} bookmarked successfully!`);
});

// حذف موضوع من العلامات المرجعية
router.delete('/:id/bookmark', (req, res) => {
    console.log(`Removing topic with ID: ${req.params.id} from bookmarks`);  // رسالة للسجل عند حذف الموضوع من العلامات المرجعية
    res.send(`Topic with ID ${req.params.id} removed from bookmarks successfully!`);
});

// عرض المواضيع المحفوظة في العلامات المرجعية
router.get('/bookmarks', (req, res) => {
    console.log(`Fetching all bookmarked topics`);  // رسالة للسجل عند طلب المواضيع المحفوظة في العلامات المرجعية
    res.send(`All bookmarked topics retrieved successfully!`);
});

// مشاركة المواضيع
router.post('/:id/share', (req, res) => {
    const { recipient } = req.body;
    console.log(`Sharing topic with ID: ${req.params.id} with recipient: ${recipient}`);  // رسالة للسجل عند مشاركة الموضوع
    res.send(`Topic with ID ${req.params.id} shared successfully with ${recipient}!`);
});

module.exports = router;