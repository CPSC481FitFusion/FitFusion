import ButtonFilled from "../../../components/ButtonFilled";
import { Modal, ModalClose, Typography, Sheet } from '@mui/joy';
import React from 'react';
import { Stack, Box, Button } from '@mui/material';
import EditModal from "../../../components/Modals/EditModal";
import TextInputWithLabel from "../../../components/TextInputWithLabel";
import TextareaInputWithLabel from "../../../components/TextareaInputWithLabel";
import FlatContainer from "../../../components/FlatContainer";
import BasicConfirmationModal from "../../../components/Modals/BasicConfirmationModal";
import { Edit } from "@mui/icons-material";
import WorkoutDetails from "./WorkoutDetails";

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
                            openModalButtonLabel={"Save"}
                            modalHeader={"Finish Workout"}
                            modalBody={"Are you sure you want to finish your workout?"}
                            modalConfirmationButtonLabel={"Finish Workout"}
                            actionOnClick={() => setOpen(false)}
                        />
                    </Stack>
                    <WorkoutDetails />
                    <FlatContainer
                        style={"background-purple-light"}
                        children={
                            <>
                                This is a container
                                {/* Edit Workout Details */}
                                <EditModal
                                    isIcon={true}
                                    modalHeader="Edit Workout Details"
                                    modalBody={(
                                        <Stack className="input-container text-start w-100">
                                            <TextInputWithLabel
                                                label={"Workout Name"}
                                                placeholder={"Click to enter Workout Name"}
                                            />
                                            <TextInputWithLabel
                                                label={"Date (MMMM DD, YYYY)"}
                                                placeholder={"Click to enter Date"}
                                            />
                                            <TextInputWithLabel
                                                label={"Start Time (##:## AM or ##:## PM)"}
                                                placeholder={"Click to enter Start Time"}
                                            />
                                            <TextareaInputWithLabel
                                                label={"Notes"}
                                                placeholder={"Click to enter Notes"}
                                            />
                                        </Stack>
                                    )}
                                />
                            </>
                        }
                    />
                    <ButtonFilled
                        style={"background-purple"}
                        text={"Add Exercise"}
                    />
                </Sheet>
            </Modal>
        </>
    );
};

export default WorkoutTab;