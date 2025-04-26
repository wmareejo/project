// إنشاء حساب مستخدم جديد (Register)
function registerUser(userData) {
    fetch("http://localhost:9000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    })
      .then(res => res.json())
      .then(data => console.log("Register Response:", data))
      .catch(err => console.error("Register Error:", err));
  }
  
  // تسجيل دخول (Login)
  function loginUser(credentials) {
    fetch("http://localhost:9000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    })
      .then(res => res.json())
      .then(data => {
        console.log("Login Response:", data);
        if (data.token) {
          localStorage.setItem("token", data.token);
        }
      })
      .catch(err => console.error("Login Error:", err));
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
  
  // عرض جميع المواضيع
  function fetchAllTopics() {
    fetch("http://localhost:9000/api/lists/topics")
      .then(res => res.json())
      .then(data => console.log("All Topics:", data))
      .catch(err => console.error("Fetch Topics Error:", err));
  }
  
  function fetchTopicById(id) {
    fetch(`http://localhost:9000/api/lists/topics/${id}`)
      .then(res => res.json())
      .then(topic => {
        console.log("Single Topic:", topic);
        document.getElementById("topic-title").textContent = topic.title;
        document.getElementById("topic-content").textContent = topic.content;
      })
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