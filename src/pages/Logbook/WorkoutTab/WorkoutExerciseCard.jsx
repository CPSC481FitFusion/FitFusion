import EditModal from "../../../components/Modals/EditModal";
import TextInputWithLabel from "../../../components/TextInputWithLabel";
import TextareaInputWithLabel from "../../../components/TextareaInputWithLabel";
import FlatContainer from "../../../components/FlatContainer";
import { Stack} from '@mui/material';

const WorkoutExerciseCard = () => {
    return (
        <>
            <FlatContainer
                style={"background-purple-light"}
                children={
                    <>
                        This is a container
                        {/* Edit Workout Details */}
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
            /></>
    )
}

export default WorkoutExerciseCard;