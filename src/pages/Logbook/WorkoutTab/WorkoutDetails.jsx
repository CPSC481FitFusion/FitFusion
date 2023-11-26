import { Stack, Typography } from "@mui/material";
import TextInputWithLabel from "../../../components/TextInputWithLabel";
import TextareaInputWithLabel from "../../../components/TextareaInputWithLabel";
import EditModal from "../../../components/Modals/EditModal";
import { useState } from "react";

const WorkoutDetails = (onRemove) => {
    const [workoutName, setWorkoutName] = useState("");
    const [date, setDate] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
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
                            <TextInputWithLabel
                                bindValue={date}
                                label={"Date (mm/dd/yyyy) *"}
                                placeholder={"Click to enter Date"}
                                onInputChange={(e) =>
                                    setDate(e.target.value
                                    )}
                            />
                            <TextInputWithLabel
                                bindValue={startTime}
                                label={"Start Time (##:## AM/PM) *"}
                                placeholder={"Click to enter Start Time"}
                                onInputChange={(e) =>
                                    setStartTime(e.target.value
                                    )}
                            />
                            <TextInputWithLabel
                                bindValue={endTime}
                                label={"End Time (##:## AM/PM)"}
                                placeholder={"Click to enter End Time"}
                                onInputChange={(e) =>
                                    setEndTime(e.target.value
                                    )}
                            />
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
            <Stack direction="row" className="horizontal-stack pb-1">
                <Typography>
                    {date}
                </Typography>
                <Typography>
                    {startTime}
                </Typography>
            </Stack>
            <Stack direction="row" className="horizontal-stack">
                <Typography fontStyle={"italic"}>
                    {notes}
                </Typography>
            </Stack>
        </>
    );
};

export default WorkoutDetails;