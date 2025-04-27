// Run when the page is loaded
window.onload = function() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    document.getElementById("user-info").innerHTML = `
      <p>Welcome, ${user.username}!</p>
      <p>Email: ${user.email}</p>
    `;
    fetchUserData(); // Fetch and display additional user data after login
  } else {
    window.location.href = "login.html"; // Redirect to login if no user data is found
  }
}

// Fetch user data from the API and display it
function fetchUserData() {
  const userId = localStorage.getItem('userId');
  const token = localStorage.getItem('token');

  if (!userId || !token) {
    return; // If no user ID or token, don't proceed
  }

  fetch(`http://localhost:9000/api/auth/user/${userId}`, {
    headers: {
      "Authorization": "Bearer " + token
    }
  })
  .then(res => res.json())
  .then(data => {
    console.log('User Data:', data);
    
    // Display User Info
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

// Logout functionality
function logout() {
  localStorage.removeItem("userId");
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  window.location.href = "login.html"; // Redirect to login page after logout
}

// Edit Profile (Functionality can be added as needed)
function editProfile() {
  alert("Edit profile functionality not implemented yet.");
}

// Change Profile Picture (Functionality can be added as needed)
function changePic() {
  alert("Change picture functionality not implemented yet.");
}
