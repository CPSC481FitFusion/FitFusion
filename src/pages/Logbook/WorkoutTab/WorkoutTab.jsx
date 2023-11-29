import ButtonFilled from "../../../components/ButtonFilled";
import { Modal, Sheet, Typography } from '@mui/joy';
import React, { useState } from 'react';
import { Stack } from '@mui/material';
import BasicConfirmationModal from "../../../components/Modals/BasicConfirmationModal";
import WorkoutDetails from "./WorkoutDetails";
import WorkoutExerciseCard from "./WorkoutExerciseCard";
import Container from "../../../components/Container";

let newWorkoutExercises = JSON.parse(localStorage.getItem("newWorkoutExercises") || "[]")

// const addExercise = () => {
//     newWorkoutExercises = JSON.parse(localStorage.getItem("newWorkoutExercises") || "[]");
//     // Add blank exercise to end of list
//     newWorkoutExercises.push(Exercise);
//     localStorage.setItem("newWorkoutExercises", JSON.stringify(newWorkoutExercises));
//     console.log("try to add ex");
// }

const WorkoutTab = () => {
    const [open, setOpen] = useState(false);
    const [workout, setWorkout] = useState();
    const [exercises, setExercises] = useState();

    // User workouts
    let userWorkouts = []
    const handleClose = (event, reason) => {
        if (reason !== 'backdropClick') {
            setOpen(false);
        }
    }

    const finishWorkoutOnClick = () => {
        setOpen(false);
    }

    // Get logged in user's workouts from local storage
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const loggedInUser = localStorage.getItem("userLoggedIn");

    // Check through each user object to find match
    users.forEach(user => {
        if (user.username === loggedInUser) {
            userWorkouts = user.workouts;
        }
    });

    const showExercises =
        newWorkoutExercises.length === 0 ?
            <></> :
            newWorkoutExercises.map((exercise) =>
                <>
                    <WorkoutExerciseCard
                        exerciseName={exercise.name}
                    />
                </>
            );

    return (
        <>
            <ButtonFilled style={"background-green"} text={"Start a New Workout"} onClick={() => setOpen(true)} />
            <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={open}
                onClose={handleClose}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <Sheet
                    variant="outlined"
                    className="full-page-modal-container"
                >
                    <WorkoutDetails
                        onRemove={() => setOpen(false)} />
                    <Container
                        style={"background-purple-light d-flex align-items-start"}
                        children={
                            <>
                                <Typography className="header-20 pb-2">Exercises</Typography>
                                {showExercises}
                                <ButtonFilled
                                    style={"background-purple"}
                                    text={"Add Exercise"}
                                    // onClick={addExercise}
                                />
                            </>
                        }
                    />
                    <Stack spacing={20} direction="row" className="horizontal-stack" >
                        <BasicConfirmationModal
                            buttonStyle={"background-orange"}
                            openModalButtonLabel={"Cancel"}
                            modalHeader={"Cancel Workout"}
                            modalBody={"Are you sure you want to cancel your workout?"}
                            modalConfirmationButtonLabel={"Cancel Workout"}
                            actionOnClick={() =>
                                setOpen(false)}
                        />
                        <BasicConfirmationModal
                            buttonStyle={"background-green"}
                            openModalButtonLabel={"Finish"}
                            modalHeader={"Finish Workout"}
                            modalBody={"Are you sure you want to finish your workout?"}
                            modalConfirmationButtonLabel={"Finish Workout"}
                            actionOnClick={finishWorkoutOnClick}
                        />
                    </Stack>
                </Sheet>
            </Modal>
        </>
    );
};

export default WorkoutTab;