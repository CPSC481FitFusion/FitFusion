import EditModal from "../../../components/Modals/EditModal";
import TextInputWithLabel from "../../../components/TextInputWithLabel";
import TextareaInputWithLabel from "../../../components/TextareaInputWithLabel";
import Container from "../../../components/Container";
import { Button, Stack, Typography } from '@mui/material';

const WorkoutExerciseCard = ({ }) => {
    return (
        <>
            <Container
                elevation={3}
                children={
                    <>
                        <Stack spacing={1} direction="row" className="horizontal-stack">
                            <Typography className="purple-text">
                                Hammer Curls (Dumbbell)
                            </Typography>
                            <Button className="purple-border-button">
                                Edit
                            </Button>
                        </Stack>
                        {/* Edit Set Modal */}
                        <EditModal
                            isOpen={false}
                            isIcon={true}
                            modalHeader="Edit Workout Details"
                            modalBody={(
                                <Stack className="input-container my-1 text-start w-100">
                                    <TextInputWithLabel
                                        label={"Workout Name"}
                                        placeholder={"Click to enter Workout Name"}
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