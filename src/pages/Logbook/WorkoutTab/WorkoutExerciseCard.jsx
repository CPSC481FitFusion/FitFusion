import EditModal from "../../../components/Modals/EditModal";
import TextInputWithLabel from "../../../components/TextInputWithLabel";
import TextareaInputWithLabel from "../../../components/TextareaInputWithLabel";
import Container from "../../../components/Container";
import { Stack } from '@mui/material';

const WorkoutExerciseCard = ({exerciseName, sets}) => {
    return (
        <>
            <Container
                elevation={3}
                children={
                    <>
                        {/* Edit Set Modal */}
                        <EditModal
                            isIcon={true}
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
                            )}
                        />
                    </>
                }
            />
        </>
    )
}

export default WorkoutExerciseCard;