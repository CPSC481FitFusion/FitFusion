// Retrieve workouts from localStorage
export const getWorkouts = (username) => {
    const allData = JSON.parse(localStorage.getItem('workoutData')) || {};
    return allData[username] || [];
  };
  
  // Save workouts to localStorage
  export const saveWorkouts = (username, workouts) => {
    const allData = JSON.parse(localStorage.getItem('workoutData')) || {};
    allData[username] = workouts;
    localStorage.setItem('workoutData', JSON.stringify(allData));
  };