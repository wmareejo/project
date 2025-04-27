// Password validation function
function validatePassword(password) {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  return passwordRegex.test(password);
}

// Open the modal
function openModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "flex"; // Ensure the modal is displayed as flex
  modal.style.transform = 'none'; // Reset transform to center it again
}

// Switch to Login Form
function switchToLogin() {
  document.getElementById("signup-form").style.display = "none";
  document.getElementById("login-form").style.display = "block";
}

// Switch to Sign Up Form
function switchToSignUp() {
  document.getElementById("login-form").style.display = "none";
  document.getElementById("signup-form").style.display = "block";
}

// Close the modal
function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Register new user (Create Account)
function registerUser(userData) {
  return fetch("http://localhost:9000/api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)
  })
    .then(res => res.json())
    .then(data => {
      console.log("Register Response:", data);
      if (data.success) {
        alert("User registered successfully!");
      } else {
        throw new Error("Registration failed");
      }
    })
    .catch(err => {
      console.error("Register Error:", err);
      throw err;
    });
}

function signup() {
  const username = document.getElementById("signup-username").value;
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;
  
  if (!validatePassword(password)) {
    alert("Password must contain at least 8 characters, including uppercase, lowercase, numbers, and symbols.");
    return; 
  }
  
  const userData = { username, email, password };
  
  registerUser(userData)
    .then((result) => {
      // After successful sign-up
      localStorage.setItem("user", JSON.stringify(result.user));  // Save user data in localStorage

      // Close the modal after successful registration
      closeModal();
      // Log the user in after successful registration
      login(email, password);
    })
    .catch(() => {
      alert("Registration failed. Please try again.");
    });
}

// Login functionality
function login(identifier, password) {
  // Validate that both fields are filled
  if (!identifier || !password) {
    alert("Both fields are required!");
    return;
  }

  console.log("Login Request Data:", { identifier, password });

  fetch("http://localhost:9000/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ identifier, password })
  })
  .then(res => res.json())
  .then(data => {
    console.log("Login Response:", data);
    if (data.message === "Login successful!") {
      alert("Login successful!");
      localStorage.setItem("user", JSON.stringify(data.user));
      window.location.href = "user.html"; // Redirect to user profile page
    } else {
      alert("Login failed: " + data.message);
    }
  })
  .catch(err => {
    console.error("Login Error:", err);
    alert("Login failed.");
  });
}
// Handle Enter Key Press for form submission
const signupForm = document.getElementById("signup-form");
if (signupForm) {
  signupForm.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      signup();  // Trigger signup function when Enter is pressed
    }
  });
}

const loginForm = document.getElementById("login-form");
if (loginForm) {
  loginForm.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      login();  // Trigger login function when Enter is pressed
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const isLoggedIn = localStorage.getItem('loggedIn');

  const loginSignupButtons = document.getElementById('login-signup-buttons');
  const logoutButton = document.getElementById('logout-button');

  if (loginSignupButtons && logoutButton) {   // ✅ SAFETY CHECK
    if (isLoggedIn) {
      loginSignupButtons.style.display = 'none';
      logoutButton.style.display = 'block';
    } else {
      loginSignupButtons.style.display = 'block';  // 🔥 this won't crash now
      logoutButton.style.display = 'none';
    }
  } else {
    console.warn("Login/Signup buttons not found in HTML.");
  }
});

// Fetch User Info (Get)
function getUser(id) {
  fetch(`http://localhost:9000/api/auth/user/${id}`, {
    headers: {
      "Authorization": "Bearer " + localStorage.getItem("token")
    }
  })
    .then(res => res.json())
    .then(data => console.log("User Data:", data))
    .catch(err => console.error("Get User Error:", err));
}

// Update User Info (Put)
function updateUser(id, updatedData) {
  fetch(`http://localhost:9000/api/auth/user/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + localStorage.getItem("token")
    },
    body: JSON.stringify(updatedData)
  })
    .then(res => res.json())
    .then(data => console.log("Update Response:", data))
    .catch(err => console.error("Update Error:", err));
}

// Delete User (Delete)
function deleteUser(id) {
  fetch(`http://localhost:9000/api/auth/user/${id}`, {
    method: "DELETE",
    headers: {
      "Authorization": "Bearer " + localStorage.getItem("token")
    }
  })
    .then(res => res.json())
    .then(data => console.log("Delete Response:", data))
    .catch(err => console.error("Delete Error:", err));
}

function fetchUserInfo() {
  const userId = localStorage.getItem("userId");
  return getUser(userId)
    .then(data => {
      document.getElementById("user-name").textContent = data.name;
      document.getElementById("user-email").textContent = data.email;
      // populate bookmarks
      const bmList = document.getElementById("bookmark-list");
      bmList.innerHTML = data.bookmarks
        .map(item => `<li>${item.title}</li>`)
        .join("");
      // populate quiz scores
      const qzList = document.getElementById("quiz-list");
      qzList.innerHTML = data.scores
        .map(s => `<li>${s.quizName}: ${s.score}</li>`)
        .join("");
      return data;
    });
}

