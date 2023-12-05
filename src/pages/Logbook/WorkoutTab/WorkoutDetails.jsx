import { ModalClose, Sheet } from "@mui/joy";
import { Button, Grid, Modal, Stack, Typography } from "@mui/material";
import { DatePicker, MobileTimePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import ButtonFilled from "../../../components/ButtonFilled";
import ErrorSnackbar from "../../../components/ErrorSnackbar";
import { RequiredInputLabel } from "../../../components/RequiredInputLabel";
import TextInputWithLabel from "../../../components/TextInputWithLabel";
import TextareaInputWithLabel from "../../../components/TextareaInputWithLabel";

const WorkoutDetails = ({ workout, onUpdate, onClose, isOpen }) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false); // State for showing the invalid login info snackbar
  const [snackbarMessage, setSnackbarMessage] = useState(false);
  const [modalOpen, setModalOpen] = useState(isOpen); // State for modal
  const [tempDetails, setTempDetails] = useState({
    // Temporary state for workout details, used while editing
    name: workout?.name || "New Workout",
    date: workout?.date || new Date(),
    startTime: workout?.startTime || new Date(),
    endTime:
      workout?.endTime || new Date(new Date().getTime() + 60 * 60 * 1000), // 1 hour after start time
    notes: workout?.notes || "",
  });

  useEffect(() => {
    // Use effect for handing modal state. Allows for modal to open when Starting New Workout.
    console.log("useEffect: " + modalOpen)
    setModalOpen(isOpen);
  }, [isOpen]);

  const handleSnackbarClose = () => {
    // Handle Close for inalid login error snackbar
    setSnackbarOpen(false);
  };

  const handleModalClose = (event, reason) => {
    if (reason && reason === "backdropClick") return;
    onClose(); // Use the passed onClose function to close the modal
    setModalOpen(false);
};

  const handleModalSave = () => {
    // Handler for saving modal edited details
    if (tempDetails.endTime <= tempDetails.startTime) {
      setSnackbarMessage("End time must be after start time.");
      setSnackbarOpen(true);
      return false;
    } else if (!tempDetails.name) {
      setSnackbarMessage("Workout Name is required.");
      setSnackbarOpen(true);
      return false;
    } else {
      onUpdate({ ...workout, ...tempDetails });
      setModalOpen(false);
    }
  };

  return (
    <>
      <Stack direction="row" className="horizontal-stack pb-1">
        {/* Displaying workout name */}
        <Typography className="header-20 align-bottom">
          {tempDetails.name || "New Workout"}
        </Typography>
        <Button
          variant="outlined"
          className="purple-border-button"
          onClick={() => setModalOpen(true)}
        >
          Edit
        </Button>
        {/* Modal for editing workout details */}
        <Modal
          open={modalOpen}
          onClose={handleModalClose}
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Sheet
            variant="outlined"
            sx={{ width: "90%", borderRadius: "md", p: 3, boxShadow: "lg" }}
          >
            <Stack className="w-100" direction="column" alignItems="center">
              <Typography
                component="h2"
                id="modal-title"
                level="h4"
                className="header-25"
                mb={1}
              >
                Workout Details
              </Typography>
              <Grid id="modal-desc" className="text-center w-100">
                <Stack className="input-container my-2 text-start w-100 mb-4">
                  {/* Input fields for editing workout details */}
                  <TextInputWithLabel
                    bindValue={tempDetails.name}
                    label={"Workout Name"}
                    placeholder={"Click to enter Workout Name"}
                    onInputChange={(e) =>
                      setTempDetails({ ...tempDetails, name: e.target.value })
                    }
                    isRequired={true}
                  />
                  {/* Date and time pickers */}
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Stack direction="column" spacing={3} className="py-3">
                      <div>
                        <RequiredInputLabel label={"Date"} />
                        <DatePicker
                          value={tempDetails.date}
                          className="time-picker"
                          onChange={(newDate) =>
                            setTempDetails({ ...tempDetails, date: newDate })
                          }
                        />
                      </div>
                      <div>
                        <RequiredInputLabel label={"Start Time"} />
                        <MobileTimePicker
                          value={tempDetails.startTime}
                          className="time-picker"
                          onChange={(newStartTime) =>
                            setTempDetails({
                              ...tempDetails,
                              startTime: newStartTime,
                            })
                          }
                        />
                      </div>
                      <div>
                        <RequiredInputLabel label={"End Time"} />
                        <MobileTimePicker
                          value={tempDetails.endTime}
                          className="time-picker"
                          onChange={(newEndTime) =>
                            setTempDetails({
                              ...tempDetails,
                              endTime: newEndTime,
                            })
                          }
                        />
                      </div>
                    </Stack>
                  </LocalizationProvider>
                  {/* Textarea for workout notes */}
                  <TextareaInputWithLabel
                    bindValue={tempDetails.notes}
                    label={"Notes"}
                    placeholder={"Click to enter Notes"}
                    onInputChange={(e) =>
                      setTempDetails({ ...tempDetails, notes: e.target.value })
                    }
                  />
                </Stack>
                {/* On invalid empty attempt */}
                <ErrorSnackbar
                  isOpen={snackbarOpen}
                  snackbarMessage={snackbarMessage}
                  onClose={handleSnackbarClose}
                />
              </Grid>
              <Stack className="w-100">
                <ButtonFilled
                  text="Save"
                  style="background-green"
                  onClick={handleModalSave}
                />
              </Stack>
            </Stack>
          </Sheet>
        </Modal>
      </Stack>
      {/* Displaying workout details */}
      <Stack spacing={2} direction="row" className="pb-2">
        <Stack direction="column">
          <Typography fontWeight={"bold"}>Date:</Typography>
          <Typography fontWeight={"bold"}>Time:</Typography>
          <Typography fontWeight={"bold"}>Notes:</Typography>
        </Stack>
        <Stack direction="column">
          <Typography>
            {tempDetails.date ? format(tempDetails.date, "PP") : ""}
          </Typography>
          <Typography>
            {(tempDetails.startTime ? format(tempDetails.startTime, "p") : "") +
              " "}{" "}
            to
            {" " +
              (tempDetails.endTime ? format(tempDetails.endTime, "p") : "")}
          </Typography>
          <Typography fontStyle={"italic"}>{tempDetails.notes}</Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default WorkoutDetails;
