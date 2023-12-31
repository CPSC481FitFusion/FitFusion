import { Modal, ModalClose, Typography, Sheet } from "@mui/joy";
import React from "react";
import ButtonFilled from "../../../components/ButtonFilled";
import { Button, Grid, IconButton, Stack } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const GoalsHistoryModal = ({
  isIcon,
  editButtonLabel,
  modalHeader,
  modalBody,
  isOpen,
  onRemove,
  onSave,
}) => {
  const [open, setOpen] = React.useState(isOpen);

  let button = <></>;
  if (isIcon) {
    button = (
      <IconButton onClick={() => setOpen(true)}>
        <EditIcon />
      </IconButton>
    );
  } else {
    button = (
      <Button
        variant="outlined"
        className="purple-border-button"
        onClick={() => setOpen(true)}
      >
        {editButtonLabel}
      </Button>
    );
  }

  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };

  const handleSave = () => {
    if (onSave()) {
      setOpen(false);
    }
  };
  return (
    <>
      {button}
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
          <ModalClose variant="outlined" sx={{ m: 1 }} />
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
            <Stack direction="row" spacing={1} className="w-100">
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
export default GoalsHistoryModal;
