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
// إنشاء حساب مستخدم جديد (Register)
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
    .then(() => {
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

// تسجيل دخول (Login)
function login(identifier, password) {
  fetch("http://localhost:9000/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ identifier, password })
  })
    .then(res => res.json())
    .then(data => {
      if (data.message === "Login successful!") {
        alert("Login successful!");
        localStorage.setItem("user", JSON.stringify(data.user)); // Save user data to localStorage
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
document.getElementById("signup-form").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    signup();  // Trigger signup function when Enter is pressed
  }
});

document.getElementById("login-form").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    login();  // Trigger login function when Enter is pressed
  }
});

document.addEventListener('DOMContentLoaded', () => {
    // Check if a user is logged in (for example, using localStorage)
    const isLoggedIn = localStorage.getItem('loggedIn');

    const loginSignupButtons = document.getElementById('login-signup-buttons');
    const logoutButton = document.getElementById('logout-button');

    if (isLoggedIn) {
        // Show "Logout" button and hide "Login/Sign Up" buttons
        loginSignupButtons.style.display = 'none'; // Hide login/signup
        logoutButton.style.display = 'block'; // Show logout
    } else {
        // Show "Login/Sign Up" buttons and hide "Logout" button
        loginSignupButtons.style.display = 'block'; // Show login/signup
        logoutButton.style.display = 'none'; // Hide logout
    }
});

// Logout functionality
const logoutButton = document.getElementById('logout-button');
if (logoutButton) {
    logoutButton.addEventListener('click', () => {
        // Remove login data from localStorage
        localStorage.removeItem('loggedIn');
        // Redirect to homepage or login page
        window.location.href = '/';  // or wherever you want to redirect
    });
}

// عرض بيانات حساب المستخدم (Get User Info)
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

// تحديث حساب المستخدم (Update)
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

// حذف حساب المستخدم (Delete)
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
      document.getElementById("user-name").textContent  = data.name;
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

// expose to the page
window.fetchUserInfo  = fetchUserInfo;
window.updateUserInfo = updateUserInfo;


// عرض جميع المواضيع
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

// عرض موضوع معين
function fetchTopicById(topicId) {
  fetch(`http://localhost:9000/api/lists/topics/${topicId}`)
    .then(res => res.json())
    .then(data => console.log("Topic by ID:", data))
    .catch(err => console.error("Fetch Topic by ID Error:", err));
}

// إضافة علامة مرجعية
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

// عرض العلامات المرجعية
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

// حذف علامة مرجعية
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

// حفظ نتائج الكويز
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

// عرض نتائج الكويز
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

// حذف نتائج الكويز
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

// البحث عن المواضيع
function searchTopics(keyword) {
  fetch(`http://localhost:9000/api/search/topics/search/${keyword}`)
    .then(res => res.json())
    .then(data => console.log(`Search Results for "${keyword}":`, data))
    .catch(err => console.error("Search Topics Error:", err));
}