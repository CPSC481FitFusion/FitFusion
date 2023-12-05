import { Modal, Sheet } from '@mui/joy';
import { Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import ButtonFilled from "../../../components/ButtonFilled";
import BasicConfirmationModal from '../../../components/modals/basicConfirmationModal';
import { getCurrentUsername } from '../../../utils/userUtils';
import BodyCompositionCard from "./BodyCompositionCard";
import BodyDetails from "./BodyDetails";
import Container from "../../../components/Container";

const BodyTab = () => {
    const [open, setOpen] = useState(false);
    const [detailsModalOpen, setDetailsModalOpen] = useState(false);
    const [tempBodyComposition, setTempBodyComposition] = useState(null);

    // Hardcoded body composition data
    const [hardcodedData, setHardcodedData] = useState({
        "johndoe": [
            { id: 1, date: new Date('2023-01-01'), weight: 180, waistCircumference: 32, hipCircumference: 38, armCircumference: 12, thighCircumference: 20 },
            // ... more data for johndoe
        ],
        "bodybuilder": [
            { id: 2, date: new Date('2023-02-01'), weight: 200, waistCircumference: 34, hipCircumference: 40, armCircumference: 14, thighCircumference: 22 },
            // ... more data for bodybuilder
        ],
        // ... data for other users
    });

    const startNewBodyComposition = () => {
        setTempBodyComposition({
            id: Date.now(),
            date: new Date(),
            weight: '',
            waistCircumference: '',
            hipCircumference: '',
            armCircumference: '',
            thighCircumference: '',
        });
        setDetailsModalOpen(true);
        setOpen(true);
    };

    const finishBodyCompositionOnClick = () => {
        if (tempBodyComposition && tempBodyComposition.weight) {
            const username = getCurrentUsername();
            const updatedData = { ...hardcodedData };
            updatedData[username] = [...(updatedData[username] || []), tempBodyComposition];
            setHardcodedData(updatedData);
        }
        setTempBodyComposition(null);
        setOpen(false);
        setDetailsModalOpen(false);
    };

    const handleClose = () => {
        setOpen(false);
        setDetailsModalOpen(false);
    };

    const user = getCurrentUsername();
    const userBodyComposition = hardcodedData[user] || [];

    return (
        <>
            <ButtonFilled
                style={"background-green"}
                text={"Start a Body Composition"}
                onClick={startNewBodyComposition} />
            <Modal
                open={open}
                onClose={handleClose}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <Sheet variant="outlined" className="full-page-modal-container">
                    <BodyDetails
                        body={tempBodyComposition}
                        onUpdate={setTempBodyComposition}
                        onClose={handleClose}
                        isOpen={detailsModalOpen} />
                    <Stack spacing={2} direction="row" className="horizontal-stack" >
                        <BasicConfirmationModal
                            buttonStyle={"background-orange"}
                            openModalButtonLabel={"Cancel"}
                            modalHeader={"Cancel Body Composition"}
                            modalBody={"Are you sure you want to cancel your body composition log?"}
                            modalConfirmationButtonLabel={"Cancel Body Composition"}
                            actionOnClick={handleClose}
                        />
                        <BasicConfirmationModal
                            buttonStyle={"background-green"}
                            openModalButtonLabel={"Finish"}
                            modalHeader={"Finish Body Composition"}
                            modalBody={"Are you sure you want to finish your body composition log?"}
                            modalConfirmationButtonLabel={"Finish Body Composition"}
                            actionOnClick={finishBodyCompositionOnClick}
                        />
                    </Stack>
                </Sheet>
            </Modal>
            <Stack spacing={1} className='my-2'>
                <Typography className='general-label'>Body Composition History</Typography>
                {userBodyComposition.length > 0 ? (
                    userBodyComposition.map(composition => (
                        <BodyCompositionCard key={composition.id} body={composition} />
                    ))
                ) : (
                    <Container style={"background-purple-light p-3 mb-5"} children={
                        <Typography>No body composition data tracked.</Typography>
                    } />
                )}
            </Stack>
        </>
    );
};

export default BodyTab;
