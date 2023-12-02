import { Modal, ModalClose, Typography, Sheet } from '@mui/joy';
import React from 'react';
import ButtonFilled from '../ButtonFilled';
import { Box, Stack } from '@mui/material';

const BasicConfirmationModal = ({
    buttonStyle,
    openModalButtonLabel,
    modalHeader,
    modalBody,
    modalConfirmationButtonLabel,
    actionOnClick }) => {
    const [open, setOpen] = React.useState(false);

    const handleModalClose = (event, reason) => { // Handler for closing modal
        if (reason && reason == "backdropClick")
            return;
        setOpen(false)
    }

    const onConfirmationButtonClick = () => {
        actionOnClick()
        setOpen(false)
    }
    return (
        <>
            <ButtonFilled text={openModalButtonLabel} style={buttonStyle} onClick={() => setOpen(true)} />
            <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={open}
                onClose={handleModalClose}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Sheet
                    variant="outlined"
                    sx={{
                        width: '90%',
                        borderRadius: 'md',
                        p: 3,
                        boxShadow: 'lg',
                    }}>
                    <ModalClose onClick={handleModalClose} variant="outlined" />
                    <Stack direction="column" alignItems="center">
                        <Typography
                            component="h2"
                            id="modal-title"
                            level="h4"
                            className='header-25'
                            mb={1}
                        >
                            {modalHeader}
                        </Typography>
                        <Typography
                            id="modal-desc"
                            textColor="text.tertiary"
                            className="text-center"
                        >
                            {modalBody}
                        </Typography>
                        <Box className="mt-3">
                            <ButtonFilled
                                text={modalConfirmationButtonLabel}
                                style={buttonStyle}
                                onClick={onConfirmationButtonClick} />
                        </Box>
                    </Stack>
                </Sheet>
            </Modal>
        </>
    );
}
export default BasicConfirmationModal;
