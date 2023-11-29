import React, { useState } from 'react';
import { Modal, TextField, Button, Box, Stack, Snackbar, Alert } from '@mui/material';

const AddSetModal = ({ isOpen, onClose, onAddSet }) => {
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');

    const handleSaveSet = () => {
        if (!reps || !weight) {
            alert("Please enter all set details.");
            return;
        }

        const newSet = {
            id: Date.now(), // Unique identifier for the set
            reps,
            weight
        };

        onAddSet(newSet);
        setReps('');
        setWeight('');
        onClose();
    };

    // Handle Close for inalid login error snackbar
    const handleClose = (reason) => {
        setOpenInvalidInputPopup(false);
    };
    return (
        <>
            <Modal open={isOpen} onClose={onClose}>
                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 4, minWidth: 300 }}>
                    <Stack spacing={2}>
                        <TextField label="Reps" variant="outlined" fullWidth value={reps} onChange={(e) => setReps(e.target.value)} />
                        <TextField label="Weight" variant="outlined" fullWidth value={weight} onChange={(e) => setWeight(e.target.value)} />
                        <Button variant="contained" onClick={handleSaveSet}>Save Set</Button>
                        <Button variant="outlined" onClick={onClose}>Cancel</Button>
                    </Stack>
                </Box>
            </Modal>
        </>
    );
};

export default AddSetModal;
