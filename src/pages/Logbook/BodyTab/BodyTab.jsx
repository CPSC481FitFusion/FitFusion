import ButtonFilled from "../../../components/ButtonFilled";
import { Modal, ModalClose, Typography, Sheet } from "@mui/joy";
import React from "react";
import { Stack } from "@mui/material";
import Container from "../../../components/Container";
import BodyDetails from "./BodyDetails";
import BodyExerciseCard from "./BodyExerciseCard";
import BasicConfirmationModal from "../../../components/modals/basicConfirmationModal";

const BodyTab = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };
  return (
    <>
      <h6 className="general-label">Start a Body Composition</h6>
      <ButtonFilled
        style={"background-green"}
        text={"Start"}
        onClick={() => setOpen(true)}
      />
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={handleClose}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sheet variant="outlined" className="full-page-modal-container">
          <BodyDetails />
          <Container
            style={"background-purple-light"}
            children={
              <>
                <BodyExerciseCard />
                <ButtonFilled
                  style={"background-purple"}
                  text={"Add Body Composition"}
                />
              </>
            }
          />
          <Stack spacing={20} direction="row" className="horizontal-stack">
            <BasicConfirmationModal
              buttonStyle={"background-orange"}
              openModalButtonLabel={"Cancel"}
              modalHeader={"Cancel Body Composition"}
              modalBody={
                "Are you sure you want to cancel your Body Composition entry?"
              }
              modalConfirmationButtonLabel={"Cancel Body Composition"}
              actionOnClick={() => setOpen(false)}
            />
            <BasicConfirmationModal
              buttonStyle={"background-green"}
              openModalButtonLabel={"Finish"}
              modalHeader={"Finish Body Composition"}
              modalBody={
                "Are you sure you want to finish your Body Composition entry?"
              }
              modalConfirmationButtonLabel={"Finish Body Composition"}
              actionOnClick={() => setOpen(false)}
            />
          </Stack>
        </Sheet>
      </Modal>
    </>
  );
};

export default BodyTab;
