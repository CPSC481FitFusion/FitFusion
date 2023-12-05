import { Modal, Sheet, Stack, Typography } from "@mui/joy";
import React, { useState } from "react";
import ButtonFilled from "../../../components/ButtonFilled";
import Container from "../../../components/Container";
import ErrorSnackbar from "../../../components/ErrorSnackbar";
import BasicConfirmationModal from "../../../components/modals/basicConfirmationModal";
import { GoalHistoryCard } from "./GoalHistoryCard";
import GoalDetails from "./GoalsDetails";
import { getCurrentUsername } from "../../../utils/userUtils";

const GoalsTab = () => {
  const [isStartModalOpen, setStartModalOpen] = useState(false);
  const [goalName, setGoalName] = useState("");
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

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
    } else {
      // Save your goal details or perform other actions
      console.log("Goal Name:", goalName);
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
      { name: "Zumba Classes", description: "Attend 3 zumba classes this month", deadline: "12/06/2023" },
      { name: "Running Challenge", description: "Run 5 miles per week", deadline: "12/15/2023" },
      // ... more goals for johndoe
    ],
    "janedoe": [
      // ... goals for janedoe
    ],
    // ... goals for other users
  };

  const currentUser = getCurrentUsername();
  const userGoals = hardcodedGoalsData[currentUser] || [];
  console.log(userGoals)
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
        snackbarMessage="Goal Name cannot be empty."
        onClose={handleCloseSnackbar}
      />
      {/* Goal History */}
      <Stack spacing={1} className='my-2'>
        <Typography className='general-label'>Goal History</Typography>
        <Container style={"background-purple-light p-3 pb-0 mb-5"} children={
          userGoals.length > 0 ? (
            userGoals.map((goal, index) => (
              <GoalHistoryCard key={index} {...goal} /> // Spread the goal object properties
            ))
          ) : (
            <Typography>No goals tracked. Track a goal for it to appear here!</Typography>
          )
        }
        />
      </Stack>
    </>
  );
};

export default GoalsTab;