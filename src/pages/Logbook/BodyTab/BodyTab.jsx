import ButtonFilled from "../../../components/ButtonFilled";
import { Modal, Sheet, Typography } from '@mui/joy';
import React, { useState } from 'react';
import { Stack } from '@mui/material';
import BasicConfirmationModal from "../../../components/Modals/BasicConfirmationModal";
import BodyDetails from "./BodyDetails";
import BodyCompositionCard from "./BodyCompositionCard";
import Container from "../../../components/Container";

const BodyTab = () => {    
    const [open, setOpen] = useState(false);
    const [detailsModalOpen, setDetailsModalOpen] = useState(false);
    const [tempBodyComposition, setTempBodyComposition] = useState(null);

    const codedBodyComposition = {
        date: new Date(),
        weight: 170,
        waistCircumference: 123,
        hipCircumference: 123,
        armCircumference: 12,
        thighCircumference: 32,
    }

    const startNewBodyComposition = () => {
        setTempBodyComposition({
          id: Date.now(),
          date: new Date(),
        });
        setDetailsModalOpen(true); // Open the BodyCompositionDetails modal
        setOpen(true); // Open the BodyCompositionTab modal
    };

    const finishBodyCompositionOnClick = () => {
        setTempBodyComposition(null);
        setOpen(false);
    };

    // User body composition
    let userBodyComposition = []
    const handleClose = (event, reason) => {
        if (reason && reason == "backdropClick") return;
        setOpen(false);
    };

    // Get logged in user's body composition from local storage
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const loggedInUser = localStorage.getItem("userLoggedIn");

    // Check through each user object to find match
    users.forEach(user => {
    });

    return (
        <>
            <ButtonFilled 
            style={"background-green"} 
            text={"Start a Body Composition"} 
            onClick={startNewBodyComposition} />
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
                        body={tempBodyComposition}
                        onUpdate={setTempBodyComposition}
                        onClose={() => setDetailsModalOpen(false)}
                        isOpen={detailsModalOpen} />
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
            <div
                style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "20px",
                }}
            >
                <BodyCompositionCard
                    body={codedBodyComposition}/>
            </div>
        </>
    );
};

export default BodyTab;