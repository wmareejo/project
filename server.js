console.log("Starting the server...");

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

// استيراد نقاط التوجيه
const authRoutes = require('./routes/authRoutes');
const listsRoutes = require('./routes/listsRoutes');
const quizRoutes = require('./routes/quizRoutes');
const bookmarkRoutes = require('./routes/bookmarkRoutes');
const searchRoutes = require('./routes/searchRoutes');

// استخدام نقاط التوجيه
app.use('/api/auth', authRoutes);
app.use('/api/lists', listsRoutes);
app.use('/api/quizzes', quizRoutes);
app.use('/api/bookmarks', bookmarkRoutes);
app.use('/api/search', searchRoutes);

app.get('/', (req, res) => {
    res.send('Server is running successfully!');
});
// تشغيل السيرفر
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});