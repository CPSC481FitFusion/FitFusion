import { Modal, Sheet, Stack } from '@mui/joy';
import React, { useState } from 'react';
import AppBottomNavigation from "../../components/AppBottomNavigation";
import ButtonFilled from '../../components/ButtonFilled';
import Container from '../../components/Container';
import BasicConfirmationModal from "../../components/modals/basicConfirmationModal";
import AlertDetails from './Alertdetails';
import { getCurrentUsername } from '../../utils/userUtils';
import { Typography } from '@mui/material';
import AlertHistoryCard from './AlertHistoryCard';

const AlertsPage = () => {
  const [isStartModalOpen, setStartModalOpen] = useState(false);

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

  return (
    <>
      {/* Heading and Date */}
      <Typography className="header-35">Alerts</Typography>
      <Typography className="purple-text ">
        {new Date().toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
      </Typography>
      <hr></hr>

      {/* Start button */}
      <ButtonFilled
        style="background-green"
        text="Set a Reminder"
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
                <AlertDetails />
              </>
            }
          />
          <Stack spacing={20} direction="row" className="horizontal-stack">
            <BasicConfirmationModal
              buttonStyle={"background-orange"}
              openModalButtonLabel={"Remove "}
              modalHeader={" Go back"}
              modalBody={"Are you sure you want to not proceed with setting up a new reminder?"}
              modalConfirmationButtonLabel={" Remove"}
              actionOnClick={() => handleCloseStartModal()}
            />
            <BasicConfirmationModal
              buttonStyle={"background-green"}
              openModalButtonLabel={"Save"}
              modalHeader={" Setting up"}
              modalBody={"Are you sure you want to set up a new reminder?"}
              modalConfirmationButtonLabel={" Save"}
              actionOnClick={() => handleCloseStartModal()}
            />
          </Stack>
        </Sheet>
      </Modal>

      {/* Goal History */}
      <Stack spacing={1} className='my-2 mt-4'>
        <Typography className='general-label'>Daily Reminders</Typography>
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