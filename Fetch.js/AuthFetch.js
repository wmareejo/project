// السماح للمستخدم بتسجيل حساب جديد
const registerUser = async (userData) => {
    try {
        const response = await fetch('/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            const error = await response.json();
            console.error(error.message); // Error message from backend
            return { error: error.message };
        }

        const result = await response.json();
        console.log(result.message); // Success
        return result;
    } catch (error) {
        console.error('Error:', error);
        return { error: error.message }; // Return a more structured error
    }
};

// السماح للمستخدم بتسجيل الدخول
const loginUser = async (credentials) => {
    try {
        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials),
        });

        if (!response.ok) {
            const error = await response.json();
            console.error(error.message); // Invalid credentials error
            return { error: error.message };
        }

        const result = await response.json();
        console.log(result.message); // Success
        return result.user; // Return user data
    } catch (error) {
        console.error('Error:', error);
        return { error: error.message }; // Return error message if fetch fails
    }
};

// السماح للمستخدم بعرض الملف الشخصي
const getUserProfile = async (userId) => {
    try {
        const response = await fetch(`/api/auth/user/${userId}`, { method: 'GET' });

        if (!response.ok) {
            const error = await response.json();
            console.error(error.message); // Error, user not found
            return { error: error.message };
        }

        const result = await response.json();
        console.log('User profile:', result); // Success
        return result;
    } catch (error) {
        console.error('Error:', error);
        return { error: error.message }; // Return error message if fetch fails
    }
};

// تحديث حساب المستخدم
const updateUserProfile = async (userId, updatedData) => {
    try {
        const response = await fetch(`/api/auth/user/${userId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedData),
        });

        if (!response.ok) {
            const error = await response.json();
            console.error(error.message); // Error updating profile
            return { error: error.message };
        }

        const result = await response.json();
        console.log(result.message); // Success
        return result;
    } catch (error) {
        console.error('Error:', error);
        return { error: error.message }; // Return error message if fetch fails
    }
};

// حذف حساب المستخدم
const deleteUserAccount = async (userId) => {
    try {
        const response = await fetch(`/api/auth/user/${userId}`, { method: 'DELETE' });

        if (!response.ok) {
            const error = await response.json();
            console.error(error.message); // Error deleting account
            return { error: error.message };
        }

        const result = await response.json();
        console.log(result.message); // Success
        return result;
    } catch (error) {
        console.error('Error:', error);
        return { error: error.message }; // Return error message if fetch fails
    }
};