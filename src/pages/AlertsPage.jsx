import React, { useState } from 'react';
import ButtonFilled from '../components/ButtonFilled';
import EditModal from '../components/Modals/EditModal';
import { Modal, Sheet, Stack } from '@mui/joy';
import Container from '../components/Container';
import AlertDetails from '../Pages/Logbook/AlertTab/Alertdetails';
import BasicConfirmationModal from "../components/modals/basicConfirmationModal";
import AppBottomNavigation from "../components/AppBottomNavigation";

const ReminderForm = ({ onAddReminder }) => {
  const [time, setTime] = useState('');
  const [frequency, setFrequency] = useState('');
  const [message, setMessage] = useState('');

  const handleAddReminder = () => {
    if (time && frequency && message) {
      onAddReminder({ time, frequency, message, completed: false });
      // Clear form fields
      setTime('');
      setFrequency('');
      setMessage('');
    }
  };

  return (
    <div>
      <label>Time: <input type="text" value={time} onChange={(e) => setTime(e.target.value)} /></label>
      <label>Frequency: <input type="text" value={frequency} onChange={(e) => setFrequency(e.target.value)} /></label>
      <label>Message: <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} /></label>
      <button onClick={handleAddReminder}>Add Reminder</button>
    </div>
  );
};

export const AlertsPage = () => {
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isStartModalOpen, setStartModalOpen] = useState(false);
  const [reminders, setReminders] = useState([
    { time: '8:00 AM', message: 'Drink water', frequency: 'Every Monday', completed: false },
    { time: '6:00 PM', message: 'Yoga class', frequency: 'Every Tuesday, Thursday', completed: false },
    // Add more reminders as needed
  ]);

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

  const handleAddReminder = (newReminder) => {
    setReminders([...reminders, newReminder]);
  };

  return (
    <>
      {/* Heading and Date */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1>Alerts</h1>
        </div>
        <p><strong>{new Date().toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</strong></p>
      </div>

      {/* Create a New Reminder */}
      <h6 className='general-label'> <em>Create a New Reminder</em></h6>

      {/* Start button */}
      <ButtonFilled
        style="background-green"
        text="Start"
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
            style={"background-blue-light m-0"}
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

      {/* Reminder History */}
      <div style={{ marginTop: '20px' }}>
        <p className="general-label"> Reminders </p>
        {/* Check off the reminder to mark it as complete! */}
        <p className="general-label" style={{ marginTop: '10px' }}> Check off the reminder to mark it as complete! </p>
        {reminders.map((reminder, index) => (
          <div key={index} className="toast-notification">
            <div
              style={{
                backgroundColor: '#4CAF50', // Updated to the green color of the start button
                border: '1px solid #45A049',
                borderRadius: '8px',
                padding: '15px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
              }}
            >
              <label>
                <input
                  type="checkbox"
                  checked={reminder.completed}
                  onChange={() => {
                    const updatedReminders = [...reminders];
                    updatedReminders[index].completed = !updatedReminders[index].completed;
                    setReminders(updatedReminders);
                  }}
                />
                <span style={{ marginLeft: '10px' }}>
                  <strong>{reminder.time}</strong> - {reminder.message}
                </span>
              </label>
              <p style={{ fontSize: '14px', color: '#555' }}>{reminder.frequency}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Reminder Form */}
      <ReminderForm onAddReminder={handleAddReminder} />

      <AppBottomNavigation state={"alerts"} />
    </>
  );
};
