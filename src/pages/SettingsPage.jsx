import { Stack, Typography } from "@mui/joy";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import AppBottomNavigation from "../components/AppBottomNavigation";
import ErrorSnackbar from "../components/ErrorSnackbar";
import EditModal from "../components/Modals/EditModal";
import TextInputWithLabel from "../components/TextInputWithLabel";
import TextNumberInputWithLabel from "../components/TextNumberInputWithLabel";
import BasicConfirmationModal from "../components/modals/basicConfirmationModal";
import {
  getCurrentUsername,
  getLoggedInUserData
} from "../utils/userUtils";

export const SettingsPage = () => {
  // Fetch current user's username and data
  const currentUser = getCurrentUsername();
  const navigate = useNavigate(); // React Router's navigate function
  const [tempDetails, setTempDetails] = useState({
    username: "",
    password: "",
    settings: {},
  });
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
    const currentUserData = getLoggedInUserData();
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
              />
            </Stack>
          }
        />
        {/* Edit Logbook Default Tab */}
        <EditModal
          editButtonClass={"purple-border-button w-100"}
          editButtonLabel={"Change Logbook Default Tab"}
          modalHeader={"Logbook Default Tab"}
          modalBody={
            // Make this into a select option for 1, 2, 3
            <Stack className={"mb-4"}>
              <TextNumberInputWithLabel
                label={"Default Logbook Tab"}
                placeholder={"Enter Default Logbook Tab"}
                bindValue={tempDetails.settings.defaultLogbookTab}
                onInputChange={(e) =>
                  handleDetailsChange("defaultLogbookTab", e.target.value)
                }
              />
            </Stack>
          }
          onSave={validatePassword}
        />
        {/* Edit Default Metrics */}
        <EditModal
          editButtonClass={"purple-border-button w-100"}
          editButtonLabel={"Change Default Metrics"}
          modalHeader={"Default Metrics"}
          modalBody={
            // Make this into a select option for 1, 2, 3
            <Stack className={"mb-4"}>
              <TextInputWithLabel
                label={"Default Weight Metric"}
                placeholder={"Enter Default Weight Metric"}
                bindValue={tempDetails.settings.defaultWeightMetric}
                onInputChange={(e) =>
                  handleDetailsChange("defaultWeightMetric", e.target.value)
                }
              />
              <TextInputWithLabel
                label={"Default Measurement Metric"}
                placeholder={"Enter Default Measurement Metric"}
                bindValue={tempDetails.settings.defaultMeasurementMetric}
                onInputChange={(e) =>
                  handleDetailsChange(
                    "defaultMeasurementMetric",
                    e.target.value
                  )
                }
              />
            </Stack>
          }
          onSave={validatePassword}
        />
        {/* Logout Confirmation */}
        <BasicConfirmationModal
          buttonStyle={"background-green"}
          openModalButtonLabel={"Logout"}
          modalHeader={"Logout"}
          modalBody={"Are you sure you want to logout?"}
          modalConfirmationButtonLabel={"Logout"}
          actionOnClick={handleLogout}
        />
      </Stack>
      <AppBottomNavigation state={"settings"} />
    </>
  );
};

export default SettingsPage;
