import { Modal, ModalClose, Sheet, Typography } from "@mui/joy";
import { Stack } from "@mui/material";
import React from "react";
import ButtonFilled from "../ButtonFilled";

const BasicConfirmationModal = ({
  buttonStyle,
  openModalButtonLabel,
  modalHeader,
  modalBody,
  modalConfirmationButtonLabel,
  actionOnClick,
  modalConfirmationButtonStyle,
  validation,
}) => {
  const [open, setOpen] = React.useState(false);

  const handleModalClose = (event, reason) => {
    // Handler for closing modal
    if (reason && reason == "backdropClick") return;
    setOpen(false);
  };

  const onConfirmationButtonClick = () => {
    actionOnClick();
    if (!validation || validation()) {
      setOpen(false);
    }
  };
  return (
    <>
      <ButtonFilled
        text={openModalButtonLabel}
        style={buttonStyle}
        onClick={() => setOpen(true)}
      />
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
              mt={1}
              mb={1}
            >
              {modalHeader}
            </Typography>
            <Stack className="text-center w-100" >
              {modalBody}
            </Stack>
            <Stack className="mt-4 w-100">
              <ButtonFilled
                text={modalConfirmationButtonLabel}
                style={modalConfirmationButtonStyle ?? buttonStyle}
                onClick={onConfirmationButtonClick}
              />
            </Stack>
          </Stack>
        </Sheet>
      </Modal>
    </>
  );
};
export default BasicConfirmationModal;
