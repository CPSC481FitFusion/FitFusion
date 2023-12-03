import AppBottomNavigation from "../components/AppBottomNavigation";
import React, { useState } from 'react';
import ButtonFilled from '../components/ButtonFilled';
import EditModal from '../components/Modals/EditModal';
import { Modal, Sheet, Stack } from '@mui/joy';
import BasicConfirmationModal from '../components/Modals/BasicConfirmationModal';
import Container from '../components/Container';
import AlertDetails from '../Pages/Logbook/AlertTab/Alertdetails';
import { useToasts } from 'react-toast-notifications';

export const AlertsPage = () => {
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [isStartModalOpen, setStartModalOpen] = useState(false);

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

    const randomNotifications = [
        "Don't forget to drink water!",
        "Time to water your plants!",
        "Take a break and stretch!",
        "Reminder: Complete your daily tasks!",
        // Add more random notifications as needed
    ];

    // Function to generate a random notification
    const getRandomNotification = () => {
        const randomIndex = Math.floor(Math.random() * randomNotifications.length);
        return randomNotifications[randomIndex];
    };

    // Get current date
    const currentDate = new Date();
    const formattedDate = currentDate.toDateString();

    return (
        <>
            <h6 className='general-label'> Create a New Reminder</h6>

            {/* Display current date */}
            <p>{formattedDate}</p>

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
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
                <p className="general-label"> Reminders </p>
                <p className="general-label"> Check off the reminder to mark of as complete! </p>

                

                {/* Right side: Square Edit Details button */}
                <div className="see-all">
                    <div className="overlap-5">
                        {/* Pass relevant props to the EditModal */}
                        <EditModal
                            isIcon={true}
                            isOpen={false}
                            editButtonLabel="Edit Remiders"
                            modalHeader="Edit Reminder Details"
                            // modalBody="Attending Zumba Class"
                            onClickRemove={() => {/* Implement your remove logic */ }}
                            onClickSave={() => {/* Implement your save logic */ }}
                        />
                    </div>
                </div>


                 {/* Display random notifications as checkboxes */}
            
            </div>

            <div style={{ marginTop: '20px' }}>
                <p className="general-label">Random Notifications</p>
                {randomNotifications.map((notification, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                        <input type="checkbox" id={`checkbox-${index}`} />
                        <label htmlFor={`checkbox-${index}`} style={{ marginLeft: '10px' }}>
                            {notification}
                        </label>
                    </div>
                ))}
            </div>
            <AppBottomNavigation state={"alerts"} />
        </>
    );
};
