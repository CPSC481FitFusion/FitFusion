import EditModal from "../../../components/Modals/EditModal";
import TextInputWithLabel from "../../../components/TextInputWithLabel";
import Container from "../../../components/Container";
import { Stack, Typography } from '@mui/material';
import { useState } from "react";
import ButtonFilled from "../../../components/ButtonFilled";
import AddSetModal from "./AddSetModal";
import ErrorSnackbar from "../../../components/ErrorSnackbar";

const WorkoutExerciseCard = ({ exercise, onUpdateExercise, onAddSet }) => {
    const [exerciseName, setExerciseName] = useState(exercise.name);
    const [addSetMode, setAddSetMode] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);  // State for showing the invalid login info snackbar

    const handleSnackbarClose = () => {  // Handle Close for inalid login error snackbar
        setSnackbarOpen(false);
    };

    const handleAddSet = (newSet) => {
        const updatedExercise = {
            ...exercise,
            sets: [...exercise.sets, newSet]
        };
        onUpdateExercise(updatedExercise);
    };

    const handleExerciseEdit = () => {
        if (!exerciseName) {
            setSnackbarOpen(true);      // Open the invalid snackbar (no match found).
            return;
        }
        const updatedExercise = {
            ...exercise,
            name: exerciseName
        };
        onUpdateExercise(updatedExercise);
    };

    return (
        <>
            <Container elevation={3} children={
                <>
                    <Stack
                        spacing={1}
                        direction="row"
                        className="horizontal-stack"
                        style={{ justifyContent: 'space-between', width: '100%' }} >
                        <Typography className="purple-text">
                            {exerciseName}
                        </Typography>
                        <EditModal
                            isOpen={false}
                            editButtonLabel={"Rename"}
                            modalHeader="Rename Exercise"
                            onSave={handleExerciseEdit}
                            modalBody={(
                                <>
                                    {/* On invalid empty attempt */}
                                    <ErrorSnackbar
                                        isOpen={snackbarOpen}
                                        snackbarMessage={"Exercise Name is required. Cannot be empty."}
                                        onClose={handleSnackbarClose} />
                                    <Stack className="input-container my-1 text-start w-100 mb-4">
                                        <TextInputWithLabel
                                            bindValue={exerciseName}
                                            label={"Exercise Name"}
                                            placeholder={"Click to enter Exercise Name"}
                                            onInputChange={(e) => setExerciseName(e.target.value)} />
                                    </Stack>
                                </>
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