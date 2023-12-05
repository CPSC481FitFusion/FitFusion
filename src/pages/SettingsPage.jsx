import { Stack, Typography } from "@mui/joy";
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import React, { useState } from "react";
import { useNavigate } from "react-router";
import AppBottomNavigation from "../components/AppBottomNavigation";
import ErrorSnackbar from "../components/ErrorSnackbar";
import EditModal from "../components/Modals/EditModal";
import TextInputWithLabel from "../components/TextInputWithLabel";
import BasicConfirmationModal from "../components/modals/basicConfirmationModal";
import {
  getCurrentUsername,
  getLoggedInUserData
} from "../utils/userUtils";

export const SettingsPage = () => {
  // Fetch current user's username and data
  const currentUser = getCurrentUsername();
  const currentUserData = getLoggedInUserData();
  const navigate = useNavigate(); // React Router's navigate function
  const [tempDetails, setTempDetails] = useState({
    username: "",
    password: "",
    settings: {},
  });
  // New state for managing Logbook Default Tab radio group
  const [logbookDefaultTab, setLogbookDefaultTab] = useState(currentUserData.settings[0].defaultLogbookTab || "1");
  // New state for managing Default Weight and Measurement Metrics
  const [defaultWeightMetric, setDefaultWeightMetric] = useState(currentUserData.settings[0].defaultWeightMetric || "lb(s)");
  const [defaultMeasurementMetric, setDefaultMeasurementMetric] = useState(currentUserData.settings[0].defaultMeasurementMetric || "inch(es)");


  // State for showing the invalid login info snackbar
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState(false);

  // Handle Close for inalid login error snackbar
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  // Handler to update temporary user details state
  const handleDetailsChange = (field, value) => {
    if (field === "password") {
      // Directly update the password field
      setTempDetails({
        ...tempDetails,
        password: value,
      });
    } else {
      // Update the settings field
      setTempDetails({
        ...tempDetails,
        settings: { ...tempDetails.settings, [field]: value },
      });
    }
  };

  // Function to update user data in local storage
  const validatePassword = () => {
    // Check if the password is empty
    if (!tempDetails.password || tempDetails.password.trim() === "") {
      setSnackbarOpen(true);
      setSnackbarMessage("Password is required. Cannot be empty.");
      return;
    }

    // Check if the new password is the same as the current password
    if (currentUserData && tempDetails.password === currentUserData.password) {
      setSnackbarOpen(true);
      setSnackbarMessage("New password cannot be the same as the current password.");
      return;
    }
    // Commenting out for frontend only
    // updateUserSettings(currentUser, tempDetails);
    return true;
  };

  const onPasswordSave = () => {
    // Commenting out for frontend only
    // updateUserSettings(currentUser, tempDetails);

    // Reset password
    setTempDetails({
      ...tempDetails,
      password: "",
    });
  }
  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem("userLoggedIn");
    window.dispatchEvent(new Event("loginChange")); // Dispatch an event to notify that the login status has changed
    navigate("/"); // Redirect to the Welcome page
  };

  return (
    <>
      <Typography className="header-35">User Settings</Typography>
      <Typography className="purple-text ">Hello, {currentUser}!</Typography>
      <hr></hr>
      <Stack spacing={2}>
        {/* On invalid attempt */}
        <ErrorSnackbar
          isOpen={snackbarOpen}
          snackbarMessage={snackbarMessage}
          onClose={handleSnackbarClose}
        />
        {/* Edit Password */}
        <BasicConfirmationModal
          buttonStyle={"background-grey"}
          openModalButtonLabel={"Change Password"}
          modalConfirmationButtonLabel={"Save"}
          modalConfirmationButtonStyle={"background-green w-100"}
          actionOnClick={onPasswordSave}
          modalHeader={"Change Password"}
          validation={validatePassword}
          modalBody={
            <Stack className={"mb-4"}>
              <TextInputWithLabel
                label={"Password"}
                placeholder={"Click to enter your Password"}
                isPassword={true}
                onInputChange={(e) =>
                  handleDetailsChange("password", e.target.value)
                }
                isRequired={true}
              />
            </Stack>
          }
        />
        {/* Edit Logbook Default Tab */}
        <BasicConfirmationModal
          buttonStyle={"background-grey"}
          openModalButtonLabel={"Change Logbook Default Page"}
          modalConfirmationButtonLabel={"Save"}
          modalConfirmationButtonStyle={"background-green w-100"}
          actionOnClick={() => { }}
          modalHeader={"Logbook Default Page"}
          modalBody={
            <FormControl component="fieldset" className={"mb-4"}>
              <RadioGroup
                aria-label="logbook-tab"
                name="logbook-tab"
                value={logbookDefaultTab}
                onChange={(e) => setLogbookDefaultTab(e.target.value)}
              >
                <Typography className="general-label text-start">
                  Default Logbook Page:
                </Typography>
                <FormControlLabel value="1" control={<Radio />} label="Workout Page" />
                <FormControlLabel value="2" control={<Radio />} label="Body Composition Page" />
                <FormControlLabel value="3" control={<Radio />} label="Goal Page" />
              </RadioGroup>
            </FormControl>
          }
        />
        {/* Edit Default Metrics */}
        <BasicConfirmationModal
          buttonStyle={"background-grey"}
          openModalButtonLabel={"Change Default Metrics"}
          modalConfirmationButtonLabel={"Save"}
          modalConfirmationButtonStyle={"background-green w-100"}
          actionOnClick={() => { }}
          modalHeader={"Default Metrics"}
          modalBody={
            <Stack className={"mb-4"}>
              <Typography className="general-label text-start">Default Weight Metric:</Typography>
              <RadioGroup
                aria-label="default-weight-metric"
                name="default-weight-metric"
                value={defaultWeightMetric}
                onChange={(e) => setDefaultWeightMetric(e.target.value)}
              >
                <FormControlLabel value="lb(s)" control={<Radio />} label="Pounds (lb)" />
                <FormControlLabel value="kg(s)" control={<Radio />} label="Kilograms (kg)" />
              </RadioGroup>

              <Typography className="mt-3 general-label text-start">Default Measurement Metric:</Typography>
              <RadioGroup
                aria-label="default-measurement-metric"
                name="default-measurement-metric"
                value={defaultMeasurementMetric}
                onChange={(e) => setDefaultMeasurementMetric(e.target.value)}
              >
                <FormControlLabel value="inch(es)" control={<Radio />} label="Inches" />
                <FormControlLabel value="cm(es)" control={<Radio />} label="Centimeters" />
              </RadioGroup>
            </Stack>
          }
        />
        {/* Logout Confirmation */}
        <BasicConfirmationModal
          buttonStyle={"background-green"}
          openModalButtonLabel={"Logout"}
          modalHeader={"Logout"}
          modalBody={
            <Typography className="mb-3">
              Are you sure you want to logout?
            </Typography>
          }
          modalConfirmationButtonLabel={"Logout"}
          actionOnClick={handleLogout}
        />
      </Stack>
      <AppBottomNavigation state={"settings"} />
    </>
  );
};

export default SettingsPage;
