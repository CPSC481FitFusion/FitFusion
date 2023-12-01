import React, { useState } from 'react';
import ButtonFilled from '../../../components/ButtonFilled';
import EditModal from '../../../components/Modals/EditModal';
import ControlledCheckbox from '../../../components/ControlledCheckbox';
import { Modal, Sheet, Stack } from '@mui/joy';
import BasicConfirmationModal from '../../../components/Modals/BasicConfirmationModal';
import Container from '../../../components/Container';
import GoalDetails from './Goalsdetails';

const GoalsTab = () => {
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [isStartModalOpen, setStartModalOpen] = useState(false);
    const [goalName, setGoalName] = useState(""); // State to store the goal name

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
    
    const handleGoalNameChange = (newName) => {
        setGoalName(newName);
      };

    return (
        <>
            <h6 className='general-label'>Start New Goal</h6>

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
                                <GoalDetails onGoalNameChange={handleGoalNameChange} />
                            </>
                        }
                    />
                    <Stack spacing={20} direction="row" className="horizontal-stack">
                        <BasicConfirmationModal
                            buttonStyle={"background-orange"}
                            openModalButtonLabel={"Cancel"}
                            modalHeader={"Cancel Start"}
                            modalBody={"Are you sure you want to cancel starting a new goal?"}
                            modalConfirmationButtonLabel={"Cancel Start"}
                            actionOnClick={() => handleCloseStartModal()}
                        />
                        <BasicConfirmationModal
                            buttonStyle={"background-green"}
                            openModalButtonLabel={"Confirm"}
                            modalHeader={"Confirm Start"}
                            modalBody={"Are you sure you want to start a new goal?"}
                            modalConfirmationButtonLabel={"Confirm Start"}
                            actionOnClick={() => handleCloseStartModal()}
                        />
                    </Stack>
                </Sheet>
            </Modal>

            {/* Goal History */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
                <p className="general-label">Goal History</p>


                {/* Right side: Square Edit Details button */}
                <div className="see-all">
                    <div className="overlap-5">
                        {/* Pass relevant props to the EditModal */}
                        <EditModal
                            isIcon={true}
                            isOpen={false}
                            editButtonLabel="Edit Details"
                            modalHeader="Edit Goal Details"
                            modalBody="Attend Zumba Class"
                            onClickRemove={() => {/* Implement your remove logic */ }}
                            onClickSave={() => {/* Implement your save logic */ }}
                        />
                    </div>
                </div>
            </div>
            <ControlledCheckbox goalName={goalName} />
        </>
    );
};

export default GoalsTab;


