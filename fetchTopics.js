document.querySelectorAll('.category').forEach(category => {
    category.addEventListener('click', function() {
        const categoryName = this.getAttribute('data-category');
        fetchTopics(categoryName);
    });
});
function fetchTopics(category) {
    const topics = {
        programming: [
            "Introduction to programming",
            "What is Write once, run anywhere? Learn JAVA!",
            "Why is Python so popular?",
            "Learn PHP",
            "What is C#"
        ],
        networks: [
            "Introduction to Networks",
            "What are the Types of networks?",
            "Learn topologies in a simple way",
            "OSI & TCP/IP",
            "Internet protocols and their importance"
        ],
        dbms: [
            "Introduction to DBMS, What is a database?",
            "What is SDLC?",
            "The difference between SQL and NoSQL",
            "Simple guide to the ER Model"
        ],
        quizzes: [
            "Quiz Level 1 (7 questions)",
            "Quiz Level 2 (10 questions)"
        ]
    };

    const topicsList = document.getElementById('topics-list');
    topicsList.innerHTML = '';  // Clear previous topics list

    if (topics[category]) {
        topics[category].forEach(topic => {
            const topicElement = document.createElement('div');
            topicElement.classList.add('topic');
            topicElement.innerHTML = `<a href="/topic/${topic}">${topic}</a>`;
            topicsList.appendChild(topicElement);
        });
    } else {
        topicsList.innerHTML = 'No topics found for this category.';
    }
}