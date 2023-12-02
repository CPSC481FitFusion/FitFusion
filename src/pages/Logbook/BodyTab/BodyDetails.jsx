import { Stack, TextField, Typography } from "@mui/material";
import TextInputWithLabel from "../../../components/TextInputWithLabel";
import TextareaInputWithLabel from "../../../components/TextareaInputWithLabel";
import EditModal from "../../../components/Modals/EditModal";
import { useState } from "react";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from "@mui/x-date-pickers";

const BodyDetails = (onRemove) => {;
    const [date, setDate] = useState(new Date());
    const [weight, setWeight] = useState("");
    const [waistCircumference, setWaistCircumference] = useState("");
    const [hipCircumference, setHipCircumference] = useState("");
    const [armCircumference, setArmCircumference] = useState("");
    const [thighCircumference, setThighCircumference] = useState("");
    const [notes, setNotes] = useState("");

    return (
        <>
            <Stack
                direction="row"
                className="horizontal-stack pb-1">
                <Typography
                    className="header-20 align-bottom">
                    Body Composition
                </Typography>
                <EditModal
                    editButtonLabel={"Edit"}
                    modalHeader="Body Composition Details"
                    isOpen={true}
                    onClickRemove={onRemove}
                    modalBody={(
                        <Stack className="input-container my-1 text-start w-100">
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <div>
                                    <h6 className='general-label'>Date</h6>
                                    <DatePicker
                                        className="time-picker"
                                        value={date}
                                        onChange={(newDate) =>
                                            setDate(newDate)}
                                    />
                                </div>
                            </LocalizationProvider>
                            <TextInputWithLabel
                                bindValue={weight}
                                label={"Weight (lbs)"}
                                placeholder={"Enter value"}
                                onInputChange={(e) =>
                                    setWeight(e.target.value
                                    )}
                            />
                            <TextInputWithLabel
                                bindValue={waistCircumference}
                                label={"Waist Circumference (cm)"}
                                placeholder={"Enter value"}
                                onInputChange={(e) =>
                                    setWaistCircumference(e.target.value
                                    )}
                            />
                            <TextInputWithLabel
                                bindValue={hipCircumference}
                                label={"Hip Circumference (cm)"}
                                placeholder={"Enter value"}
                                onInputChange={(e) =>
                                    setHipCircumference(e.target.value
                                    )}
                            />
                            <TextInputWithLabel
                                bindValue={armCircumference}
                                label={"Arm Circumference (cm)"}
                                placeholder={"Enter value"}
                                onInputChange={(e) =>
                                    setArmCircumference(e.target.value
                                    )}
                            />
                            <TextInputWithLabel
                                bindValue={thighCircumference}
                                label={"Thigh Circumference (cm)"}
                                placeholder={"Enter value"}
                                onInputChange={(e) =>
                                    setThighCircumference(e.target.value
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
            <Stack spacing={2} direction="row" className="pb-2">
                <Stack direction="column">
                    <Typography fontWeight={"bold"}>
                        Date:
                    </Typography>
                    <Typography fontWeight={"bold"}>
                        Notes:
                    </Typography>
                    <Typography fontWeight={"bold"}>
                        Body Weight:
                    </Typography>
                    <Typography fontWeight={"bold"}>
                        Waist Circumference:
                    </Typography>
                    <Typography fontWeight={"bold"}>
                        Hip Circumference:
                    </Typography>
                    <Typography fontWeight={"bold"}>
                        Arm Circumference:
                    </Typography>
                    <Typography fontWeight={"bold"}>
                        Thigh Circumference:
                    </Typography>
                    
                </Stack>
                <Stack direction="column">
                    <Typography>
                        {date ? date.toLocaleDateString() : ''}
                    </Typography>
                    <Typography fontStyle={"italic"}>
                        {notes}
                    </Typography>
                    <Typography>
                        {weight}
                    </Typography>
                    <Typography>
                        {waistCircumference}
                    </Typography>
                    <Typography>
                        {hipCircumference}
                    </Typography>
                    <Typography>
                        {armCircumference}
                    </Typography>
                    <Typography>
                        {thighCircumference}
                    </Typography>
                </Stack>
            </Stack>
        </>
    );
};

export default BodyDetails;