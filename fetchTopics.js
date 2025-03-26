document.addEventListener('DOMContentLoaded', async () => {
    const topicsContainer = document.getElementById('topics-container');
  
    try {
      const response = await fetch('http://localhost:9000/api/topics');
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
  
      const topics = await response.json();
  
      // Check if topics are available
      if (!Array.isArray(topics) || topics.length === 0) {
        topicsContainer.innerHTML = '<p>No topics available.</p>';
        return;
      }
  
      // Organize topics by categories
      const categories = {
        "Programming Languages/Coding": [],
        "Networks": [],
        "DBMS": [],
        "Quizzes": [],
        "Work By": []
      };
  
      // Group topics by category
      topics.forEach(topic => {
        if (categories[topic.category]) {
          categories[topic.category].push(topic);
        }
      });
  
      // Helper to render a category and its topics
      const renderCategory = (categoryName, topics) => {
        if (topics.length > 0) {
          const categoryHTML = `
            <h2 class="category-title">${categoryName}</h2>
            ${topics.map(topic => `<p class="topic-item">${topic.title}</p>`).join('')}
          `;
          topicsContainer.innerHTML += categoryHTML;
        }
      };
  
      // Display topics under each category
      Object.entries(categories).forEach(([category, topics]) => {
        renderCategory(category, topics);
      });
  
    } catch (error) {
      console.error('Failed to fetch topics:', error);
      topicsContainer.innerHTML = '<p>Error loading topics. Please try again later.</p>';
    }
  });  