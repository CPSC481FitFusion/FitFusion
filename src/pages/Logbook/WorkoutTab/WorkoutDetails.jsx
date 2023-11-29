import { Stack, TextField, Typography } from "@mui/material";
import TextInputWithLabel from "../../../components/TextInputWithLabel";
import TextareaInputWithLabel from "../../../components/TextareaInputWithLabel";
import EditModal from "../../../components/Modals/EditModal";
import { useState } from "react";
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { format } from 'date-fns';
import { DatePicker } from "@mui/x-date-pickers";

const WorkoutDetails = (onRemove) => {
    const [workoutName, setWorkoutName] = useState("");
    const [date, setDate] = useState(new Date());
    const [startTime, setStartTime] = useState(new Date());
    const [endTime, setEndTime] = useState(new Date());
    const [notes, setNotes] = useState("");

    return (
        <>
            <Stack
                direction="row"
                className="horizontal-stack pb-1">
                <Typography
                    className="header-20 align-bottom">
                    {workoutName}
                </Typography>
                <EditModal
                    editButtonLabel={"Edit"}
                    modalHeader="Workout Details"
                    isOpen={true}
                    onClickRemove={onRemove}
                    modalBody={(
                        <Stack className="input-container my-1 text-start w-100">
                            <TextInputWithLabel
                                bindValue={workoutName}
                                label={"Workout Name *"}
                                placeholder={"Click to enter Workout Name"}
                                onInputChange={(e) =>
                                    setWorkoutName(e.target.value
                                    )}
                            />

                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <Stack direction='column' spacing={2}>
                                    <div>
                                        <h6 className='general-label'>Date</h6>
                                        <DatePicker
                                            className="time-picker"
                                            value={date}
                                            onChange={(newDate) =>
                                                setDate(newDate)}
                                        />
                                    </div>
                                    <div>
                                        <h6 className='general-label'>Start Time</h6>
                                        <MobileTimePicker
                                            className="time-picker"
                                            value={startTime}
                                            onChange={(newStartTime) =>
                                                setStartTime(newStartTime)}
                                        />
                                    </div>
                                    <div>
                                        <h6 className='general-label'>End Time</h6>
                                        <MobileTimePicker
                                            className="time-picker mb-3"
                                            value={endTime}
                                            onChange={(newEndTime) =>
                                                setEndTime(newEndTime)}
                                        />
                                    </div>
                                </Stack>
                            </LocalizationProvider>
                            <TextareaInputWithLabel
                                bindValue={notes}
                                label={"Notes"}
                                placeholder={"Click to enter Notes"}
                                onInputChange={(e) =>
                                    setNotes(e.target.value
                                    )}
                            />
                        </Stack>
                    )}>
                </EditModal>
            </Stack>
            <Stack spacing={2} direction="row" className="pb-2">
                <Stack direction="column">
                    <Typography fontWeight={"bold"}>
                        Date:
                    </Typography>
                    <Typography fontWeight={"bold"}>
                        Time:
                    </Typography>
                    <Typography fontWeight={"bold"}>
                        Notes:
                    </Typography>
                </Stack>
                <Stack direction="column">
                    <Typography>
                        {date ? date.toLocaleDateString() : ''}
                    </Typography>
                    <Typography>
                        {startTime ? format(startTime, 'hh:mm a') : ''} to {endTime ? format(endTime, 'hh:mm a') : ''}
                    </Typography>
                    <Typography fontStyle={"italic"}>
                        {notes}
                    </Typography>
                </Stack>
            </Stack>
        </>
    );
};

export default WorkoutDetails;