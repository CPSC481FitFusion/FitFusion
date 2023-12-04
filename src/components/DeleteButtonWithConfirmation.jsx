import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import ButtonFilled from "./ButtonFilled";

export default function DeleteGoalButton() {
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);

  const handleDeleteClick = () => {
    setConfirmationModalOpen(true);
  };

  const handleConfirmationModalClose = () => {
    setConfirmationModalOpen(false);
  };

  const handleDeleteConfirmation = () => {
    handleConfirmationModalClose();
  };

  return (
    <>
      <IconButton aria-label="delete goal" onClick={handleDeleteClick}>
        <DeleteIcon />
      </IconButton>

      <Modal
        open={confirmationModalOpen}
        onClose={handleConfirmationModalClose}
        aria-labelledby="confirmation-modal-title"
        aria-describedby="confirmation-modal-description"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            background: "white",
            padding: "16px",
            borderRadius: "8px",
            textAlign: "center",
          }}
        >
          <Typography variant="h5" id="confirmation-modal-title" gutterBottom>
            Delete Goal Confirmation
          </Typography>
          <Typography
            variant="body1"
            id="confirmation-modal-description"
            paragraph
          >
            Are you sure you want to delete your goal?
          </Typography>
          <div>
            <ButtonFilled
              text="Cancel"
              style={"background-blue"}
              onClick={handleConfirmationModalClose}
            />
            <ButtonFilled
              text="Delete"
              style={"background-red"}
              onClick={handleDeleteConfirmation}
            />
          </div>
        </div>
      </Modal>
    </>
  );
}
