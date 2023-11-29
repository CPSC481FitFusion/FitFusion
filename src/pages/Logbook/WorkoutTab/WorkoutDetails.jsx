import React, { useState } from 'react';
import { Stack, Typography, TextField } from '@mui/material';
import TextInputWithLabel from "../../../components/TextInputWithLabel";
import TextareaInputWithLabel from "../../../components/TextareaInputWithLabel";
import EditModal from "../../../components/Modals/EditModal";
import { MobileTimePicker, DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'; import { format } from 'date-fns';

const WorkoutDetails = ({ workout, onUpdate, onClose }) => {
    // State for handling edit mode
    const [editMode, setEditMode] = useState(true);

    // Temporary state for workout details, used while editing
    const [tempDetails, setTempDetails] = useState({
        name: workout?.name || "",
        date: workout?.date || new Date(),
        startTime: workout?.startTime || new Date(),
        endTime: workout?.endTime || new Date(),
        notes: workout?.notes || ""
    });

    // Handler for saving edited details
    const handleSave = () => {
        onUpdate({ ...workout, ...tempDetails });
        setEditMode(false);
    };

    return (
        <>
            <Stack direction="row" className="horizontal-stack pb-1">
                {/* Displaying workout name */}
                <Typography className="header-20 align-bottom">
                    {tempDetails.name || "New Workout"}
                </Typography>

                {/* Modal for editing workout details */}
                <EditModal
                    editButtonLabel={"Edit"}
                    modalHeader="Workout Details"
                    isOpen={editMode}
                    onOpen={() => setEditMode(true)}
                    onClose={() => setEditMode(false)}
                    onClickRemove={onClose}
                    onSave={handleSave}
                    modalBody={(
                        <Stack className="input-container my-1 text-start w-100">
                            {/* Input fields for editing workout details */}
                            <TextInputWithLabel
                                bindValue={tempDetails.name}
                                label={"Workout Name *"}
                                placeholder={"Click to enter Workout Name"}
                                onInputChange={(e) =>
                                    setTempDetails({ ...tempDetails, name: e.target.value })}
                            />

                            {/* Date and time pickers */}
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <Stack direction='column' spacing={2}>
                                    <div>
                                        <h6 className='general-label'>Date</h6>
                                        <DatePicker
                                            value={tempDetails.date}
                                            className="time-picker"
                                            onChange={(newDate) =>
                                                setTempDetails({ ...tempDetails, date: newDate })}
                                        />
                                    </div>
                                    <div>
                                        <h6 className='general-label'>Start Time</h6>
                                        <MobileTimePicker
                                            value={tempDetails.startTime}
                                            className="time-picker"
                                            onChange={(newStartTime) =>
                                                setTempDetails({ ...tempDetails, startTime: newStartTime })}
                                        />
                                    </div>
                                    <div>
                                        <h6 className='general-label'>End Time</h6>
                                        <MobileTimePicker
                                            value={tempDetails.endTime}
                                            className="time-picker"
                                            onChange={(newEndTime) =>
                                                setTempDetails({ ...tempDetails, endTime: newEndTime })}
                                        />
                                    </div>
                                </Stack>
                            </LocalizationProvider>

                            {/* Textarea for workout notes */}
                            <TextareaInputWithLabel
                                bindValue={tempDetails.notes}
                                label={"Notes"}
                                placeholder={"Click to enter Notes"}
                                onInputChange={(e) =>
                                    setTempDetails({ ...tempDetails, notes: e.target.value })}
                            />
                        </Stack>
                    )}
                />
            </Stack>

            {/* Displaying workout details */}
            <Stack spacing={2} direction="row" className="pb-2">
                <Stack direction="column">
                    <Typography fontWeight={"bold"}>Date:</Typography>
                    <Typography fontWeight={"bold"}>Time:</Typography>
                    <Typography fontWeight={"bold"}>Notes:</Typography>
                </Stack>
                <Stack direction="column">
                    <Typography>{tempDetails.date ? format(tempDetails.date, 'PP') : ''}</Typography>
                    <Typography>
                        {(tempDetails.startTime ? format(tempDetails.startTime, 'p') : '') + " "} to
                        {" " + (tempDetails.endTime ? format(tempDetails.endTime, 'p') : '')}
                    </Typography>
                    <Typography fontStyle={"italic"}>{tempDetails.notes}</Typography>
                </Stack>
            </Stack>
        </>
    );
};

export default WorkoutDetails;
