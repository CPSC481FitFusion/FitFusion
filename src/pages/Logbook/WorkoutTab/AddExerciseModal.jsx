import { ModalClose, Sheet } from "@mui/joy";
import { Grid, Modal, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ButtonFilled from "../../../components/ButtonFilled";
import ErrorSnackbar from "../../../components/ErrorSnackbar";
import TextInputWithLabel from "../../../components/TextInputWithLabel";

const AddExerciseModal = ({ isOpen, onClose, onAddExercise }) => {
  const [exerciseName, setExerciseName] = useState("");
  const [modalOpen, setModalOpen] = useState(isOpen); // State for modal
  const [snackbarOpen, setSnackbarOpen] = useState(false); // State for showing the invalid login info snackbar
  const [snackbarMessage, setSnackbarMessage] = useState(false);

  useEffect(() => {
    // Use effect for handing modal state. Allows for modal to open when Starting New Workout.
    setModalOpen(isOpen);
  }, [isOpen]);

  const handleSnackbarClose = () => {
    // Handle Close for inalid login error snackbar
    setSnackbarOpen(false);
  };

  const handleAddExercise = () => {
    // Handler for adding the new exercise
    if (!exerciseName) {
      setSnackbarOpen(true); // Open the invalid snackbar (no match found).
      setSnackbarMessage("Exercise Name is required. Cannot be empty.");
      return;
    }

    const newExercise = {
      id: Date.now(), // A unique identifier for the exercise
      name: exerciseName,
      sets: [], // Initialize with no sets
    };
    onAddExercise(newExercise);
    setExerciseName(""); // Reset the exercise name field
    setModalOpen(false);
    onClose(); // Close the modal
  };

  const handleModalClose = (event, reason) => {
    // Handler for closing modal
    if (reason && reason == "backdropClick") return;
    onClose();
    setModalOpen(false);
  };

  return (
    <>
      {/* On invalid empty attempt */}
      <ErrorSnackbar
        isOpen={snackbarOpen}
        snackbarMessage={snackbarMessage}
        onClose={handleSnackbarClose}
      />
      <Modal
        open={modalOpen}
        onClose={handleModalClose}
        className="d-flex justify-content-center align-items-center"
      >
        <Sheet
          variant="outlined"
          className="wid"
          sx={{ width: "90%", borderRadius: "md", p: 3, boxShadow: "lg" }}
        >
          <ModalClose
            onClick={handleModalClose}
            variant="outlined"
            sx={{ m: 1 }}
          />
          <Stack className="w-100" direction="column" alignItems="center">
            <Typography
              component="h2"
              id="modal-title"
              level="h4"
              className="header-25"
              mb={1}
            >
              New Exercise
            </Typography>
            <Grid id="modal-desc" className="text-center w-100 mb-4">
              <TextInputWithLabel
                bindValue={exerciseName}
                label={"Exercise Name"}
                placeholder={"Click to enter Exercise Name"}
                onInputChange={(e) => setExerciseName(e.target.value)}
              />
            </Grid>
            <Stack direction="row" spacing={3} className="w-100">
              <ButtonFilled
                text="Save"
                style="background-green"
                onClick={handleAddExercise}
              />
            </Stack>
          </Stack>
        </Sheet>
      </Modal>
    </>
  );
};

export default AddExerciseModal;
