import React, { useState } from "react";
import ButtonFilled from "../../../components/ButtonFilled";
import ControlledCheckbox from "../../../components/ControlledCheckbox";
import { Modal, Sheet, Stack, Typography } from "@mui/joy";
import Container from "../../../components/Container";
import GoalDetails from "./Goalsdetails";
import BasicConfirmationModal from "../../../components/modals/basicConfirmationModal";
import ErrorSnackbar from "../../../components/ErrorSnackbar";
import DeleteButtonWithConfirmation from "../../../components/DeleteButtonWithConfirmation";
import GoalsHistoryModal from "./goalshistorymodal";

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

      <div
        style={{ display: "flex", flexDirection: "column", marginTop: "10px" }}
      >
        <ControlledCheckbox goalName="Zumba Classes" />
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

        {/* Add more ControlledCheckbox components as needed */}
      </div>
    </>
  );
};

export default GoalsTab;
