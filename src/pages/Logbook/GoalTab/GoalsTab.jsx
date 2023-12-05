import { Modal, Sheet, Stack, Typography } from "@mui/joy";
import React, { useState } from "react";
import ButtonFilled from "../../../components/ButtonFilled";
import Container from "../../../components/Container";
import ErrorSnackbar from "../../../components/ErrorSnackbar";
import BasicConfirmationModal from "../../../components/modals/basicConfirmationModal";
import { getCurrentUsername } from "../../../utils/userUtils";
import { GoalHistoryCard } from "./GoalHistoryCard";
import GoalDetails from "./GoalsDetails";

const GoalsTab = () => {
  const [isStartModalOpen, setStartModalOpen] = useState(false);
  const [goalName, setGoalName] = useState("");
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleOpenStartModal = () => {
    setStartModalOpen(true);
  };

  const handleCloseStartModal = () => {
    setStartModalOpen(false);
  };

  const handleGoalNameChange = (newName) => {
    setGoalName(newName);
  };

  const handleConfirmAdd = () => {
    if (goalName.trim() === "") {
      // Show error Snackbar if the goal name is empty
      setIsSnackbarOpen(true);
      setSnackbarMessage("Goal Name is required.")
    } else {
      // Close the modal or perform other actions
      handleCloseStartModal();
    }
  };

  const handleCloseSnackbar = () => {
    setIsSnackbarOpen(false);
  };

  // Hardcoded goals data for demonstration purposes
  const hardcodedGoalsData = {
    "johndoe": [
      { name: "PR bench press", description: "Hit 2 plates on bench press", deadline: "12/06/2023" },
      { name: "Running challenge with Jane", description: "Run 5 miles per week", deadline: "12/15/2023" },
    ],
    "janedoe": [
      { name: "Zumba classes", description: "Attend 3 zumba classes this month", deadline: "12/06/2023" },
      { name: "Running challenge with John", description: "Run 5 miles per week", deadline: "12/15/2023" },
      { name: "Rowwing challenge", description: "Be able to row for an hour - no breaks:)", deadline: "12/15/2023" },
    ],
  };

  const currentUser = getCurrentUsername();
  const userGoals = hardcodedGoalsData[currentUser] || [];
  return (
    <>
      <ButtonFilled
        style="background-green"
        text="Set A Goal"
        onClick={handleOpenStartModal}
      />
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={isStartModalOpen}
        onClose={handleCloseStartModal}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sheet variant="outlined" className="full-page-modal-container">
          <Container
            style={"background-light-grey"}
            children={
              <>
                <GoalDetails onGoalNameChange={handleGoalNameChange} />
              </>
            }
          />
          <Stack spacing={20} direction="row" className="horizontal-stack">
            <BasicConfirmationModal
              buttonStyle={"background-orange"}
              openModalButtonLabel={"Cancel"}
              modalHeader={"Cancel Goal"}
              modalBody={"Are you sure you want to cancel starting a new goal?"}
              modalConfirmationButtonLabel={"Cancel"}
              actionOnClick={() => handleCloseStartModal()}
            />
            <BasicConfirmationModal
              buttonStyle={"background-green"}
              openModalButtonLabel={"Set"}
              modalHeader={"Set Goal"}
              modalBody={"Are you sure you want to set a new goal?"}
              modalConfirmationButtonLabel={"Confirm Set"}
              actionOnClick={handleConfirmAdd}
            />
          </Stack>
        </Sheet>
      </Modal>
      {/* Snackbar for Goal Name Empty */}
      <ErrorSnackbar
        isOpen={isSnackbarOpen}
        snackbarMessage={snackbarMessage}
        onClose={handleCloseSnackbar}
      />
      {/* Goal History */}
      <Stack spacing={1} className='my-2 mt-4'>
        <Typography className='general-label'>Goal History</Typography>
        <Container style={"background-purple-light p-3 pb-0 mb-5"} children={
          userGoals.length > 0 ? (
            userGoals.map((goal, index) => (
              <GoalHistoryCard key={index} {...goal} />
            ))
          ) : (
            <>
              <Typography className='general-label'>
                No goals tracked in the logbook.
              </Typography>
              <Typography>
                Track a goal for it to appear here!
              </Typography>
            </>
          )
        }
        />
      </Stack>
    </>
  );
};

export default GoalsTab;