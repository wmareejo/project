// البحث عن موضوع باستخدام كلمة مفتاحية
const searchTopics = async (keyword) => {
    try {
        const response = await fetch(`/api/topics/search/${keyword}`, {
            method: 'GET',
        });

        if (response.ok) {
            const topics = await response.json();
            console.log('Found topics:', topics);
            return topics;
        } else {
            const errorData = await response.json();
            console.error('Error fetching topics:', errorData.error || errorData.message);
            return `Error fetching topics: ${errorData.error || errorData.message}`;
        }
    } catch (error) {
        console.error('Error:', error);
        return `Error fetching topics: ${error.message}`;
    }
};