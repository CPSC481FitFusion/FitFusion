import React, { useState } from "react";
import { Typography, Stack } from "@mui/joy";
import AppBottomNavigation from "../components/AppBottomNavigation";
import {
  getCurrentUsername,
  getLoggedInUserData,
  updateUserSettings,
} from "../utils/userUtils";
import ButtonFilled from "../components/ButtonFilled";
import EditModal from "../components/Modals/EditModal";
import BasicConfirmationModal from "../components/modals/basicConfirmationModal";
import TextInputWithLabel from "../components/TextInputWithLabel";
import TextNumberInputWithLabel from "../components/TextNumberInputWithLabel";
import { useNavigate } from "react-router";

export const SettingsPage = () => {
  // Fetch current user's username and data
  const currentUser = getCurrentUsername();
  const currentUserData = getLoggedInUserData();
  const navigate = useNavigate(); // React Router's navigate function

  // State to temporarily hold user's details for editing
  const [tempDetails, setTempDetails] = useState({
    username: currentUser || "",
    password: currentUserData.password || "",
    settings:
      currentUserData.settings.length > 0 ? currentUserData.settings[0] : {},
  });

  // Handler to update temporary user details state
  const handleDetailsChange = (field, value) => {
    setTempDetails({
      ...tempDetails,
      settings: { ...tempDetails.settings, [field]: value },
    });
  };

  // Function to update user data in local storage
  const saveUserSettings = () => {
    updateUserSettings(currentUser, tempDetails);
  };

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
        {/* Edit Password */}
        <EditModal
          editButtonClass={"purple-border-button w-100"}
          editButtonLabel={"Change Password"}
          modalHeader={"Change Password"}
          modalBody={
            <>
              <TextInputWithLabel
                label={"Password"}
                placeholder={"Click to enter your Password"}
                isPassword={true}
                onChange={(e) =>
                  handleDetailsChange("password", e.target.value)
                }
              />
            </>
          }
          onSave={saveUserSettings}
        />
        {/* Edit Logbook Default Tab */}
        <EditModal
          editButtonClass={"purple-border-button w-100"}
          editButtonLabel={"Change Logbook Default Tab"}
          modalHeader={"Logbook Default Tab"}
          modalBody={
            // Make this into a select option for 1, 2, 3
            <TextNumberInputWithLabel
              label={"Default Logbook Tab"}
              placeholder={"Enter Default Logbook Tab"}
              value={tempDetails.settings.defaultLogbookTab}
              onChange={(e) =>
                handleDetailsChange("defaultLogbookTab", e.target.value)
              }
            />
          }
          onSave={saveUserSettings}
        />
        {/* Edit Default Metrics */}
        <EditModal
          editButtonClass={"purple-border-button w-100"}
          editButtonLabel={"Change Default Metrics"}
          modalHeader={"Default Metrics"}
          modalBody={
            // Make this into a select option for 1, 2, 3
            <>
              <TextInputWithLabel
                label={"Default Weight Metric"}
                placeholder={"Enter Default Weight Metric"}
                value={tempDetails.settings.defaultWeightMetric}
                onChange={(e) =>
                  handleDetailsChange("defaultWeightMetric", e.target.value)
                }
              />
              <TextInputWithLabel
                label={"Default Measurement Metric"}
                placeholder={"Enter Default Measurement Metric"}
                value={tempDetails.settings.defaultMeasurementMetric}
                onChange={(e) =>
                  handleDetailsChange(
                    "defaultMeasurementMetric",
                    e.target.value
                  )
                }
              />
            </>
          }
          onSave={saveUserSettings}
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
