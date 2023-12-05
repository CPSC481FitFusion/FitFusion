import { Modal, Sheet } from '@mui/joy';
import { Grid, Stack, Typography } from '@mui/material';
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useState } from 'react';
import ButtonFilled from "../../../components/ButtonFilled";
import Container from "../../../components/Container";
import ErrorSnackbar from "../../../components/ErrorSnackbar";
import { RequiredInputLabel } from "../../../components/RequiredInputLabel";
import TextNumberInputWithLabel from "../../../components/TextNumberInputWithLabel";
import { getCurrentUsername } from '../../../utils/userUtils';
import BodyCompositionCard from "./BodyCompositionCard";
import BasicConfirmationModal from '../../../components/modals/basicConfirmationModal';

const BodyTab = () => {
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [tempDetails, setTempDetails] = useState({
        date: new Date(),
        weight: '',
        waistCircumference: '',
        hipCircumference: '',
        armCircumference: '',
        thighCircumference: '',
    });

    // Hardcoded body composition data
    const hardcodedData = {
        "johndoe": [
            { id: 5, date: new Date('2023-12-07'), weight: 180, waistCircumference: 32 },
            { id: 4, date: new Date('2023-12-03'), armCircumference: 13, thighCircumference: 21 },
            { id: 3, date: new Date('2023-12-01'), weight: 180, waistCircumference: 32, hipCircumference: 38, armCircumference: 12, thighCircumference: 20 },
            { id: 2, date: new Date('2023-11-27'), weight: 185, waistCircumference: 33 }, // Partial data
            { id: 1, date: new Date('2023-11-21'), armCircumference: 13, thighCircumference: 21 }, // Partial data
        ],
        "bodybuilder": [
            { id: 4, date: new Date('2023-12-07'), weight: 200, hipCircumference: 40 },
            { id: 3, date: new Date('2023-12-05'), weight: 200, waistCircumference: 34, hipCircumference: 40, armCircumference: 14, thighCircumference: 22 },
            { id: 2, date: new Date('2023-11-30'), weight: 205, hipCircumference: 41, thighCircumference: 23 }, // Partial data
            { id: 1, date: new Date('2023-11-27'), waistCircumference: 35 }, // Partial data
        ],
        // ... data for other users
    };

    const handleSnackbarClose = () => setSnackbarOpen(false);

    const handleModalClose = () => setModalOpen(false);

    const handleCancel = () => {
        setTempDetails({
            date: new Date(),
            weight: '',
            waistCircumference: '',
            hipCircumference: '',
            armCircumference: '',
            thighCircumference: '',
        });
        setModalOpen(false);
    };

    const handleModalSave = () => {
        // Validation
        if (!tempDetails.weight && !tempDetails.waistCircumference && !tempDetails.hipCircumference && !tempDetails.armCircumference && !tempDetails.thighCircumference) {
            setSnackbarOpen(true);
            setSnackbarMessage("At least 1 body composition metric must be inputted to save.");
            return;
        }

        // Save the data
        // ... Saving logic (e.g., updating the state or local storage)

        setModalOpen(false);
    };

    const user = getCurrentUsername();
    const userBodyComposition = hardcodedData[user] || [];

    return (
        <>
            <ButtonFilled
                style={"background-green"}
                text={"Start a Body Composition"}
                onClick={() => setModalOpen(true)} />
            <Modal
                open={modalOpen}
                onClose={handleModalClose}
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }} >
                <Sheet
                    variant="outlined"
                    sx={{ width: "90%", borderRadius: "md", p: 3, boxShadow: "lg" }}>
                    {/* On invalid empty attempt */}
                    <ErrorSnackbar
                        isOpen={snackbarOpen}
                        snackbarMessage={snackbarMessage}
                        onClose={handleSnackbarClose} />
                    <Stack className="w-100" direction="column" alignItems="center">
                        <Typography
                            component="h2"
                            id="modal-title"
                            level="h4"
                            className="header-25"
                            mb={1} >
                            New Body Composition
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
                                <TextNumberInputWithLabel
                                    bindValue={tempDetails.weight}
                                    label={"Weight (lbs)"}
                                    placeholder={"Enter value"}
                                    onInputChange={(e) =>
                                        setTempDetails({ ...tempDetails, weight: e.target.value })
                                    }
                                />
                                <TextNumberInputWithLabel
                                    bindValue={tempDetails.waistCircumference}
                                    label={"Waist Circumference (cm)"}
                                    placeholder={"Enter value"}
                                    onInputChange={(e) =>
                                        setTempDetails({ ...tempDetails, waistCircumference: e.target.value })
                                    }
                                />
                                <TextNumberInputWithLabel
                                    bindValue={tempDetails.hipCircumference}
                                    label={"Hip Circumference (cm)"}
                                    placeholder={"Enter value"}
                                    onInputChange={(e) =>
                                        setTempDetails({ ...tempDetails, hipCircumference: e.target.value })
                                    }
                                />
                                <TextNumberInputWithLabel
                                    bindValue={tempDetails.armCircumference}
                                    label={"Arm Circumference (cm)"}
                                    placeholder={"Enter value"}
                                    onInputChange={(e) =>
                                        setTempDetails({ ...tempDetails, armCircumference: e.target.value })
                                    }
                                />
                                <TextNumberInputWithLabel
                                    bindValue={tempDetails.thighCircumference}
                                    label={"Thigh Circumference (cm)"}
                                    placeholder={"Enter value"}
                                    onInputChange={(e) =>
                                        setTempDetails({ ...tempDetails, thighCircumference: e.target.value })
                                    }
                                />
                            </Stack>
                        </Grid>
                        <Stack spacing={20} direction="row" className="horizontal-stack">
                            <BasicConfirmationModal
                                buttonStyle={"background-orange"}
                                openModalButtonLabel={"Cancel"}
                                modalHeader={"Cancel Body Composition"}
                                modalBody={"Are you sure you want to cancel tracking a new body composition?"}
                                modalConfirmationButtonLabel={"Cancel"}
                                actionOnClick={handleCancel}
                            />
                            <BasicConfirmationModal
                                buttonStyle={"background-green"}
                                openModalButtonLabel={"Save"}
                                modalHeader={"Save Body Composition"}
                                modalBody={"Are you sure you want to save this body composition?"}
                                modalConfirmationButtonLabel={"Save"}
                                actionOnClick={handleModalSave}
                            />
                        </Stack>
                    </Stack>
                </Sheet>
            </Modal>
            <Stack spacing={1} className='my-2'>
                <Typography className='general-label'>Body Composition History</Typography>
                <Container style={"background-purple-light p-3 pb-0 mb-5"} children={
                    userBodyComposition.length > 0 ? (
                        userBodyComposition.map(composition => (
                            <BodyCompositionCard key={composition.id} body={composition} />
                        ))
                    ) : (
                        <Container style={"background-purple-light p-3 mb-5"}>
                            <Typography>No body composition data tracked.</Typography>
                        </Container>
                    )
                } />
            </Stack>
        </>
    );
};

export default BodyTab;
