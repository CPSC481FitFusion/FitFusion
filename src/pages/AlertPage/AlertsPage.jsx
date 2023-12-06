import React, { useState, useEffect } from 'react';
import { Modal, Stack, Typography, Snackbar, Alert, IconButton } from '@mui/material';
import AlertDetails from './Alertdetails';
import AlertHistoryCard from './AlertHistoryCard';
import AppBottomNavigation from '../../components/AppBottomNavigation';
import ButtonFilled from '../../components/ButtonFilled';
import BasicConfirmationModal from '../../components/modals/basicConfirmationModal';
import { getCurrentUsername } from '../../utils/userUtils';
import ErrorSnackbar from '../../components/ErrorSnackbar';
import Container from '../../components/Container';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'; // Import the icon
import { Sheet } from '@mui/joy';
import CloseIcon from '@mui/icons-material/Close';

const AlertsPage = () => {
  const [isStartModalOpen, setStartModalOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [reminderName, setReminderName] = useState("");
  const [lastAddedAlert, setLastAddedAlert] = useState(null);
  const [showAlertSnackbar, setShowAlertSnackbar] = useState(false);

  // Handle the closing of the snackbar
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  // This function will be called from AlertDetails when the reminder name changes
  const handleReminderNameChange = (newName) => {
    setReminderName(newName);
  };

  // Hardcoded goals data for demonstration purposes
  const hardcodedAlertsData = {
    "johndoe": [
      { time: '7:10 AM', message: 'Take vitamins', completed: true },
      { time: '8:20 AM', message: 'Morning stretch routine', completed: true },
      { time: '12:00 PM', message: 'Lunchtime walk', completed: false },
      { time: '3:30 PM', message: 'Afternoon meditation', completed: false },
      { time: '6:00 PM', message: 'Evening workout session', completed: false }
    ],
    "janedoe": [
      { time: '7:10 AM', message: 'Drink Water', completed: true },
      { time: '8:00 PM', message: 'Drink Water', completed: true },
    ],
  };
  const currentUser = getCurrentUsername();
  const userAlerts = hardcodedAlertsData[currentUser] || [];

  const handleOpenStartModal = () => {
    setStartModalOpen(true);
  };

  const handleCloseStartModal = () => {
    setStartModalOpen(false);
  };

  const handleModalSave = () => {
    if (!reminderName || reminderName.trim() === "") {
      setSnackbarOpen(true);
      setSnackbarMessage("Alert Name is required.");
      return;
    }
    setLastAddedAlert(reminderName); // Update the last added alert
    setReminderName(""); // Clear the reminder name
    setStartModalOpen(false);
    setTimeout(() => setShowAlertSnackbar(true), 3000); // Delay showing the snackbar
  };

  const handleAlertClose = (event, reason) => {
    if (reason === "clickaway" || reason === 'escapeKeyDown')
      return;
    setShowAlertSnackbar(false);
  }
  return (
    <>
      {/* Snackbar for showing the latest added alert */}
      <Snackbar
        open={showAlertSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={handleAlertClose}
        ClickAwayListenerProps={{ mouseEvent: false }}
      >
        <Alert
          icon={<NotificationsActiveIcon className='text-white' />}
          severity="success"
          className='w-100 background-purple-dark'
        >
          <Stack direction={"row"}>
            <Stack>
              <Typography className='text-white'>
                {lastAddedAlert}
              </Typography>
            </Stack>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleAlertClose}
              sx={{ color: 'white', position: 'absolute', right: 8, top: 8 }}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Alert>
      </Snackbar >

      {/* Heading and Date */}
      < Typography className="header-35" > Alerts</Typography >
      <Typography className="purple-text ">
        {new Date().toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
      </Typography>
      <hr></hr>

      {/* Start button */}
      <ButtonFilled
        style="background-green"
        text="Set an Alert"
        onClick={handleOpenStartModal}
      />

      {/* Start Modal */}
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={isStartModalOpen}
        onClose={handleCloseStartModal}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Sheet
          variant="outlined"
          className="full-page-modal-container"
        >
          {/* Additional content can be added here */}
          <Container
            style={"background-blue-light m-0 p-0"}
            children={
              <>
                {/* On invalid empty attempt */}
                <ErrorSnackbar
                  isOpen={snackbarOpen}
                  snackbarMessage={snackbarMessage}
                  onClose={handleSnackbarClose} />
                <AlertDetails name={reminderName} onReminderNameChanged={handleReminderNameChange} />              </>
            }
          />
          <Stack spacing={20} direction="row" className="horizontal-stack">
            <BasicConfirmationModal
              buttonStyle={"background-orange"}
              openModalButtonLabel={"Cancel "}
              modalHeader={"Cancelling Alert"}
              modalBody={"Are you sure you want to cancel setting a new alert? All current progress will be lost."}
              modalConfirmationButtonLabel={"Cancel"}
              actionOnClick={() => handleCloseStartModal()}
            />
            <BasicConfirmationModal
              buttonStyle={"background-green"}
              openModalButtonLabel={"Save"}
              modalHeader={"Set Alert"}
              modalBody={"Are you sure you want to set up a new alert?"}
              modalConfirmationButtonLabel={"Confirm Set"}
              actionOnClick={() => handleModalSave()}
            />
          </Stack>
        </Sheet>
      </Modal>

      {/* Goal History */}
      <Stack spacing={1} className='my-2 mt-4'>
        <Typography className='general-label'>Daily Alerts</Typography>
        <Typography className='purple-text-small'>Activate an alert to receive notifications.</Typography>
        <Container style={"background-purple-light p-3 pb-0 mb-5"} children={
          <>
            {userAlerts.length > 0 ? (
              userAlerts.map((alert, index) => (
                <AlertHistoryCard key={index} {...alert} />
              ))
            ) : (
              <>
                <Typography className='general-label'>
                  No alerts set.
                </Typography>
                <Typography>
                  Track a body compositions for it to appear here!
                </Typography>
              </>
            )}
          </>
        }
        />
      </Stack>
      <AppBottomNavigation state={"alerts"} />
    </>
  );
};

export default AlertsPage;