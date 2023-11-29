import React, { useState } from 'react';
import ButtonFilled from "../../../components/ButtonFilled";
import { Modal, Sheet } from '@mui/joy';
import WorkoutDetails from "./WorkoutDetails";
import WorkoutExerciseCard from "./WorkoutExerciseCard";
import Container from "../../../components/Container";
import { Stack, Typography } from '@mui/material';
import BasicConfirmationModal from '../../../components/Modals/BasicConfirmationModal';

const WorkoutTab = () => {
    const [open, setOpen] = useState(false);
    const [tempWorkout, setTempWorkout] = useState(null);

    const startNewWorkout = () => {
        setTempWorkout({
            id: Date.now(),
            date: new Date(),
            exercises: []
        });
        setOpen(true);
    };

    const finishWorkoutOnClick = () => {
        const userLoggedIn = localStorage.getItem("userLoggedIn");
        const workoutData = JSON.parse(localStorage.getItem("workoutData") || "{}");

        const userWorkouts = workoutData[userLoggedIn] || [];
        userWorkouts.push(tempWorkout);

        workoutData[userLoggedIn] = userWorkouts;
        localStorage.setItem("workoutData", JSON.stringify(workoutData));

        setTempWorkout(null);
        setOpen(false);
    };

    const handleClose = (event, reason) => {
        if (reason !== 'backdropClick') {
            setOpen(false);
        }
    }

    // Render exercises cards
    const showExercises = tempWorkout?.exercises.map(exercise => (
        <WorkoutExerciseCard key={exercise.id} exercise={exercise} />
    ));

    return (
        <>
            <ButtonFilled
                style={"background-green"}
                text={"Start a New Workout"}
                onClick={startNewWorkout} />
            <Modal
                open={open}
                onClose={handleClose}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <Sheet variant="outlined" className="full-page-modal-container">
                    <WorkoutDetails
                        workout={tempWorkout}
                        onUpdate={setTempWorkout}
                        onClose={handleClose}
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
