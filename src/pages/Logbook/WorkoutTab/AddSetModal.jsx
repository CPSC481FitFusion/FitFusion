import {
    Button,
    Grid,
    Modal,
    Stack,
    Typography
} from "@mui/material";
import React, { useState } from "react";

import { ModalClose, Sheet } from "@mui/joy";
import { useEffect } from "react";
import ButtonFilled from "../../../components/ButtonFilled";
import ErrorSnackbar from "../../../components/ErrorSnackbar";
import TextNumberInputWithLabel from "../../../components/TextNumberInputWithLabel";

const AddSetModal = ({
  isOpen,
  onClose,
  onAddSet,
  set,
  showRemove,
  onRemove,
}) => {
  const [reps, setReps] = useState(set?.reps || "");
  const [weight, setWeight] = useState(set?.weight || "");
  const [snackbarOpen, setSnackbarOpen] = useState(false); // State for showing the invalid login info snackbar
  const [snackbarMessage, setSnackbarMessage] = useState(false);

  useEffect(() => {
    if (set && showRemove) {
      setReps(set.reps);
      setWeight(set.weight);
    } else {
      setReps("");
      setWeight("");
    }
  }, [set, showRemove]);

  const handleSnackbarClose = () => {
    // Handle Close for inalid login error snackbar
    setSnackbarOpen(false);
  };

  const handleSaveSet = () => {
    // Validation Check
    if (!reps && !weight) {
      setSnackbarOpen(true);
      setSnackbarMessage("Rep and Weight is required.");
      return;
    } else if (!reps) {
      setSnackbarOpen(true);
      setSnackbarMessage("Rep is required.");
      return;
    } else if (!weight) {
      setSnackbarOpen(true);
      setSnackbarMessage("Weight is required.");
      return;
    }

    const setDetails = {
      id: set?.id || Date.now(), // Use existing id for edits, or create new for adds
      reps,
      weight,
    };

    onAddSet(setDetails);
    setReps("");
    setWeight("");
    onClose();
  };

  const handleClose = (event, reason) => {
    if (reason && reason == "backdropClick") return;
    onClose();
  };

  return (
    <>
      <Modal
        open={isOpen}
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
          <Stack className="w-100" direction="column" alignItems="center">
            <Typography
              component="h2"
              id="modal-title"
              level="h4"
              className="header-25"
              mb={1}
            >
              {showRemove ? "Edit Set" : "New Set"}
            </Typography>
            <Grid id="modal-desc" className="text-center w-100">
              {/* On invalid empty attempt */}
              <ErrorSnackbar
                isOpen={snackbarOpen}
                snackbarMessage={snackbarMessage}
                onClose={handleSnackbarClose}
              />
              <Stack
                spacing={3}
                className="input-container my-1 text-start w-100 mb-4"
              >
                <TextNumberInputWithLabel
                  bindValue={reps}
                  label={"Reps"}
                  placeholder={"Enter numeric value for repetitions"}
                  onInputChange={(e) => setReps(e.target.value)}
                />
                <TextNumberInputWithLabel
                  bindValue={weight}
                  label={"Weight"}
                  placeholder={"Enter numeric value for weight in lb(s)"}
                  onInputChange={(e) => setWeight(e.target.value)}
                />
              </Stack>
            </Grid>
            <Stack direction="row" spacing={3} className="w-100">
              {showRemove && (
                <Button
                  variant="outlined"
                  className="red-border-button"
                  onClick={() => {
                    onRemove();
                    onClose();
                  }}
                >
                  Delete
                </Button>
              )}
              <ButtonFilled
                text="Save Set"
                style="background-green"
                onClick={handleSaveSet}
              />
            </Stack>
          </Stack>
        </Sheet>
      </Modal>
    </>
  );
};

export default AddSetModal;
