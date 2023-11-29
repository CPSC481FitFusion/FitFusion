import React, { useState } from 'react';
import { Modal, TextField, Button, Box, Stack, Snackbar, Alert, Typography, Grid } from '@mui/material';
import TextInputWithLabel from '../../../components/TextInputWithLabel';
import { Sheet } from '@mui/joy';
import ButtonFilled from '../../../components/ButtonFilled';

const AddExerciseModal = ({ isOpen, onClose, onAddExercise }) => {
    const [exerciseName, setExerciseName] = useState('');
    // State for showing the invalid login info snackbar
    const [openInvalidInputPopup, setOpenInvalidInputPopup] = useState(false);

    // Handler for adding the new exercise
    const handleAddExercise = () => {
        if (!exerciseName) {
            setOpenInvalidInputPopup(true);
            return;
        }

        const newExercise = {
            id: Date.now(), // A unique identifier for the exercise
            name: exerciseName,
            sets: [] // Initialize with no sets
        };
        console.log("exercise name is: " + exerciseName);
        onAddExercise(newExercise);
        setExerciseName(''); // Reset the exercise name field
        onClose(); // Close the modal
    };

    // Handle Close for inalid login error snackbar
    const handleClose = (reason) => {
        setOpenInvalidInputPopup(false);
    };

    return (
        <>
            <Snackbar
                open={openInvalidInputPopup}
                autoHideDuration={6000}
                onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity="error"
                    elevation={10000000000}
                    sx={{ width: '100%' }}>
                    Please enter an exercise name.
                </Alert>
            </Snackbar>
            <Modal open={isOpen} onClose={onClose}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Sheet
                    variant="outlined"
                    sx={{
                        width: '90%',
                        borderRadius: 'md',
                        p: 3,
                        boxShadow: 'lg',
                    }}
                >
                    <Stack className='w-100' direction="column" alignItems="center">
                        <Typography
                            component="h2"
                            id="modal-title"
                            level="h4"
                            className='header-25'
                            mb={1}
                        >
                            New Exercise
                        </Typography>
                        <Grid
                            id="modal-desc"
                            className="text-center w-100"
                        >
                            <TextInputWithLabel
                                bindValue={exerciseName}
                                label={"Exercise Name"}
                                placeholder={"Click to enter Exercise Name"}
                                onInputChange={(e) => setExerciseName(e.target.value)}
                            />
                        </Grid>
                        <Stack direction="row" spacing={1} className='w-100'>
                            <Button
                                variant='outlined'
                                className='red-border-button'
                                onClick={onClose}>
                                Remove
                            </Button>
                            <ButtonFilled
                                text="Save"
                                style="background-green"
                                onClick={handleAddExercise} />
                        </Stack>
                    </Stack>
                </Sheet>
            </Modal>
            {/* On invalid attempt */}

        </>


    );
};

export default AddExerciseModal;
