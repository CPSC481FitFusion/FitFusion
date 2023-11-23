import { Stack, Typography } from "@mui/material";
import TextInputWithLabel from "../../../components/TextInputWithLabel";
import TextareaInputWithLabel from "../../../components/TextareaInputWithLabel";
import EditModal from "../../../components/Modals/EditModal";

const WorkoutDetails = () => {
    return (
        <>
            <Stack direction="row" className="horizontal-stack pb-1">
                <Typography className="header-20 align-bottom">Workout Name</Typography>
                <EditModal
                    editButtonLabel={"Edit"}
                    modalHeader="Edit Workout Details"
                    modalBody={(
                        <Stack className="input-container text-start w-100">
                            <TextInputWithLabel
                                label={"Workout Name"}
                                placeholder={"Click to enter Workout Name"}
                            />
                            <TextInputWithLabel
                                label={"Date (MMMM DD, YYYY)"}
                                placeholder={"Click to enter Date"}
                            />
                            <TextInputWithLabel
                                label={"Start Time (##:## AM or ##:## PM)"}
                                placeholder={"Click to enter Start Time"}
                            />
                            <TextareaInputWithLabel
                                label={"Notes"}
                                placeholder={"Click to enter Notes"}
                            />
                        </Stack>
                    )}>
                </EditModal>
            </Stack>
            <Stack direction="row" className="horizontal-stack pb-1">
                <Typography>
                    December 6, 2023
                </Typography>
                <Typography>
                    Started at 3:15pm
                </Typography>
            </Stack>
            <Stack direction="row" className="horizontal-stack">
                <Typography fontStyle={"italic"}>
                    Notes
                </Typography>
            </Stack>
        </>
    );
};

export default WorkoutDetails;