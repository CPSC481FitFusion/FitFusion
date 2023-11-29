import EditModal from "../../../components/Modals/EditModal";
import TextInputWithLabel from "../../../components/TextInputWithLabel";
import TextareaInputWithLabel from "../../../components/TextareaInputWithLabel";
import Container from "../../../components/Container";
import { Button, Stack, Typography } from '@mui/material';
import { useState } from "react";

const WorkoutExerciseCard = ({ }) => {
    const [exerciseName, setExerciseName] = useState("");
    return (
        <>
            <Container
                elevation={3}
                children={
                    <>
                        <Stack
                            spacing={1}
                            direction="row"
                            className="horizontal-stack"
                            style={{
                                justifyContent: 'space-between',
                                width: '100%'
                            }}
                        >
                            <Typography
                                className="purple-text">
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
                        {/* Edit Set Modal */}

                    </>
                }
            />
        </>
    )
}

export default WorkoutExerciseCard;