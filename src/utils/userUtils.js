// Retrieve userData from localStorage
export const getUserData = () => {
    return JSON.parse(localStorage.getItem('userData')) || [];
};

// Returns true if user data provided matches a user
export const isRealUser = (username, password) => {
    const userData = getUserData();
    
    // Find a user with matching username and password
    const user = userData.find(user => user.username === username && user.password === password);
    
    // Return true if user is found, false otherwise
    return user !== undefined;
};

// Add or Update a user in userData
export const addUserOrUpdate = (newUserData) => {
    let userData = getUserData();

    const userIndex = userData.findIndex(user => user.username === newUserData.username);
    if (userIndex !== -1) {
        // Update existing user
        userData[userIndex] = newUserData;
    } else {
        // Add new user
        userData.push(newUserData);
    }

    localStorage.setItem('userData', JSON.stringify(userData));
};