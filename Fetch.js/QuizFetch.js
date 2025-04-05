// حفظ نتائج الاختبار للمستخدم
const saveQuizScore = async (userId, quizLevel, score) => {
    try {
        const response = await fetch('/api/quizzes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId, quizLevel, score }),
        });

        const result = await response.json();

        if (response.ok) {
            console.log(result.message);
            return result;
        } else {
            console.error(result.message);
            return `Error saving score: ${result.message}`;
        }
    } catch (error) {
        console.error('Error:', error);
        return `Error saving score: ${error.message}`;
    }
};

// عرض نتائج الاختبار للمستخدم
const getQuizScores = async (userId) => {
    try {
        const response = await fetch(`/api/quizzes/${userId}`, {
            method: 'GET',
        });

        if (response.ok) {
            const results = await response.json();
            console.log('Fetched quiz scores:', results);
            return results;
        } else {
            const errorData = await response.json();
            console.error('Error fetching quiz scores:', errorData.error || errorData.message);
            return `Error fetching quiz scores: ${errorData.error || errorData.message}`;
        }
    } catch (error) {
        console.error('Error:', error);
        return `Error fetching quiz scores: ${error.message}`;
    }
};

// حذف نتائج الاختبار للمستخدم
const deleteQuizScores = async (userId) => {
    try {
        const response = await fetch(`/api/quizzes/${userId}`, {
            method: 'DELETE',
        });

        const result = await response.json();

        if (response.ok) {
            console.log(result.message);
            return result;
        } else {
            console.error(result.message);
            return `Error deleting scores: ${result.message}`;
        }
    } catch (error) {
        console.error('Error:', error);
        return `Error deleting scores: ${error.message}`;
    }
};