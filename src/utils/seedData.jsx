// Adds default user accounts to local storage
const populateUsers = () => {
  // Get key value to reference
  var userDataLocalStorage = JSON.parse(
    localStorage.getItem("userData") || "[]"
  );

  // Modifying
  var userData = [
    {
      username: "johndoe",
      password: "johndoepassword",
      settings: [
        {
          defaultWeightMetric: "lb(s)",
          defaultMeasurementMetric: "inch(es)",
          defaultLogbookTab: "1",
        },
      ],
    },
    {
      username: "bodybuilder",
      password: "bodypassword",
      settings: [
        {
          defaultWeightMetric: "kg(s)",
          defaultMeasurementMetric: "cm(es)",
          defaultLogbookTab: "2",
        },
      ],
    },
    {
      username: "janedoe",
      password: "JaneDoePassword",
      settings: [
        {
          defaultWeightMetric: "kg(s)",
          defaultMeasurementMetric: "cm(es)",
          defaultLogbookTab: "3",
        },
      ],
    },
  ];
  // Adding to end of local users object
  userData.forEach((element) => {
    userDataLocalStorage.push(element);
  });

  // Saving
  localStorage.setItem("userData", JSON.stringify(userDataLocalStorage));
};

// Adds default workouts to users accounts to local storage
const populateWorkouts = () => {
  // Get key value to reference
  var workoutDataLocalStorage = JSON.parse(
    localStorage.getItem("workoutData") || "[]"
  );

  // Modifying
  var workoutData = {
    johndoe: [
      {
        id: 1,
        name: "Quick Upper Body",
        date: "11/01/2023",
        startTime: "3:15 PM",
        endTime: "4:15 PM",
        notes:
          "Today is such a great day for a workout! Feeling great and strong!",
        exercises: [
          {
            id: 1,
            name: "Hammer Curl (Dumbbell)",
            sets: [
              {
                set: "1",
                reps: "10",
                weight: "10 lb(s)",
              },
              {
                set: "2",
                reps: "8",
                weight: "10 lb(s)",
              },
              {
                set: "3",
                reps: "10",
                weight: "10 lb(s)",
              },
            ],
          },
          {
            id: 2,
            name: "Lateral Pulldown (Cable)",
            sets: [
              {
                set: "1",
                reps: "8",
                weight: "55 lb(s)",
              },
              {
                set: "2",
                reps: "8",
                weight: "55 lb(s)",
              },
            ],
          },
        ],
      },
      {
        id: 2,
        name: "Leg Day",
        date: "11/04/2023",
        startTime: "6:15 AM",
        endTime: "7:45 AM",
        notes: "Feeling a little sick.",
        exercises: [
          {
            id: 1,
            name: "Squat (Barbell)",
            sets: [
              {
                set: "1",
                reps: "8",
                weight: "45 lb(s)",
              },
              {
                set: "2",
                reps: "8",
                weight: "135 lb(s)",
              },
              {
                set: "3",
                reps: "6",
                weight: "155 lb(s)",
              },
            ],
          },
          {
            id: 2,
            name: "Sumo Squat (Dumbbell)",
            sets: [
              {
                set: "1",
                reps: "8",
                weight: "55 lb(s)",
              },
              {
                set: "2",
                reps: "8",
                weight: "60 lb(s)",
              },
              {
                set: "2",
                reps: "8",
                weight: "65 lb(s)",
              },
            ],
          },
        ],
      },
    ],
    janedoe: [
      {
        id: 1,
        name: "Pull Day",
        date: "11/22/2023",
        startTime: "1:00 PM",
        endTime: "2:00 PM",
        notes: "",
        exercises: [
          {
            id: 1,
            name: "Bicep Curl",
            sets: [
              {
                set: "1",
                reps: "8",
                weight: "5 kg(s)",
              },
              {
                set: "2",
                reps: "8",
                weight: "5 kg(s)",
              },
              {
                set: "3",
                reps: "8",
                weight: "5 kg(s)",
              },
            ],
          },
          {
            id: 2,
            name: "Pull Ups",
            sets: [
              {
                set: "1",
                reps: "8",
                weight: "0 kg(s)",
              },
              {
                set: "2",
                reps: "8",
                weight: "0 kg(s)",
              },
              {
                set: "3",
                reps: "8",
                weight: "0 kg(s)",
              },
            ],
          },
          {
            id: 3,
            name: "Hammer Curls",
            sets: [
              {
                set: "1",
                reps: "8",
                weight: "8 kg(s)",
              },
              {
                set: "2",
                reps: "8",
                weight: "10 kg(s)",
              },
              {
                set: "3",
                reps: "8",
                weight: "12 kg(s)",
              },
            ],
          },
        ],
      },
      {
        id: 2,
        name: "Push Day",
        date: "11/22/2023",
        startTime: "8:15 PM",
        endTime: "9:45 PM",
        notes: "",
        exercises: [
          {
            id: 1,
            name: "Bench Press (Barbell)",
            sets: [
              {
                set: "1",
                reps: "8",
                weight: "20 kg(s)",
              },
              {
                set: "2",
                reps: "8",
                weight: "50 kg(s)",
              },
              {
                set: "3",
                reps: "6",
                weight: "55 kg(s)",
              },
            ],
          },
          {
            id: 2,
            name: "Face Pull (Cable)",
            sets: [
              {
                set: "1",
                reps: "8",
                weight: "5 kg(s)",
              },
              {
                set: "2",
                reps: "8",
                weight: "7.5 kg(s)",
              },
              {
                set: "2",
                reps: "8",
                weight: "10 kg(s)",
              },
            ],
          },
        ],
      },
    ],
  };
  // Adding to end of local users object
  workoutDataLocalStorage.push(workoutData);

  // Saving
  localStorage.setItem("workoutData", JSON.stringify(workoutDataLocalStorage));
};

const SeededData = () => {
  localStorage.clear();
  populateUsers();
  populateWorkouts();
};

export default SeededData;
