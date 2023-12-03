import React, { useState } from "react";
import ButtonFilled from "../../../components/ButtonFilled";
import { Modal, Sheet } from "@mui/joy";
import WorkoutDetails from "./WorkoutDetails";
import WorkoutExerciseCard from "./WorkoutExerciseCard";
import Container from "../../../components/Container";
import { Stack, Typography } from "@mui/material";
import AddExerciseModal from "./AddExerciseModal";
import BasicConfirmationModal from "../../../components/modals/basicConfirmationModal";
import { getCurrentUsername } from "../../../utils/userUtils";
import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton'


const WorkoutTab = () => {
  const [open, setOpen] = useState(false);
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);
  const [tempWorkout, setTempWorkout] = useState(null);
  const [addExerciseMode, setAddExerciseMode] = useState(false);

  const startNewWorkout = () => {
    setTempWorkout({
      id: Date.now(),
      date: new Date(),
      exercises: [],
    });
    setDetailsModalOpen(true); // Open the WorkoutDetails modal
    setOpen(true); // Open the WorkoutTab modal
  };

  const finishWorkoutOnClick = () => {
    const userLoggedIn = getCurrentUsername();
    const workoutData = JSON.parse(localStorage.getItem("workoutData") || "{}");
    const userWorkouts = workoutData[userLoggedIn] || [];
    userWorkouts.push(tempWorkout);
    workoutData[userLoggedIn] = userWorkouts;
    localStorage.setItem("workoutData", JSON.stringify(workoutData));
    setTempWorkout(null);
    setOpen(false);
  };

  const handleClose = (event, reason) => {
    if (reason && reason == "backdropClick") return;
    setOpen(false);
  };

  const handleAddExercise = (newExercise) => {
    setTempWorkout({
      ...tempWorkout,
      exercises: [...tempWorkout.exercises, newExercise],
    });
    setAddExerciseMode(false);
  };

  // Update exercise
  const onUpdateExercise = (updatedExercise) => {
    const updatedExercises = tempWorkout.exercises.map((exercise) =>
      exercise.id === updatedExercise.id ? updatedExercise : exercise
    );
    setTempWorkout({ ...tempWorkout, exercises: updatedExercises });
  };
  
  // Add new set to exercise
  const onAddSet = (exerciseId, newSet) => {
    const updatedExercises = tempWorkout.exercises.map((exercise) => {
      if (exercise.id === exerciseId) {
        return { ...exercise, sets: [...exercise.sets, newSet] };
      }
      return exercise;
    });
    setTempWorkout({ ...tempWorkout, exercises: updatedExercises });
  };

  // Handling removal of exercise
  const handleRemoveExercise = (exerciseId) => {
    const updatedExercises = tempWorkout.exercises.filter(
      (exercise) => exercise.id !== exerciseId
    );
    setTempWorkout({ ...tempWorkout, exercises: updatedExercises });
  };

  // Handle removal of sets
  const handleRemoveSet = (exerciseId, setId) => {
    const updatedExercises = tempWorkout.exercises.map((exercise) => {
      if (exercise.id === exerciseId) {
        const updatedSets = exercise.sets.filter((set) => set.id !== setId);
        return { ...exercise, sets: updatedSets };
      }
      return exercise;
    });
    setTempWorkout({ ...tempWorkout, exercises: updatedExercises });
  };

  // Handle Set Edit
  const handleEditSet = (exerciseId, editedSet) => {
    const updatedExercises = tempWorkout.exercises.map((exercise) => {
      if (exercise.id === exerciseId) {
        const updatedSets = exercise.sets.map((set) =>
          set.id === editedSet.id ? editedSet : set
        );
        return { ...exercise, sets: updatedSets };
      }
      return exercise;
    });
    setTempWorkout({ ...tempWorkout, exercises: updatedExercises });
  };

  // Render exercises cards
  const showExercises = tempWorkout?.exercises.map((exercise) => (
    <WorkoutExerciseCard
      key={exercise.id}
      exercise={exercise}
      onUpdateExercise={onUpdateExercise}
      onAddSet={onAddSet}
      onRemoveExercise={handleRemoveExercise}
      onRemoveSet={handleRemoveSet}
      onEditSet={handleEditSet}
    />
  ));

  return (
    <>
      <ButtonFilled
        style={"background-green"}
        text={"Start a Workout"}
        onClick={startNewWorkout}
      />
      <Modal
        className={"overflow-auto"}
        open={open}
        onClose={handleClose}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sheet variant="outlined" className="full-page-modal-container">
          <WorkoutDetails
            workout={tempWorkout}
            onUpdate={setTempWorkout}
            onClose={() => setDetailsModalOpen(false)}
            isOpen={detailsModalOpen}
          />
          <Container
            style={"background-purple-light d-flex align-items-start"}
            children={
              <>
                <Typography className="header-20 pb-2">Exercises</Typography>
                {showExercises}
                <ButtonFilled
                  style={"background-purple"}
                  text={"Add Exercise"}
                  onClick={() => setAddExerciseMode(true)}
                />
              </>
            }
          />
          <Stack spacing={20} direction="row" className="horizontal-stack">
            <BasicConfirmationModal
              buttonStyle={"background-orange"}
              openModalButtonLabel={"Cancel"}
              modalHeader={"Cancel Workout"}
              modalBody={
                "Are you sure you want to cancel your workout? All current progress will be lost."
              }
              modalConfirmationButtonLabel={"Cancel Workout"}
              actionOnClick={() => setOpen(false)}
            />
            <BasicConfirmationModal
              buttonStyle={"background-green"}
              openModalButtonLabel={"Finish"}
              modalHeader={"Finish Workout"}
              modalBody={"Are you sure you want to finish your workout?"}
              modalConfirmationButtonLabel={"Finish Workout"}
              actionOnClick={finishWorkoutOnClick}
            />
          </Stack>
        </Sheet>
      </Modal>
      {/* Modal for adding a new exercise */}
      <AddExerciseModal
        isOpen={addExerciseMode}
        onClose={() => setAddExerciseMode(false)}
        onAddExercise={handleAddExercise}
      />
        <Card sx={{ maxWidth: 600 }}>
          <CardContent>
              {/* <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}> */}
              {/* <Typography variant='h3' gutterBottom>
                  Arm Day
              </Typography>
              <IconButton > <CloseIcon /> </IconButton>
              </div>
              <Typography variant="h4" component="div">
              Oct 24, 2023
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Hammer Curls (Dumbbell)
              </Typography>
              <Typography variant="body1">
              3 Sets  5 reps 10lbs 
              <br />
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Lateral Pulldown Cable
              </Typography>
              <Typography variant="body1">
              2 Sets  8 reps 55-70lbs 
              <br />
              </Typography> */}
          </CardContent>
      </Card>

        
    </>
  );
};

export default WorkoutTab;
