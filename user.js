function fetchUserData() {
    const userId = localStorage.getItem('userId');
    fetch(`http://localhost:9000/api/auth/user/${userId}`, {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log('User Data:', data);
        document.getElementById('user-name').textContent = data.name;
        document.getElementById('user-email').textContent = data.email;
  
        // Profile Picture logic
        const profilePicDiv = document.getElementById('profile-pic');
        if (data.profileImageUrl) {
          profilePicDiv.innerHTML = `<img src="${data.profileImageUrl}" alt="Profile" style="width:100%; height:100%; border-radius: 50%;">`;
        } else {
          profilePicDiv.textContent = '👤'; // Default profile emoji if no picture
        }
  
        // Display Bookmarks
        const bookmarkList = document.getElementById('bookmark-list');
        bookmarkList.innerHTML = '';
        data.bookmarks.forEach(item => {
          const li = document.createElement('li');
          li.textContent = item.topicTitle;
          bookmarkList.appendChild(li);
        });
  
        // Display Quiz Results
        const quizList = document.getElementById('quiz-list');
        quizList.innerHTML = '';
        data.quizResults.forEach(score => {
          const li = document.createElement('li');
          li.textContent = `Quiz: ${score.quizName} - Score: ${score.marks}/10`;
          quizList.appendChild(li);
        });
      })
      .catch(err => console.error('Error fetching user data:', err));
  }
    document.addEventListener('DOMContentLoaded', fetchUserData);  