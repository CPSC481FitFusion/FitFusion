import { Modal, ModalClose, Typography, Sheet } from '@mui/joy';
import React from 'react';
import ButtonFilled from '../ButtonFilled';
import { Button, IconButton, Stack } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const EditModal = ({ 
    isIcon, editButtonLabel, modalHeader, modalBody, onClickRemove, onClickSave }) => {
    const [open, setOpen] = React.useState(false);

    let button = (<></>);
    if (isIcon) {
        button = (
            <IconButton onClick={() => setOpen(true)}>
                <EditIcon />
            </IconButton>
        );
    }
    else {
        button = (
            <Button
                variant='outlined'
                className='purple-border-button'
                onClick={() => setOpen(true)}
            >
                {editButtonLabel}
            </Button>
        );
    }

    const handleClose = (event, reason) => {
        if (reason !== 'backdropClick') {
            setOpen(false)
        }
    }
    return (
        <>
            {button}
            <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={open}
                onClose={handleClose}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <Sheet
                    variant="outlined"
                    sx={{
                        width: '90%',
                        borderRadius: 'md',
                        p: 3,
                        boxShadow: 'lg',
                    }}
                >
                    <ModalClose variant="outlined" sx={{ m: 1 }} />
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
                        <Stack direction="row" spacing={1} className='w-100 mt-3'>
                            <Button
                                variant='outlined'
                                className='red-border-button'
                                onClick={() => setOpen(true)}
                            >
                                Remove
                            </Button>
                            <ButtonFilled
                                text="Save"
                                style="background-green"
                                onClick={() => 
                                setOpen(false)} />
                        </Stack>
                    </Stack>
                </Sheet>
            </Modal>
        </>
    );
}
export default EditModal;
