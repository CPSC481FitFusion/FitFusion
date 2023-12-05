import { Modal, Sheet } from "@mui/joy";
import { Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import ButtonFilled from "../../../components/ButtonFilled";
import Container from "../../../components/Container";
import BasicConfirmationModal from "../../../components/modals/basicConfirmationModal";
import { getCurrentUsername } from "../../../utils/userUtils";
import AddExerciseModal from "./AddExerciseModal";
import WorkoutDetails from "./WorkoutDetails";
import WorkoutExerciseCard from "./WorkoutExerciseCard";
import { WorkoutHistory } from "./WorkoutHistory";
import ErrorSnackbar from "../../../components/ErrorSnackbar";

const WorkoutTab = () => {
    const [open, setOpen] = useState(false);
    const [detailsModalOpen, setDetailsModalOpen] = useState(false);
    const [tempWorkout, setTempWorkout] = useState(null);
    const [addExerciseMode, setAddExerciseMode] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false); // State for showing the invalid login info snackbar
    const [snackbarMessage, setSnackbarMessage] = useState(false);

    const handleSnackbarClose = () => {
        // Handle Close for inalid login error snackbar
        setSnackbarOpen(false);
    };

    const handleDetailsModalClose = () => {
        setDetailsModalOpen(false); // This will close only the WorkoutDetails modal
        setOpen(true); // Keep base modal open.
    };

    const startNewWorkout = () => {
        setTempWorkout({
            id: Date.now(),
            date: new Date(),
            exercises: [],
        });
        setDetailsModalOpen(true); // Open the WorkoutDetails modal
        setOpen(true); // Open the WorkoutTab modal
    };

    const finishWorkoutOnClick = () => {
        console.log("Trying to finish.")
        if (tempWorkout.exercises.length === 0) {
            // Inform the user that no exercises are tracked
            setSnackbarOpen(true);
            setSnackbarMessage("No exercises tracked. Please add exercises before finishing the workout.");
            return;
        }
        // const userLoggedIn = getCurrentUsername();
        // const workoutData = JSON.parse(localStorage.getItem("workoutData") || "{}");
        // const userWorkouts = workoutData[userLoggedIn] || [];
        // userWorkouts.push(tempWorkout);
        // workoutData[userLoggedIn] = userWorkouts;
        // localStorage.setItem("workoutData", JSON.stringify(workoutData));
        setTempWorkout(null);
        setOpen(false);
        handleSnackbarClose();
    };

    const handleClose = (event, reason) => {
        if (reason && reason == "backdropClick") return;
        setOpen(false);
    };

    const handleAddExercise = (newExercise) => {
        setTempWorkout({
            ...tempWorkout,
            exercises: [...tempWorkout.exercises, newExercise],
        });
        setAddExerciseMode(false);
    };

    // Update exercise
    const onUpdateExercise = (updatedExercise) => {
        const updatedExercises = tempWorkout.exercises.map((exercise) =>
            exercise.id === updatedExercise.id ? updatedExercise : exercise
        );
        setTempWorkout({ ...tempWorkout, exercises: updatedExercises });
    };

    // Add new set to exercise
    const onAddSet = (exerciseId, newSet) => {
        const updatedExercises = tempWorkout.exercises.map((exercise) => {
            if (exercise.id === exerciseId) {
                return { ...exercise, sets: [...exercise.sets, newSet] };
            }
            return exercise;
        });
        setTempWorkout({ ...tempWorkout, exercises: updatedExercises });
    };

    // Handling removal of exercise
    const handleRemoveExercise = (exerciseId) => {
        const updatedExercises = tempWorkout.exercises.filter(
            (exercise) => exercise.id !== exerciseId
        );
        setTempWorkout({ ...tempWorkout, exercises: updatedExercises });
    };

    // Handle removal of sets
    const handleRemoveSet = (exerciseId, setId) => {
        const updatedExercises = tempWorkout.exercises.map((exercise) => {
            if (exercise.id === exerciseId) {
                const updatedSets = exercise.sets.filter((set) => set.id !== setId);
                return { ...exercise, sets: updatedSets };
            }
            return exercise;
        });
        setTempWorkout({ ...tempWorkout, exercises: updatedExercises });
    };

    // Handle Set Edit
    const handleEditSet = (exerciseId, editedSet) => {
        const updatedExercises = tempWorkout.exercises.map((exercise) => {
            if (exercise.id === exerciseId) {
                const updatedSets = exercise.sets.map((set) =>
                    set.id === editedSet.id ? editedSet : set
                );
                return { ...exercise, sets: updatedSets };
            }
            return exercise;
        });
        setTempWorkout({ ...tempWorkout, exercises: updatedExercises });
    };

    // Render exercises cards
    const showExercises = tempWorkout?.exercises.map((exercise) => (
        <WorkoutExerciseCard
            key={exercise.id}
            exercise={exercise}
            onUpdateExercise={onUpdateExercise}
            onAddSet={onAddSet}
            onRemoveExercise={handleRemoveExercise}
            onRemoveSet={handleRemoveSet}
            onEditSet={handleEditSet}
        />
    ));

    return (
        <>
            <> {/* Workout Add Exercise */}
                <ButtonFilled
                    style={"background-green"}
                    text={"Start a Workout"}
                    onClick={startNewWorkout}
                />
                <Modal
                    className={"overflow-auto"}
                    open={open}
                    onClose={handleClose}
                    sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                >
                    <Sheet variant="outlined" className="full-page-modal-container">
                        <WorkoutDetails
                            workout={tempWorkout}
                            onUpdate={setTempWorkout}
                            onClose={handleDetailsModalClose} // Passing the function as prop
                            isOpen={detailsModalOpen}
                        />
                        <Container
                            style={"background-purple-light d-flex align-items-start"}
                            children={
                                <>
                                    <Typography className="header-20 pb-2">Exercises</Typography>
                                    {showExercises}
                                    <ButtonFilled
                                        style={"background-purple"}
                                        text={"Add Exercise"}
                                        onClick={() => setAddExerciseMode(true)}
                                    />
                                </>
                            }
                        />
                        <Stack spacing={20} direction="row" className="horizontal-stack">
                            <BasicConfirmationModal
                                buttonStyle={"background-orange"}
                                openModalButtonLabel={"Cancel"}
                                modalHeader={"Cancel Workout"}
                                modalBody={
                                    "Are you sure you want to cancel your workout? All current progress will be lost."
                                }
                                modalConfirmationButtonLabel={"Cancel Workout"}
                                actionOnClick={() => setOpen(false)}
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
                {/* Modal for adding a new exercise */}
                <AddExerciseModal
                    isOpen={addExerciseMode}
                    onClose={() => setAddExerciseMode(false)}
                    onAddExercise={handleAddExercise}
                />
                {/* On invalid empty attempt */}
                <ErrorSnackbar
                    isOpen={snackbarOpen}
                    snackbarMessage={snackbarMessage}
                    onClose={handleSnackbarClose}
                />
            </>
            <> {/* Workout History*/}
                <WorkoutHistory />
            </>
        </>
    );
};

export default WorkoutTab;
