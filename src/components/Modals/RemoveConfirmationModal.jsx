import CloseIcon from '@mui/icons-material/Close';
import { Modal, ModalClose, Sheet, Typography } from "@mui/joy";
import { Button, IconButton, Stack } from "@mui/material";
import React from "react";

const RemoveConfirmationModal = ({
    modalHeader,
    modalBody,
    onRemoveClick,
}) => {
    const [open, setOpen] = React.useState(false);

    const handleModalClose = (event, reason) => {
        // Handler for closing modal
        if (reason && reason == "backdropClick") return;
        setOpen(false);
    };

    const onConfirmationButtonClick = () => {
        console.log("handling button")
        onRemoveClick();
        setOpen(false);
    };
    return (
        <>
            <IconButton onClick={() => setOpen(true)}>
                <CloseIcon />
            </IconButton>
            <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={open}
                onClose={handleModalClose}
                sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
            >
                <Sheet
                    variant="outlined"
                    sx={{
                        width: "90%",
                        borderRadius: "md",
                        p: 3,
                        boxShadow: "lg",
                    }}
                >
                    <ModalClose onClick={handleModalClose} variant="outlined" />
                    <Stack direction="column" alignItems="center">
                        <Typography
                            component="h2"
                            id="modal-title"
                            level="h4"
                            className="header-25"
                            mb={1}
                        >
                            {modalHeader}
                        </Typography>
                        <Stack className="text-center w-100" >
                            {modalBody}
                        </Stack>
                        <Button
                            variant="outlined"
                            className={"red-border-button mt-3"}
                            onClick={onConfirmationButtonClick} >
                            Delete
                        </Button>
                    </Stack>
                </Sheet>
            </Modal>
        </>
    );
};
export default RemoveConfirmationModal;
