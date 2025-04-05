// عرض جميع المواضيع المتاحة في قاعدة البيانات
const getAllTopics = async () => {
    try {
        const response = await fetch('/api/lists', {
            method: 'GET',
        });

        if (response.ok) {
            const topics = await response.json();
            console.log('Fetched topics:', topics); 
            return topics;
        } else {
            const errorData = await response.json();
            console.error('Error fetching topics:', errorData.error || errorData.message);
            return 'Error fetching topics: ' + (errorData.error || errorData.message);
        }
    } catch (error) {
        console.error('Error:', error);
        return 'Error fetching topics: Network or other issue';
    }
};