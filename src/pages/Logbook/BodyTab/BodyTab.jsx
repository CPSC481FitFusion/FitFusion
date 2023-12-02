import ButtonFilled from "../../../components/ButtonFilled";
import { Modal, Sheet, Typography } from '@mui/joy';
import React, { useState } from 'react';
import { Stack } from '@mui/material';
import BasicConfirmationModal from "../../../components/Modals/BasicConfirmationModal";
import BodyDetails from "./BodyDetails";
import Container from "../../../components/Container";

const BodyTab = () => {
    const [open, setOpen] = useState(false);
    const [bodyComposition, setBodyComposition] = useState();

    // User body composition
    let userBodyComposition = []
    const handleClose = (event, reason) => {
        if (reason !== 'backdropClick') {
            setOpen(false);
        }
    }

    const finishBodyCompositionOnClick = () => {
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

    /* const showBodyComposition =
        newBodyComposition.length === 0 ?
            <></> :
            newBodyComposition.map((exercise) =>
                <>
                    <BodyCompositionCard
                        exerciseName={exercise.name}
                    />
                </>
            );*/

    return (
        <>
            <ButtonFilled style={"background-green"} text={"Start a Body Composition"} onClick={() => setOpen(true)} />
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
                    <BodyDetails
                        onRemove={() => setOpen(false)} />
                    <Stack spacing={20} direction="row" className="horizontal-stack" >
                        <BasicConfirmationModal
                            buttonStyle={"background-orange"}
                            openModalButtonLabel={"Cancel"}
                            modalHeader={"Cancel Body Composition"}
                            modalBody={"Are you sure you want to cancel your body composition log?"}
                            modalConfirmationButtonLabel={"Cancel Body Composition"}
                            actionOnClick={() =>
                                setOpen(false)}
                        />
                        <BasicConfirmationModal
                            buttonStyle={"background-green"}
                            openModalButtonLabel={"Finish"}
                            modalHeader={"Finish Body Composition"}
                            modalBody={"Are you sure you want to finish your body composiiton log?"}
                            modalConfirmationButtonLabel={"Finish Body Composition"}
                            actionOnClick={finishBodyCompositionOnClick}
                        />
                    </Stack>
                </Sheet>
            </Modal>
        </>
    );
};

export default BodyTab;