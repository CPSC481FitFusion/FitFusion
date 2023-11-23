import React, { useState } from 'react';
import ButtonFilled from '../../components/ButtonFilled';
import EditModal from '../../components/Modals/EditModal';
import ControlledCheckbox from '../../components/checkbox';

const GoalsTab = () => {
    const [isEditModalOpen, setEditModalOpen] = useState(false);

    const handleOpenEditModal = () => {
        setEditModalOpen(true);
    };

    const handleCloseEditModal = () => {
        setEditModalOpen(false);
    };

    return (
        <>
            <h6 className='general-label'>Goals History</h6>

            {/* Start button */}
            <ButtonFilled
                style="background-green"
                text="Start"
            />

            {/* Goal History*/}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
                <p className="general-label">Goal History</p>

                {/* Right side: Square Edit Details button */}
                <div className="see-all">
                    <div className="overlap-5">
                        {/* Pass relevant props to the EditModal */}
                        <EditModal
                            isIcon={true} // You can adjust this based on your design
                            editButtonLabel="Edit Details"
                            modalHeader="Edit Goal Details"
                            modalBody="Edit your goal details..."
                            onClickRemove={() => {/* Implement your remove logic */}}
                            onClickSave={() => {/* Implement your save logic */}}
                        />
                    </div>
                </div>
            </div>
            <ControlledCheckbox />
        </>
    );
};

export default GoalsTab;

