import React, { useState } from "react";
import ButtonFilled from "../../../components/ButtonFilled";
import ControlledCheckbox from "../../../components/ControlledCheckbox";
import { Modal, Sheet, Stack, Typography } from "@mui/joy";
import Container from "../../../components/Container";
import GoalDetails from "./Goalsdetails";
import DeleteButtonWithConfirmation from "../../../components/DeleteButtonWithConfirmation";
import GoalsHistoryModal from "./goalshistorymodal";
import BasicConfirmationModal from "../../../components/modals/basicConfirmationModal";

const GoalsTab = () => {
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isStartModalOpen, setStartModalOpen] = useState(false);
  const [goalName, setGoalName] = useState(""); // State to store the goal name

  const handleOpenEditModal = () => {
    setEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setEditModalOpen(false);
  };

  const handleOpenStartModal = () => {
    setStartModalOpen(true);
  };

  const handleCloseStartModal = () => {
    setStartModalOpen(false);
  };

  const handleGoalNameChange = (newName) => {
    setGoalName(newName);
  };

  return (
    <>
      <h6 className="general-label">Start New Goal</h6>

      {/* Start button */}
      <ButtonFilled
        style="background-green"
        text="Add"
        onClick={handleOpenStartModal}
      />

      {/* Start Modal */}
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={isStartModalOpen}
        onClose={handleCloseStartModal}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sheet variant="outlined" className="full-page-modal-container">
          {/* Additional content can be added here */}
          <Container
            style={"background-blue-light m-0"}
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
              modalHeader={"Cancel Add"}
              modalBody={"Are you sure you want to cancel adding a new goal?"}
              modalConfirmationButtonLabel={"Cancel"}
              actionOnClick={() => handleCloseStartModal()}
            />
            <BasicConfirmationModal
              buttonStyle={"background-green"}
              openModalButtonLabel={"Confirm"}
              modalHeader={"Confirm Add"}
              modalBody={"Are you sure you want to add a new goal?"}
              modalConfirmationButtonLabel={"Confirm Add"}
              actionOnClick={() => handleCloseStartModal()}
            />
          </Stack>
        </Sheet>
      </Modal>

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

        {/* Right side: Square Edit Details button */}
        <div className="see-all">
          <div className="overlap-5">
            {/* Pass relevant props to the EditModal */}
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
      {/* Container for Controlled Checkboxes */}
      <div
        style={{ display: "flex", flexDirection: "column", marginTop: "10px" }}
      >
        {/* First Controlled Checkbox */}
        <ControlledCheckbox goalName="Zumba Classes" />
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ marginLeft: 2, fontSize: "0.8rem", fontStyle: "italic" }}
        >
          Attend 3 zumba class this month
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ marginLeft: 2, fontSize: "0.8rem", fontStyle: "italic" }}
        >
          Deadline 12/06/2023
        </Typography>
        {/* Second Controlled Checkbox */}
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ marginLeft: 2, fontSize: "0.8rem", fontStyle: "italic" }}
        ></Typography>
        <ControlledCheckbox goalName={goalName} />

        {/* Add more ControlledCheckbox components as needed */}
      </div>
    </>
  );
};

export default GoalsTab;
