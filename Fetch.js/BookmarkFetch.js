// السماح للمستخدم بإضافة علامة مرجعية
const addBookmark = async (userId, topicId) => {
    try {
        const response = await fetch('/api/bookmarks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId, topicId }),
        });

        const result = await response.json();

        if (response.ok) {
            console.log(result.message); // Success
            return result;
        } else {
            console.error(result.message); // Error message from backend
            return null;
        }
    } catch (error) {
        console.error('Error:', error);
    }
};

// السماح للمستخدم بإسترجاع جميع العلامات مرجعية
const getBookmarks = async (userId) => {
    try {
        const response = await fetch(`/api/bookmarks/${userId}`, {
            method: 'GET',
        });

        const result = await response.json();

        if (response.ok) {
            console.log('Bookmarked topics:', result); // Success, log the bookmarked topics
            return result;
        } else {
            console.error(result.message); // Error, no bookmarks found
            return null;
        }
    } catch (error) {
        console.error('Error:', error);
    }
};

// حذف موضوع من العلامة المرجعية
const removeBookmark = async (userId, topicId) => {
    try {
        const response = await fetch('/api/bookmarks', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId, topicId }),
        });

        const result = await response.json();

        if (response.ok) {
            console.log(result.message); // Success
            return result;
        } else {
            console.error(result.message); // Error message from backend
            return null;
        }
    } catch (error) {
        console.error('Error:', error);
    }
};