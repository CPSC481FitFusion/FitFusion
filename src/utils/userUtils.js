// Retrieve userData from localStorage
export const getUserData = () => {
  return JSON.parse(localStorage.getItem("userData")) || [];
};

// Get currently logged-in user's username
export const getCurrentUsername = () => {
  return localStorage.getItem("userLoggedIn");
};

// Returns true if user data provided matches a user
export const isRealUser = (username, password) => {
  const userData = getUserData();

  // Find a user with matching username and password
  const user = userData.find(
    (user) => user.username === username && user.password === password
  );

  // Return true if user is found, false otherwise
  return user !== undefined;
};

// Add or Update a user in userData
export const addUserOrUpdate = (newUserData) => {
  let userData = getUserData();

  const userIndex = userData.findIndex(
    (user) => user.username === newUserData.username
  );
  if (userIndex !== -1) {
    // Update existing user
    userData[userIndex] = newUserData;
  } else {
    // Add new user
    userData.push(newUserData);
  }

  localStorage.setItem("userData", JSON.stringify(userData));
};

// Get data for the currently logged-in user
export const getLoggedInUserData = () => {
  const userData = getUserData();
  const loggedInUsername = getCurrentUsername();

  // Find the user data for the logged-in user
  const loggedInUser = userData.find(
    (user) => user.username === loggedInUsername
  );

  return loggedInUser || null; // Return the user data if found, or null if not
};

// Function to get the defaultLogbookTab value for the logged-in user
export const getDefaultLogbookTab = () => {
  const loggedInUser = getLoggedInUserData();
  if (
    loggedInUser &&
    loggedInUser.settings &&
    loggedInUser.settings.length > 0
  ) {
    return loggedInUser.settings[0].defaultLogbookTab;
  }
  return null; // Return null if the value is not found
};

// Adds or updates a user's settings in localStorage
export const updateUserSettings = (username, updatedSettings) => {
  const users = JSON.parse(localStorage.getItem("userData")) || [];

  // Find the user by username
  const userIndex = users.findIndex((user) => user.username === username);
  if (userIndex !== -1) {
    // Update the user's settings
    users[userIndex] = {
      ...users[userIndex],
      ...updatedSettings,
    };

    // Save the updated users array back to localStorage
    localStorage.setItem("userData", JSON.stringify(users));
  }
};
