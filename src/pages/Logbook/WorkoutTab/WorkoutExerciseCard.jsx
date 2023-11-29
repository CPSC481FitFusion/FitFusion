import EditModal from "../../../components/Modals/EditModal";
import TextInputWithLabel from "../../../components/TextInputWithLabel";
import Container from "../../../components/Container";
import { Stack, Typography } from '@mui/material';
import { useState } from "react";
import ButtonFilled from "../../../components/ButtonFilled";
import AddSetModal from "./AddSetModal";

const WorkoutExerciseCard = ({ exercise, onUpdateExercise, onAddSet }) => {
    const [exerciseName, setExerciseName] = useState(exercise.name);
    const [addSetMode, setAddSetMode] = useState(false);

    const handleAddSet = (newSet) => {
        onAddSet(exercise.id, newSet);
    };
    return (
        <>
            <Container elevation={3} children={
                <>
                    <Stack
                        spacing={1}
                        direction="row"
                        className="horizontal-stack"
                        style={{ justifyContent: 'space-between', width: '100%' }}
                    >
                        <Typography className="purple-text">
                            {exerciseName}
                        </Typography>
                        <EditModal
                            isOpen={false}
                            editButtonLabel={"Edit"}
                            modalHeader="Edit Workout Details"
                            modalBody={(
                                <Stack className="input-container my-1 text-start w-100">
                                    <TextInputWithLabel
                                        bindValue={exerciseName}
                                        label={"Exercise Name"}
                                        placeholder={"Click to enter Exercise Name"}
                                        onInputChange={(e) =>
                                            setExerciseName(e.target.value
                                            )}
                                    />
                                </Stack>
                            )}
                        />
                    </Stack>
                    {exercise.sets.map((set, index) => (
                        <Typography key={index}>
                            {`Set ${index + 1}: ${set.reps} reps, ${set.weight}`}
                        </Typography>
                    ))}
                    <ButtonFilled
                        style={"background-grey"}
                        text={"Add Set"}
                        onClick={() => setAddSetMode(true)} />
                    {/* Modal for adding a new set */}
                    <AddSetModal
                        isOpen={addSetMode}
                        onClose={() => setAddSetMode(false)}
                        onAddSet={handleAddSet} />
                    {/* Edit Set Modal */}

                </>
            }
            />
        </>
    )
}

export default WorkoutExerciseCard;