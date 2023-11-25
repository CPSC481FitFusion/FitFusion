import ButtonFilled from "../../../components/ButtonFilled";
import { Modal, ModalClose, Typography, Sheet } from '@mui/joy';
import React from 'react';
import { Stack } from '@mui/material';
import BasicConfirmationModal from "../../../components/Modals/BasicConfirmationModal";
import WorkoutDetails from "./WorkoutDetails";
import WorkoutExerciseCard from "./WorkoutExerciseCard";
import Container from "../../../components/Container";

const WorkoutTab = () => {
    const [open, setOpen] = React.useState(false);
    const handleClose = (event, reason) => {
        if (reason !== 'backdropClick') {
            setOpen(false);
        }
    }
    return (
        <>
            <h6 className='general-label'>Start a New Workout</h6>
            <ButtonFilled style={"background-green"} text={"Start"} onClick={() => setOpen(true)} />
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
                    <WorkoutDetails />
                    <Container
                        style={"background-purple-light"}
                        children={
                            <>
                                <WorkoutExerciseCard />
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
                            actionOnClick={() => setOpen(false)}
                        />
                        <BasicConfirmationModal
                            buttonStyle={"background-green"}
                            openModalButtonLabel={"Finish"}
                            modalHeader={"Finish Workout"}
                            modalBody={"Are you sure you want to finish your workout?"}
                            modalConfirmationButtonLabel={"Finish Workout"}
                            actionOnClick={() => setOpen(false)}
                        />
                    </Stack>
                </Sheet>
            </Modal>
        </>
    );
};

export default WorkoutTab;