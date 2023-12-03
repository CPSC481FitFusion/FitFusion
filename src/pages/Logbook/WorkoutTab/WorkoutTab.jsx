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
  const [isArmDayCardVisible, setIsArmDayCardVisible] = useState(true);
  const [isLegDayCardVisible, setIsLegDayCardVisible] = useState(true);

  const handleCloseArmDayCard = () => {
    setIsArmDayCardVisible(false);
  };

  const handleCloseLegDayCard = () => {
    setIsLegDayCardVisible(false);
  };

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
      <div style={{ background: "#ECDEEF", width: 400, height: 710}}>
      {isArmDayCardVisible && (<Card sx={{ marginTop: 5, maxWidth: 600, marginLeft: 10}}>
          <CardContent>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant='h3' gutterBottom>
                <em>Arm Day</em>
              </Typography>
              <IconButton onClick={handleCloseArmDayCard}> <CloseIcon /> </IconButton>
              </div>
              <Typography variant="h6" component="div">
              Oct 24, 2023
              </Typography>
              <Typography variant="h6" sx={{ mb: 1.5 }} color="#A05DAB">
              <em>Hammer Curls (Dumbbell)</em>
              </Typography>
              <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Typography variant="body1" component="span">• 3 Sets </Typography>
                <Typography variant="body1" component="span" sx={{ ml: 5 }}>• 8-10 reps</Typography>
                <Typography variant="body1" component="span" sx={{ ml: 5 }}>•  10 lbs</Typography>
              </div>
              <Typography variant="h6" sx={{ mb: 1.5 }} color="#A05DAB">
              <em>Lateral Pulldown (Cable)</em>
              </Typography>
              <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Typography variant="body1" component="span">• 2 Sets </Typography>
                <Typography variant="body1" component="span" sx={{ ml: 5 }}>• 8 reps</Typography>
                <Typography variant="body1" component="span" sx={{ ml: 5 }}>•  55-70 lbs</Typography>
              </div>
          </CardContent>
      </Card>)}
        {isLegDayCardVisible && (
          <Card sx={{ marginTop: 5, maxWidth: 600, marginLeft: 10}}>
          <CardContent>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant='h3' gutterBottom>
                <em>Leg Day</em>
              </Typography>
              <IconButton onClick={handleCloseLegDayCard}> <CloseIcon /> </IconButton>
              </div>
              <Typography variant="h6" component="div">
              Oct 25, 2023
              </Typography>
              <Typography variant="h6" sx={{ mb: 1.5 }} color="#A05DAB">
              <em>Leg Curls</em>
              </Typography>
              <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Typography variant="body1" component="span">• 3 Sets </Typography>
                <Typography variant="body1" component="span" sx={{ ml: 5 }}>• 8-10 reps</Typography>
                <Typography variant="body1" component="span" sx={{ ml: 5 }}>•  100 lbs</Typography>
              </div>
              <Typography variant="h6" sx={{ mb: 1.5 }} color="#A05DAB">
              <em>Leg Press</em>
              </Typography>
              <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Typography variant="body1" component="span">• 2 Sets </Typography>
                <Typography variant="body1" component="span" sx={{ ml: 5 }}>• 8 reps</Typography>
                <Typography variant="body1" component="span" sx={{ ml: 5 }}>•  200 lbs</Typography>
              </div>
          </CardContent>
      </Card>
        )}
        </div>
    </>
  );
};

export default WorkoutTab;
