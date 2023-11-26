import ButtonFilled from "../../../components/ButtonFilled";
import { Modal, Sheet } from '@mui/joy';
import React, { useState } from 'react';
import { Stack } from '@mui/material';
import BasicConfirmationModal from "../../../components/Modals/BasicConfirmationModal";
import WorkoutDetails from "./WorkoutDetails";
import WorkoutExerciseCard from "./WorkoutExerciseCard";
import Container from "../../../components/Container";

const WorkoutTab = () => {
    const [open, setOpen] = useState(false);

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
                        style={"background-purple-light"}
                        children={
                            <>
                                <WorkoutExerciseCard
                                    exerciseName={"Hammer"}
                                />
                                <ButtonFilled
                                    style={"background-purple"}
                                    text={"Add Exercise"}
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