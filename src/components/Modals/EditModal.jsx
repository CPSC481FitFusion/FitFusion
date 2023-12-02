import { Modal, ModalClose, Typography, Sheet } from "@mui/joy";
import React from "react";
import ButtonFilled from "../ButtonFilled";
import { Button, Grid, IconButton, Stack } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const EditModal = ({
  isIcon,
  editButtonLabel,
  modalHeader,
  modalBody,
  isOpen,
  showRemove,
  onRemove,
  onSave,
}) => {
  const [open, setOpen] = React.useState(isOpen || false);
  let buttonType = <></>;
  let removeButton = <></>;

  const onClickRedBorderButton = () => {
    setOpen(false);
    onRemove(false);
  };

  if (isIcon) {
    buttonType = (
      <IconButton className="p-0" onClick={() => setOpen(true)}>
        <EditIcon />
      </IconButton>
    );
  } else {
    buttonType = (
      <Button
        variant="outlined"
        className="purple-border-button"
        onClick={() => setOpen(true)}
      >
        {editButtonLabel}
      </Button>
    );
  }

  if (showRemove) {
    removeButton = (
      <Button
        variant="outlined"
        className="red-border-button"
        onClick={onClickRedBorderButton}
      >
        Delete
      </Button>
    );
  }

  const handleClose = (event, reason) => {
    if (reason && reason == "backdropClick") return;
    setOpen(false);
  };

  const handleSave = () => {
    onSave();
    setOpen(false);
  };

  return (
    <>
      {buttonType}
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={handleClose}
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
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
          <ModalClose onClick={handleClose} variant="outlined" sx={{ m: 1 }} />
          <Stack className="w-100" direction="column" alignItems="center">
            <Typography
              component="h2"
              id="modal-title"
              level="h4"
              className="header-25"
              mb={1}
            >
              {modalHeader}
            </Typography>
            <Grid id="modal-desc" className="text-center w-100">
              {modalBody}
            </Grid>
            <Stack direction="row" spacing={3} className="w-100">
              {removeButton}
              <ButtonFilled
                text="Save"
                style="background-green"
                onClick={handleSave}
              />
            </Stack>
          </Stack>
        </Sheet>
      </Modal>
    </>
  );
};
export default EditModal;
