import React, { useState } from 'react';
import ButtonFilled from "../../../components/ButtonFilled";
import { Modal, Sheet } from '@mui/joy';
import WorkoutDetails from "./WorkoutDetails";
import WorkoutExerciseCard from "./WorkoutExerciseCard";
import Container from "../../../components/Container";
import { Stack, Typography } from '@mui/material';
import BasicConfirmationModal from '../../../components/Modals/BasicConfirmationModal';
import AddExerciseModal from './AddExerciseModal';

const WorkoutTab = () => {
    const [open, setOpen] = useState(false);
    const [detailsModalOpen, setDetailsModalOpen] = useState(false);
    const [tempWorkout, setTempWorkout] = useState(null);
    const [addExerciseMode, setAddExerciseMode] = useState(false);

    const startNewWorkout = () => {
        setTempWorkout({
            id: Date.now(),
            date: new Date(),
            exercises: [
            ]
        });
        setDetailsModalOpen(true); // Open the WorkoutDetails modal
        setOpen(true); // Open the WorkoutTab modal
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

    const handleClose = (reason) => {
        if (reason !== 'backdropClick') {
            setOpen(false);
        }
    };

    const handleAddExercise = (newExercise) => {
        setTempWorkout({
            ...tempWorkout,
            exercises: [...tempWorkout.exercises, newExercise]
        });
        setAddExerciseMode(false);
    };

    // Update exercise
    const onUpdateExercise = (updatedExercise) => {
        const updatedExercises = tempWorkout.exercises.map(exercise =>
            exercise.id === updatedExercise.id ? updatedExercise : exercise
        );
        setTempWorkout({ ...tempWorkout, exercises: updatedExercises });
    };

    // Add new set to exercise
    const onAddSet = (exerciseId, newSet) => {
        const updatedExercises = tempWorkout.exercises.map(exercise => {
            if (exercise.id === exerciseId) {
                return { ...exercise, sets: [...exercise.sets, newSet] };
            }
            return exercise;
        });
        setTempWorkout({ ...tempWorkout, exercises: updatedExercises });
    };

    // Render exercises cards
    const showExercises = tempWorkout?.exercises.map(exercise => (
        <WorkoutExerciseCard
            key={exercise.id}
            exercise={exercise}
            onUpdateExercise={onUpdateExercise}
            onAddSet={onAddSet}
        />
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
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Sheet variant="outlined" className="full-page-modal-container">
                    <WorkoutDetails
                        workout={tempWorkout}
                        onUpdate={setTempWorkout}
                        onClose={() => setDetailsModalOpen(false)}
                        isOpen={detailsModalOpen} />
                    <Container
                        style={"background-purple-light d-flex align-items-start"}
                        children={
                            <>
                                <Typography className="header-20 pb-2">Exercises</Typography>
                                {showExercises}
                                <ButtonFilled
                                    style={"background-purple"}
                                    text={"Add Exercise"}
                                    onClick={() => setAddExerciseMode(true)} />
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
                                setOpen(false)} />
                        <BasicConfirmationModal
                            buttonStyle={"background-green"}
                            openModalButtonLabel={"Finish"}
                            modalHeader={"Finish Workout"}
                            modalBody={"Are you sure you want to finish your workout?"}
                            modalConfirmationButtonLabel={"Finish Workout"}
                            actionOnClick={finishWorkoutOnClick} />
                    </Stack>
                </Sheet>
            </Modal>
            {/* Modal for adding a new exercise */}
            <AddExerciseModal
                isOpen={addExerciseMode}
                onClose={() => setAddExerciseMode(false)}
                onAddExercise={handleAddExercise} />
        </>
    );
};

export default WorkoutTab;
