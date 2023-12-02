import EditModal from "../../../components/Modals/EditModal";
import TextInputWithLabel from "../../../components/TextInputWithLabel";
import Container from "../../../components/Container";
import { IconButton, Stack, Typography } from '@mui/material';
import { useState } from "react";
import ButtonFilled from "../../../components/ButtonFilled";
import AddSetModal from "./AddSetModal";
import ErrorSnackbar from "../../../components/ErrorSnackbar";
import EditIcon from '@mui/icons-material/Edit';

const WorkoutExerciseCard = ({
    exercise,
    onUpdateExercise,
    onRemoveExercise,
    onRemoveSet,
    onEditSet }) => {
    const [exerciseName, setExerciseName] = useState(exercise.name);
    const [addSetMode, setAddSetMode] = useState(false);
    const [editSetMode, setEditSetMode] = useState(false);
    const [editingSet, setEditingSet] = useState(null);
    const [snackbarOpen, setSnackbarOpen] = useState(false);  // State for showing the invalid login info snackbar

    const handleSnackbarClose = () => {  // Handle Close for inalid login error snackbar
        setSnackbarOpen(false);
    };

    const handleAddOrEditSet = (set) => {
        if (editingSet) {
            onEditSet(exercise.id, set);
        } else {
            const updatedExercise = {
                ...exercise,
                sets: [...exercise.sets, set]
            };
            onUpdateExercise(updatedExercise);
        }
        setEditingSet(null);
        setAddSetMode(false);
        setEditSetMode(false);
    };

    const openEditSetModal = (set) => {
        setEditingSet(set);
        setEditSetMode(true);
    };

    const handleExerciseEdit = () => {
        if (!exerciseName) {
            setSnackbarOpen(true);
            return;
        }
        onUpdateExercise({ ...exercise, name: exerciseName });
    };

    const handleExerciseRemove = () => {
        onRemoveExercise(exercise.id);
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
                        <Typography className="purple-text"> {exerciseName} </Typography>
                        <EditModal
                            isOpen={false}
                            editButtonLabel={"Rename"}
                            modalHeader="Rename Exercise"
                            onSave={handleExerciseEdit}
                            showRemove
                            onRemove={handleExerciseRemove} // Handles removal of exercise
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
                    <Stack spacing={1} direction={"column"} className="mb-3 w-100 d-flex justify-content-between">
                        <Stack direction={"row"} className="w-100 d-flex justify-content-between">
                            {/* Header Row */}
                            <Typography className="general-label">
                                Set
                            </Typography>
                            <Typography className="general-label">
                                Rep
                            </Typography>
                            <Typography className="general-label">
                                Weight
                            </Typography>
                            <Typography className="general-label">
                                Edit
                            </Typography>
                        </Stack>
                        {/* Sets List */}
                        {exercise.sets.map((set, index) => (
                            <>
                                <Stack key={index} direction={"row"} className="w-100 d-flex justify-content-between">
                                    <Typography > {index + 1} </Typography>
                                    <Typography> {set.reps}  </Typography>
                                    <Typography> {set.weight + " lbs"} </Typography>
                                    <IconButton className="p-0" onClick={() => openEditSetModal(set)}>
                                        <EditIcon />
                                    </IconButton>
                                </Stack >
                            </>
                        ))}
                    </Stack>
                    <ButtonFilled
                        style={"background-grey"}
                        text={"Add Set"}
                        onClick={() => setAddSetMode(true)} />
                    {/* Modal for adding a new set */}
                    <AddSetModal
                        isOpen={addSetMode}
                        onClose={() => setAddSetMode(false)}
                        onAddSet={handleAddOrEditSet} />
                    <AddSetModal
                        set={editingSet}
                        isOpen={editSetMode}
                        onClose={() => {
                            setEditSetMode(false);
                            setEditingSet(null);
                        }}
                        onAddSet={handleAddOrEditSet}
                        showRemove
                        onRemove={() => onRemoveSet(exercise.id, editingSet.id)}
                    />
                </>
            }
            />
        </>
    )
}

export default WorkoutExerciseCard;