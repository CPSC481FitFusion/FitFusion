import React, { useState } from 'react';
import ButtonFilled from "../components/ButtonFilled";
import EditModal from "../components/Modals/EditModal"; // Import your existing EditModal component

export const GoalsPage = () => {
    const [isEditModalOpen, setEditModalOpen] = useState(false);
  
    const handleOpenEditModal = () => {
      setEditModalOpen(true);
    };
  
    const handleCloseEditModal = () => {
      setEditModalOpen(false);
    };
  
    return (
      <>
        <h1 className="header-35">Goals Page</h1>
        <h2 className="header-25">Add a new goal</h2>
  
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
      </>
    );
  };