function updateUserInfo(updatedData) {
  const userId = localStorage.getItem("userId");
  return updateUser(userId, updatedData);
}

// Expose to the page
window.fetchUserInfo = fetchUserInfo;
window.updateUserInfo = updateUserInfo;

// Fetch all Topics
function fetchAllTopics() {
  fetch("http://localhost:9000/api/lists/topics")
    .then(res => {
      if (!res.ok) {
        throw new Error('Failed to fetch topics');
      }
      return res.json();
    })
    .then(data => console.log("All Topics:", data))
    .catch(err => console.error("Fetch Topics Error:", err));
}

// Fetch Topic by ID
function fetchTopicById(topicId) {
  fetch(`http://localhost:9000/api/lists/topics/${topicId}`)
    .then(res => res.json())
    .then(data => {
      // Populate the topic details on the page
      document.getElementById("topic-title").textContent = data.topic_name;
      document.getElementById("topic-content").textContent = data.content;
    })
    .catch(err => console.error("Fetch Topic by ID Error:", err));
}


// Add Bookmark
function addBookmark(bookmarkData) {
  fetch("http://localhost:9000/api/bookmarks/bookmarks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + localStorage.getItem("token")
    },
    body: JSON.stringify(bookmarkData)
  })
    .then(res => res.json())
    .then(data => console.log("Bookmark Added:", data))
    .catch(err => console.error("Add Bookmark Error:", err));
}

// Fetch Bookmarks
function fetchBookmarks(userId) {
  fetch(`http://localhost:9000/api/bookmarks/bookmarks/${userId}`, {
    headers: {
      "Authorization": "Bearer " + localStorage.getItem("token")
    }
  })
    .then(res => res.json())
    .then(data => console.log("Bookmarks:", data))
    .catch(err => console.error("Fetch Bookmarks Error:", err));
}

// Delete Bookmark
function deleteBookmark(bookmarkId) {
  fetch("http://localhost:9000/api/bookmarks/bookmarks", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + localStorage.getItem("token")
    },
    body: JSON.stringify({ id: bookmarkId })
  })
    .then(res => res.json())
    .then(data => console.log("Bookmark Deleted:", data))
    .catch(err => console.error("Delete Bookmark Error:", err));
}

// Save Quiz Result
function saveQuizResult(resultData) {
  fetch("http://localhost:9000/api/quizzes/quizzes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + localStorage.getItem("token")
    },
    body: JSON.stringify(resultData)
  })
    .then(res => res.json())
    .then(data => console.log("Quiz Result Saved:", data))
    .catch(err => console.error("Save Quiz Result Error:", err));
}

// Fetch Quiz Result
function fetchQuizResult(userId) {
  fetch(`http://localhost:9000/api/quizzes/quizzes/${userId}`, {
    headers: {
      "Authorization": "Bearer " + localStorage.getItem("token")
    }
  })
    .then(res => res.json())
    .then(data => console.log("Quiz Results:", data))
    .catch(err => console.error("Fetch Quiz Result Error:", err));
}

// Delete Quiz Result
function deleteQuizResult(userId) {
  fetch(`http://localhost:9000/api/quizzes/quizzes/${userId}`, {
    method: "DELETE",
    headers: {
      "Authorization": "Bearer " + localStorage.getItem("token")
    }
  })
    .then(res => res.json())
    .then(data => console.log("Quiz Result Deleted:", data))
    .catch(err => console.error("Delete Quiz Result Error:", err));
}
// Search Topics by keyword
function searchTopics(keyword) {
  console.log("Searching for:", keyword);

  fetch(`http://localhost:9000/api/search/topics?keyword=${encodeURIComponent(keyword)}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Search failed with status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log("Search Results:", data);
      displaySearchResults(data);
    })
    .catch(error => {
      console.error("Error during search:", error);
    });
}

// Display search results
function displaySearchResults(results) {
  const searchResultsContainer = document.getElementById('search-results');
  searchResultsContainer.innerHTML = ''; // Clear previous results

 // Assuming results is an array of topic objects
if (Array.isArray(results)) {
 // Assuming `results` is the array of topics
results.forEach(topic => {
  const topicItem = document.createElement('a');
  topicItem.className = 'topic';
  topicItem.textContent = topic.topic_name;
  
  // Link to the topic page (topic.html) with topicId as a query parameter
  topicItem.href = `topic.html?topicId=${topic.id}`;
  
  // Append the topic link to the search results container
  searchResultsContainer.appendChild(topicItem);
});
} }