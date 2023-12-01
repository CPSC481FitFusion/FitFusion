import React, { useState } from "react";
import {
  Modal,
  TextField,
  Button,
  Box,
  Stack,
  Snackbar,
  Alert,
  Typography,
  Grid,
} from "@mui/material";
import TextInputWithLabel from "../../../components/TextInputWithLabel";
import { ModalClose, Sheet } from "@mui/joy";
import ButtonFilled from "../../../components/ButtonFilled";
import ErrorSnackbar from "../../../components/ErrorSnackbar";

const AddExerciseModal = ({ isOpen, onClose, onAddExercise }) => {
  const [exerciseName, setExerciseName] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);  // State for showing the invalid login info snackbar
  const [snackbarMessage, setSnackbarMessage] = useState(false);

  const handleSnackbarClose = () => {  // Handle Close for inalid login error snackbar
    setSnackbarOpen(false);
  };

  const handleAddExercise = () => {  // Handler for adding the new exercise
    if (!exerciseName) {
      setSnackbarOpen(true);      // Open the invalid snackbar (no match found).
      setSnackbarMessage("Exercise Name is required. Cannot be empty.");
      setOpenInvalidInputPopup(true);
      return;
    }

    const newExercise = {
      id: Date.now(), // A unique identifier for the exercise
      name: exerciseName,
      sets: [], // Initialize with no sets
    };
    console.log("exercise name is: " + exerciseName);
    onAddExercise(newExercise);
    setExerciseName(""); // Reset the exercise name field
    onClose(); // Close the modal
  };

  return (
    <>
      {/* On invalid empty attempt */}
      <ErrorSnackbar
        isOpen={snackbarOpen}
        snackbarMessage={snackbarMessage}
        onClose={handleSnackbarClose} />
      <Modal
        open={isOpen}
        onClose={onClose}
        className="d-flex justify-content-center align-items-center">
        <Sheet
          variant="outlined"
          className="wid"
          sx={{ width: "90%", borderRadius: "md", p: 3, boxShadow: "lg" }} >
          <ModalClose variant="outlined" sx={{ m: 1 }} />
          <Stack className="w-100" direction="column" alignItems="center">
            <Typography component="h2" id="modal-title" level="h4" className="header-25" mb={1} >
              New Exercise
            </Typography>
            <Grid id="modal-desc" className="text-center w-100 mb-4">
              <TextInputWithLabel
                bindValue={exerciseName}
                label={"Exercise Name"}
                placeholder={"Click to enter Exercise Name"}
                onInputChange={(e) => setExerciseName(e.target.value)} />
            </Grid>
            <Stack direction="row" spacing={3} className="w-100">
              <Button variant="outlined" className="red-border-button" onClick={onClose} >
                Remove
              </Button>
              <ButtonFilled text="Save" style="background-green" onClick={handleAddExercise} />
            </Stack>
          </Stack>
        </Sheet>
      </Modal>
    </>
  );
};

export default AddExerciseModal;
