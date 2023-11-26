import ButtonFilled from "../../../components/ButtonFilled";
import { Modal, ModalClose, Typography, Sheet } from '@mui/joy';
import React from 'react';
import { Stack } from '@mui/material';
import BasicConfirmationModal from "../../../components/Modals/BasicConfirmationModal";
import WorkoutDetails from "./WorkoutDetails";
import WorkoutExerciseCard from "./WorkoutExerciseCard";
import Container from "../../../components/Container";
import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

const WorkoutTab = () => {
    const [open, setOpen] = React.useState(false);
    const handleClose = (event, reason) => {
        if (reason !== 'backdropClick') {
            setOpen(false);
        }
    }
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
                    <WorkoutDetails />
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
            <div
               style={{margin: '5%'}}>

        <Card sx={{ maxWidth: 600 }}>
            <CardContent>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant='h3' gutterBottom>
                   Arm Day
                </Typography>
                <IconButton > <CloseIcon /> </IconButton>
                </div>
                <Typography variant="h4" component="div">
                Oct 24, 2023
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Hammer Curls (Dumbbell)
                </Typography>
                <Typography variant="body1">
                3 Sets  5 reps 10lbs 
                <br />
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Lateral Pulldown Cable
                </Typography>
                <Typography variant="body1">
                2 Sets  8 reps 55-70lbs 
                <br />
                </Typography>
            </CardContent>
        </Card>

        <p></p>
        <Card sx={{ maxWidth: 600 }}>
            <CardContent>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant='h3' gutterBottom>
                   Leg Day
                </Typography>
                <IconButton > <CloseIcon /> </IconButton>
                </div>
                <Typography variant="h4" component="div">
                Oct 23, 2023
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Leg Curls
                </Typography>
                <Typography variant="body1">
                3 Sets  8-10 reps 100lbs 
                <br />
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Leg Press 
                </Typography>
                <Typography variant="body1">
                2 Sets  8 reps 200lbs 
                <br />
                </Typography>
            </CardContent>
        </Card>


            </div>

        </>
    );
};

export default WorkoutTab;