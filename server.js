console.log("Starting the server...");

const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./db');
const PORT = process.env.PORT || 9000;
app.use(cors());
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
app.listen(9000, () => {
    console.log('Server is running! Visit: http://localhost:9000');
  });  