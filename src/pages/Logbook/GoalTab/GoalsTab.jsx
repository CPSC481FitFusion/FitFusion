import { Modal, Sheet, Stack, Typography } from "@mui/joy";
import React, { useState } from "react";
import ButtonFilled from "../../../components/ButtonFilled";
import Container from "../../../components/Container";
import ControlledCheckbox from "../../../components/ControlledCheckbox";
import DeleteButtonWithConfirmation from "../../../components/DeleteButtonWithConfirmation";
import ErrorSnackbar from "../../../components/ErrorSnackbar";
import BasicConfirmationModal from "../../../components/modals/basicConfirmationModal";
import GoalDetails from "./GoalsDetails";
import GoalsHistoryModal from "./goalsHistoryModal";
import RemoveConfirmationModal from "../../../components/Modals/RemoveConfirmationModal";

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
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <p className="general-label">Goal History</p>

        <div className="see-all">
          <div className="overlap-5">
            <GoalsHistoryModal
              isIcon={true}
              isOpen={false}
              editButtonLabel="Edit Details"
              modalHeader="Edit Goal History"
              modalBody={
                <div style={{ display: "flex", alignItems: "center" }}>
                  <DeleteButtonWithConfirmation
                    style={{ marginRight: "8px" }}
                  />
                  Zumba Classes
                </div>
              }
              onClickRemove={() => {
                /* Implement your remove logic */
              }}
              onClickSave={() => {
                /* Implement your save logic */
              }}
            />
          </div>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", marginTop: "10px" }}>

  {/* Container for both goals */}
  <Container style={"background-purple-light"} children={
    <>
      {/* Goal 1: Zumba Classes */}
      <Container style={"background-green-light d-flex align-items-start"} elevation={3} children={
        <>
          <Stack direction="row" className="w-100 d-flex justify-content-between">
            <ControlledCheckbox goalName="Zumba Classes" />
            <RemoveConfirmationModal
              modalHeader={"Removing \"Goal\""}
              modalBody={(
                <Typography>
                  Are you sure you want to remove the goal from your goal history?
                </Typography>
              )}
              onRemoveClick={() => { }}
            />
          </Stack>
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ marginLeft: 2, fontSize: "0.8rem", fontStyle: "italic" }}
          >
            Attend 3 zumba classes this month
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ marginLeft: 2, fontSize: "0.8rem", fontStyle: "italic" }}
          >
            Deadline 12/06/2023
          </Typography>
        </>
      } />

      {/* Goal 2: Running Challenge */}
      <Container style={"background-green-light d-flex align-items-start"} elevation={3} children={
        <>
          <Stack direction="row" className="w-100 d-flex justify-content-between">
            <ControlledCheckbox goalName="Running Challenge" />
            <RemoveConfirmationModal
              modalHeader={"Removing \"Goal\""}
              modalBody={(
                <Typography>
                  Are you sure you want to remove the goal from your goal history?
                </Typography>
              )}
              onRemoveClick={() => { }}
            />
          </Stack>
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ marginLeft: 2, fontSize: "0.8rem", fontStyle: "italic" }}
          >
            Run 5 miles per week
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ marginLeft: 2, fontSize: "0.8rem", fontStyle: "italic" }}
          >
            Deadline 12/15/2023
          </Typography>
        </>
      } />
    </>
  } />

</div>
    </>
  );
};

export default GoalsTab;
