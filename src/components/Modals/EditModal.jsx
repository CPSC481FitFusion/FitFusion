import React, { useState, useEffect } from 'react';
import { Modal, ModalClose, Typography, Sheet } from '@mui/joy';
import ButtonFilled from '../ButtonFilled';
import { Button, IconButton, Stack } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const EditModal = ({ isIcon, editButtonLabel, modalHeader, modalBody, onClickRemove, onClickSave }) => {
  const [open, setOpen] = React.useState(false);
  const [editedDetails, setEditedDetails] = useState({
    workoutName: '',
    date: '',
    startTime: '',
    notes: '',
  });

  useEffect(() => {
    // Update the editedDetails state when the modal is opened
    if (open) {
      setEditedDetails({
        workoutName: modalBody.props.children[0].props.value || '',
        date: modalBody.props.children[1].props.value || '',
        startTime: modalBody.props.children[2].props.value || '',
        notes: modalBody.props.children[3].props.value || '',
      });
    }
  }, [open, modalBody]);

  let button = (<></>);
  if (isIcon) {
    button = (
      <IconButton onClick={() => setOpen(true)}>
        <EditIcon />
      </IconButton>
    );
  } else {
    button = (
      <Button
        variant='outlined'
        className='purple-border-button'
        onClick={() => setOpen(true)}
      >
        {editButtonLabel}
      </Button>
    );
  }

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };

  const handleInputChange = (label, value) => {
    setEditedDetails((prevDetails) => ({ ...prevDetails, [label]: value }));
  };

  const handleRemove = () => {
    if (onClickRemove) {
      onClickRemove();
    }
    // Additional logic for removing item if needed
    setOpen(false);
  };

  const handleSave = () => {
    // Call the onClickSave function passed as a prop and pass the edited details
    if (onClickSave) {
      onClickSave(editedDetails);
    }
    // Additional logic for saving changes if needed
    setOpen(false);
  };

  return (
    <>
      {button}
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={handleClose}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Sheet
          variant="outlined"
          sx={{
            width: '90%',
            borderRadius: 'md',
            p: 3,
            boxShadow: 'lg',
          }}
        >
          <ModalClose variant="outlined" sx={{ m: 1 }} />
          <Stack direction="column" alignItems="center">
            <Typography
              component="h2"
              id="modal-title"
              level="h4"
              className='header-25'
              mb={1}
            >
              {modalHeader}
            </Typography>
            <div>
              {/* Render the modalBody JSX passed as a prop */}
              {React.Children.map(modalBody.props.children, (child, index) => {
                // Clone each child element with added onChange prop
                return React.cloneElement(child, {
                  onChange: (value) => handleInputChange(child.props.label, value),
                  value: editedDetails[child.props.label] || '',
                });
              })}
            </div>
            <Stack direction="row" spacing={1} className='w-100 mt-3'>
              <Button
                variant='outlined'
                className='red-border-button'
                onClick={handleRemove}
              >
                Remove
              </Button>
              <ButtonFilled
                text="Save"
                style="background-green"
                onClick={handleSave}
              />
            </Stack>
          </Stack>
        </Sheet>
      </Modal>
    </>
  );
};

export default EditModal;
