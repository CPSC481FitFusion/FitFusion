import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Container from "../../../components/Container";
import { format } from "date-fns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileTimePicker, DatePicker } from "@mui/x-date-pickers";
import { ModalClose, Sheet } from "@mui/joy";
import { RequiredInputLabel } from "../../../components/RequiredInputLabel";
import { Stack, Typography, Button, Modal, Grid } from "@mui/material";
import ButtonFilled from "../../../components/ButtonFilled";
import ErrorSnackbar from "../../../components/ErrorSnackbar";
import React, { useEffect, useState } from "react";
import TextareaInputWithLabel from "../../../components/TextareaInputWithLabel";
import TextInputWithLabel from "../../../components/TextInputWithLabel";

const BodyDetails = ({ body, onUpdate, onClose, isOpen }) => {
    const [modalOpen, setModalOpen] = useState(isOpen); // State for modal
    const [tempDetails, setTempDetails] = useState({
      // Temporary state for body composition details, used while editing
      date: body?.date || new Date(),
      weight: body?.weight || "",
      waistCircumference: body?.waistCircumference || "",
      hipCircumference: body?.hipCircumference || "",
      armCircumference: body?.armCircumference || "",
      thighCircumference: body?.thighCircumference || "",
    });

    useEffect(() => {
      // Use effect for handing modal state. Allows for modal to open when starting new body composition.
      setModalOpen(isOpen);
    }, [isOpen]);

     // Handler for closing modal
    const handleModalClose = (event, reason) => {
      if (reason && reason == "backdropClick") return;
      onClose();
      setModalOpen(false);
    };

    const handleModalSave = () => {
        onUpdate({ ...body, ...tempDetails });
        setModalOpen(false);
      };

    return (
      <>
        <Stack direction="row" className="horizontal-stack pb-1">
          <Typography className="header-20 align-bottom">
                    Body Composition
          </Typography>
          <Button
            variant="outlined"
            className="purple-border-button"
            onClick={() => setModalOpen(true)}
          >
            Edit
          </Button>
        {/* Modal for editing body composition details */}
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
                Body Composition Details
              </Typography>
              <Grid id="modal-desc" className="text-center w-100">
                <Stack spacing={2} className="input-container my-2 text-start w-100 mb-4">
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
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
                  </LocalizationProvider>
                  <TextInputWithLabel
                    bindValue={tempDetails.weight}
                    label={"Weight (lbs)"}
                    placeholder={"Enter value"}
                    onInputChange={(e) =>
                      setTempDetails({ ...tempDetails, weight: e.target.value })
                    }
                  />
                  <TextInputWithLabel
                  bindValue={tempDetails.waistCircumference}
                  label={"Waist Circumference (cm)"}
                  placeholder={"Enter value"}
                  onInputChange={(e) =>
                    setTempDetails({ ...tempDetails, waistCircumference: e.target.value })
                  }
                  />
                  <TextInputWithLabel
                    bindValue={tempDetails.hipCircumference}
                    label={"Hip Circumference (cm)"}
                    placeholder={"Enter value"}
                    onInputChange={(e) =>
                    setTempDetails({ ...tempDetails, hipCircumference: e.target.value })
                    }
                  />
                  <TextInputWithLabel
                    bindValue={tempDetails.armCircumference}
                    label={"Arm Circumference (cm)"}
                    placeholder={"Enter value"}
                    onInputChange={(e) =>
                    setTempDetails({ ...tempDetails, armCircumference: e.target.value })
                    }
                  />
                  <TextInputWithLabel
                    bindValue={tempDetails.thighCircumference}
                    label={"Thigh Circumference (cm)"}
                    placeholder={"Enter value"}
                    onInputChange={(e) =>
                     setTempDetails({ ...tempDetails, thighCircumference: e.target.value })
                    }
                  />
                </Stack>
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
         <Container
            style={"background-purple-light d-flex align-items-start"}>
                    <Typography fontWeight={"bold"}>
                      {tempDetails.date ? format(tempDetails.date, "PP") : ""}
                    </Typography>
                    <div style={{marginTop: '5px', marginBottom: '5px'}}>
                    <Typography fontSize={14}>
                        Notes
                    </Typography>
                    </div>
            <Stack spacing={2} direction="row" className="pb-2">
                <Stack direction="column">
                    <Typography fontStyle="italic">
                        Body Weight:
                    </Typography>
                    <Typography fontStyle="italic">
                        Waist Circumference:
                    </Typography>
                    <Typography fontStyle="italic">
                        Hip Circumference:
                    </Typography>
                    <Typography fontStyle="italic">
                        Arm Circumference:
                    </Typography>
                    <Typography fontStyle="italic">
                        Thigh Circumference:
                    </Typography>
                    
                </Stack>
                <Stack direction="column">
                    <Typography>
                        {tempDetails?.weight || 0} lbs
                    </Typography>
                    <Typography>
                        {tempDetails?.waistCircumference || 0} cm
                    </Typography>
                    <Typography>
                        {tempDetails?.hipCircumference || 0} cm
                    </Typography>
                    <Typography>
                        {tempDetails?.armCircumferenc || 0} cm
                    </Typography>
                    <Typography>
                        {tempDetails?.thighCircumference || 0} cm
                    </Typography>
                </Stack>
            </Stack>
            </Container>
        </>
    );
};

export default BodyDetails;