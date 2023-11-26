// Adds default user accounts to local storage
const PopulateUsers = () => {
    // Get key value to reference
    var users = JSON.parse(localStorage.getItem("users") || "[]");

    // Modifying
    var user =
        [
            {
                username: "johndoe",
                password: "johndoepassword",
                workouts: [{
                    name: "Quick Upper Body",
                    date: "November 1, 2023",
                    startTime: "3:15 PM",
                    endTime: "4:15 PM",
                    notes: "Today is such a great day for a workout! Feeling great and strong!",
                    exercises: [
                        {
                            name: "Hammer Curl (Dumbbell)",
                            sets: [
                                {
                                    set: "1",
                                    reps: "10",
                                    weight: "10 lbs",
                                }, {
                                    set: "2",
                                    reps: "8",
                                    weight: "10 lbs",
                                }, {
                                    set: "3",
                                    reps: "10",
                                    weight: "10 lbs",
                                }]
                        }, {
                            name: "Lateral Pulldown (Cable)",
                            sets: [
                                {
                                    set: "1",
                                    reps: "8",
                                    weight: "55 lbs",
                                }, {
                                    set: "2",
                                    reps: "8",
                                    weight: "55 lbs",
                                }]
                        }
                    ]
                }, {
                    name: "Leg Day",
                    date: "November 4, 2023",
                    startTime: "6:15 AM",
                    endTime: "7:45 AM",
                    notes: "Feeling a little sick.",
                    exercises: [
                        {
                            name: "Squat (Barbell)",
                            sets: [
                                {
                                    set: "1",
                                    reps: "8",
                                    weight: "45 lbs",
                                }, {
                                    set: "2",
                                    reps: "8",
                                    weight: "135 lbs",
                                }, {
                                    set: "3",
                                    reps: "6",
                                    weight: "155 lbs",
                                }]
                        }, {
                            name: "Sumo Squat (Dumbbell)",
                            sets: [
                                {
                                    set: "1",
                                    reps: "8",
                                    weight: "55 lbs",
                                }, {
                                    set: "2",
                                    reps: "8",
                                    weight: "60 lbs",
                                }, {
                                    set: "2",
                                    reps: "8",
                                    weight: "65 lbs",
                                }]
                        }
                    ]
                }],
                goals: [{}],
                bodyCompositions: [{}],
                settings: [{
                    defaultWeightMetric: "lb(s)",
                    defaultMeasurementMetric: "inch(es)",
                    defaultLogbookTab: "1"
                }]
            },
            {
                username: "janedoe",
                password: "JaneDoePassword",
                workouts: [{
                    name: "Pull Day",
                    date: "November 22, 2023",
                    startTime: "1:00 PM",
                    endTime: "2:00 PM",
                    notes: "",
                    exercises: [
                        {
                            name: "Bicep Curl",
                            sets: [
                                {
                                    set: "1",
                                    reps: "8",
                                    weight: "5 kgs",
                                }, {
                                    set: "2",
                                    reps: "8",
                                    weight: "5 kgs",
                                }, {
                                    set: "3",
                                    reps: "8",
                                    weight: "5 kgs",
                                }]
                        }, {
                            name: "Pull Ups",
                            sets: [
                                {
                                    set: "1",
                                    reps: "8",
                                    weight: "0 kgs",
                                }, {
                                    set: "2",
                                    reps: "8",
                                    weight: "0 kgs",
                                }, {
                                    set: "3",
                                    reps: "8",
                                    weight: "0 kgs",
                                }]
                        }, {
                            name: "Hammer Curls",
                            sets: [
                                {
                                    set: "1",
                                    reps: "8",
                                    weight: "8 kgs",
                                }, {
                                    set: "2",
                                    reps: "8",
                                    weight: "10 kgs",
                                }, {
                                    set: "3",
                                    reps: "8",
                                    weight: "12 kgs",
                                }]
                        }
                    ]
                }, {
                    name: "Push Day",
                    date: "November 22, 2023",
                    startTime: "8:15 PM",
                    endTime: "9:45 PM",
                    notes: "",
                    exercises: [
                        {
                            name: "Bench Press (Barbell)",
                            sets: [
                                {
                                    set: "1",
                                    reps: "8",
                                    weight: "20 kgs",
                                }, {
                                    set: "2",
                                    reps: "8",
                                    weight: "50 kgs",
                                }, {
                                    set: "3",
                                    reps: "6",
                                    weight: "55 kgs",
                                }]
                        }, {
                            name: "Face Pull (Cable)",
                            sets: [
                                {
                                    set: "1",
                                    reps: "8",
                                    weight: "5 kgs",
                                }, {
                                    set: "2",
                                    reps: "8",
                                    weight: "7.5 kgs",
                                }, {
                                    set: "2",
                                    reps: "8",
                                    weight: "10 kgs",
                                }]
                        }
                    ]
                }],
                goals: [{}],
                bodyCompositions: [{}],
                settings: [{
                    defaultWeightMetric: "kg(s)",
                    defaultMeasurementMetric: "cm(es)",
                    defaultLogbookTab: "3"
                }]
            }
        ];
    // Adding to end of local users object
    user.forEach(element => {
        users.push(element);
    });

    // Saving
    localStorage.setItem("users", JSON.stringify(users));
}

const SeededData = () => {
    PopulateUsers();
}

export default SeededData