import CloseIcon from '@mui/icons-material/Close';
import { Stack, Typography } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import Container from '../../../components/Container';
import RemoveConfirmationModal from '../../../components/Modals/RemoveConfirmationModal.jsx';
import { getCurrentUsername } from '../../../utils/userUtils.js';

export const WorkoutHistory = () => {
    const [isArmDayCardVisible, setIsArmDayCardVisible] = useState(true);
    const [isLegDayCardVisible, setIsLegDayCardVisible] = useState(true);
    const [isPushDayCardVisible, setIsPushDayCardVisible] = useState(true);
    const [isPullDayCardVisible, setIsPullDayCardVisible] = useState(true);

    const handleCloseArmDayCard = () => {
        setIsArmDayCardVisible(false);
    };

    const handleCloseLegDayCard = () => {
        setIsLegDayCardVisible(false);
    };
    const emptyDefault = <Container style={"background-purple-light p-3 mb-5"} children={
        <>
            <Typography className='general-label'>
                No workouts tracked in the logbook.
            </Typography>
            <Typography>
                Track a workout for it to appear here!
            </Typography>
        </>
    }
    />


    const user = getCurrentUsername();
    let display = <></>;
    if (user === "johndoe") {
        display =
            <>
                <Stack spacing={1} className='my-2'>
                    <Typography className='general-label'>
                        Workout History
                    </Typography>
                    {(isLegDayCardVisible || isArmDayCardVisible || isPullDayCardVisible || isPushDayCardVisible) && (
                        <Container style={"background-purple-light p-3 mb-5"} children={
                            <>
                                {isArmDayCardVisible && (
                                    <Container elevation={3} children={
                                        <CardContent className='p-0 w-100'>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <Typography className='header-20' >
                                                    <em>Arm Day</em>
                                                </Typography>
                                                <RemoveConfirmationModal
                                                    modalHeader={"Removing \"Arm Day\""}
                                                    modalBody={(
                                                        <Typography>
                                                            Are you sure you want to remove the workout from your workout history? All data will be lost forever.
                                                        </Typography>
                                                    )}
                                                    onRemoveClick={handleCloseArmDayCard}
                                                />
                                            </div>
                                            <Stack>
                                                <Typography> Dec 10 2023 </Typography>
                                                <Typography className='purple-text'>
                                                    <em>Hammer Curls (Dumbbell)</em>
                                                </Typography>
                                                <Stack direction={"row"} className="d-flex justify-content-around mb-2">
                                                    <Typography>• 3 Sets</Typography>
                                                    <Typography>• 8-10 reps</Typography>
                                                    <Typography>•  10 lbs</Typography>
                                                </Stack>
                                                <Typography className='purple-text'>
                                                    <em>Lateral Pulldown (Cable)</em>
                                                </Typography>
                                                <Stack direction={"row"} className="d-flex justify-content-around mb-2">
                                                    <Typography>• 2 Sets</Typography>
                                                    <Typography>• 8 reps</Typography>
                                                    <Typography>•  55-70 lbs</Typography>
                                                </Stack>
                                            </Stack>
                                        </CardContent>
                                    }
                                    />
                                )}
                                {isPushDayCardVisible && (
                                    <Container elevation={3} children={
                                        <CardContent className='p-0 w-100'>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <Typography className='header-20' >
                                                    <em>Push Day</em>
                                                </Typography>
                                                <RemoveConfirmationModal
                                                    modalHeader={"Removing \"Push Day\""}
                                                    modalBody={(
                                                        <Typography>
                                                            Are you sure you want to remove the workout from your workout history? All data will be lost forever.
                                                        </Typography>
                                                    )}
                                                    onRemoveClick={() => setIsPushDayCardVisible(false)}
                                                />
                                            </div>
                                            <Stack>
                                                <Typography> Dec 1 2023 </Typography>
                                                <Typography className='purple-text'>
                                                    <em>Push-Ups (Body Weight)</em>
                                                </Typography>
                                                <Stack direction={"row"} className="d-flex justify-content-around mb-2">
                                                    <Typography>• 5 Sets</Typography>
                                                    <Typography>• 20 reps</Typography>
                                                    <Typography>•  0 lbs</Typography>
                                                </Stack>
                                                <Typography className='purple-text'>
                                                    <em>Bench Press (Barbell)</em>
                                                </Typography>
                                                <Stack direction={"row"} className="d-flex justify-content-around mb-2">
                                                    <Typography>• 5 Sets</Typography>
                                                    <Typography>• 8 reps</Typography>
                                                    <Typography>•  45-155 lbs</Typography>
                                                </Stack>
                                                <Typography className='purple-text'>
                                                    <em>Tricep Press (Machine)</em>
                                                </Typography>
                                                <Stack direction={"row"} className="d-flex justify-content-around mb-2">
                                                    <Typography>• 3 Sets</Typography>
                                                    <Typography>• 8 reps</Typography>
                                                    <Typography>•  25-55 lbs</Typography>
                                                </Stack>
                                            </Stack>
                                        </CardContent>
                                    }
                                    />
                                )}
                                {isPullDayCardVisible && (
                                    <Container elevation={3} children={
                                        <CardContent className='p-0 w-100'>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <Typography className='header-20' >
                                                    <em>Pull Day</em>
                                                </Typography>
                                                <RemoveConfirmationModal
                                                    modalHeader={"Removing \"Pull Day\""}
                                                    modalBody={(
                                                        <Typography>
                                                            Are you sure you want to remove the workout from your workout history? All data will be lost forever.
                                                        </Typography>
                                                    )}
                                                    onRemoveClick={() => setIsPullDayCardVisible(false)}
                                                />
                                            </div>
                                            <Stack>
                                                <Typography> Nov 22 2023 </Typography>
                                                <Typography className='purple-text'>
                                                    <em>Hammer Curls (Dumbbell)</em>
                                                </Typography>
                                                <Stack direction={"row"} className="d-flex justify-content-around mb-2">
                                                    <Typography>• 3 Sets</Typography>
                                                    <Typography>• 2-12 reps</Typography>
                                                    <Typography>•  45-155 lbs</Typography>
                                                </Stack>
                                                <Typography className='purple-text'>
                                                    <em>Lateral Pulldown (Cable)</em>
                                                </Typography>
                                                <Stack direction={"row"} className="d-flex justify-content-around mb-2">
                                                    <Typography>• 2 Sets</Typography>
                                                    <Typography>• 2-12 reps</Typography>
                                                    <Typography>•  55-70 lbs</Typography>
                                                </Stack>
                                                <Typography className='purple-text'>
                                                    <em>Lat Pulldown (Machine)</em>
                                                </Typography>
                                                <Stack direction={"row"} className="d-flex justify-content-around mb-2">
                                                    <Typography>• 3 Sets</Typography>
                                                    <Typography>• 8 reps</Typography>
                                                    <Typography>•  45-75 lbs</Typography>
                                                </Stack>
                                                <Typography className='purple-text'>
                                                    <em>Row (Barbell)</em>
                                                </Typography>
                                                <Stack direction={"row"} className="d-flex justify-content-around mb-2">
                                                    <Typography>• 4 Sets</Typography>
                                                    <Typography>• 8-12 reps</Typography>
                                                    <Typography>•  45-65 lbs</Typography>
                                                </Stack>
                                            </Stack>
                                        </CardContent>
                                    }
                                    />
                                )}
                                {isLegDayCardVisible && (
                                    <Container elevation={3} style={"mb-0"} children={
                                        <CardContent className='p-0 w-100'>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <Typography className='header-20' >
                                                    <em>Leg Day</em>
                                                </Typography>
                                                <RemoveConfirmationModal
                                                    modalHeader={"Removing \"Leg Day\""}
                                                    modalBody={(
                                                        <Typography>
                                                            Are you sure you want to remove the workout from your workout history? All data will be lost forever.
                                                        </Typography>
                                                    )}
                                                    onRemoveClick={handleCloseLegDayCard}
                                                />
                                            </div>
                                            <Stack>
                                                <Typography> Nov 15, 2023 </Typography>
                                                <Typography className='purple-text'>
                                                    <em>Leg Curls</em>
                                                </Typography>
                                                <Stack direction={"row"} className="d-flex justify-content-around mb-2">
                                                    <Typography>• 3 Sets</Typography>
                                                    <Typography>• 8-10 reps</Typography>
                                                    <Typography>•  100 lbs</Typography>
                                                </Stack>
                                                <Typography className='purple-text'>
                                                    <em>Leg Press</em>
                                                </Typography>
                                                <Stack direction={"row"} className="d-flex justify-content-around mb-2">
                                                    <Typography>• 2 Sets</Typography>
                                                    <Typography>• 8 reps</Typography>
                                                    <Typography>•  150-200 lbs</Typography>
                                                </Stack>
                                                <Typography className='purple-text'>
                                                    <em>Squat (Barbell)</em>
                                                </Typography>
                                                <Stack direction={"row"} className="d-flex justify-content-around mb-2">
                                                    <Typography>• 5 Sets</Typography>
                                                    <Typography>• 8-10 reps</Typography>
                                                    <Typography>•  45-155 lbs</Typography>
                                                </Stack>
                                            </Stack>
                                        </CardContent>
                                    }
                                    />
                                )}
                            </>
                        }
                        />
                    )}
                    {
                        (!isLegDayCardVisible &&
                            !isArmDayCardVisible &&
                            !isPullDayCardVisible &&
                            !isPushDayCardVisible &&
                            emptyDefault
                        )
                    }
                </Stack>
            </>
    }
    else if (user === "bodybuilder") {
        display = <>
            <Stack spacing={1} className='my-2'>
                <Typography className='general-label'>
                    Workout History
                </Typography>
                {isLegDayCardVisible && (
                    <Container style={"background-purple-light p-3 mb-5"} children={
                        <>

                            <Container elevation={3} style={"mb-0"} children={
                                <CardContent className='p-0 w-100'>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Typography className='header-20' >
                                            <em>Leg Day</em>
                                        </Typography>
                                        <RemoveConfirmationModal
                                            modalHeader={"Removing \"Leg Day\""}
                                            modalBody={(
                                                <Typography>
                                                    Are you sure you want to remove the workout from your workout history? All data will be lost forever.
                                                </Typography>
                                            )}
                                            onRemoveClick={handleCloseLegDayCard}
                                        />
                                    </div>
                                    <Stack>
                                        <Typography> Nov 15, 2023 </Typography>
                                        <Typography className='purple-text'>
                                            <em>Leg Curls</em>
                                        </Typography>
                                        <Stack direction={"row"} className="d-flex justify-content-around mb-2">
                                            <Typography>• 3 Sets</Typography>
                                            <Typography>• 8-10 reps</Typography>
                                            <Typography>•  100 lbs</Typography>
                                        </Stack>
                                        <Typography className='purple-text'>
                                            <em>Leg Press</em>
                                        </Typography>
                                        <Stack direction={"row"} className="d-flex justify-content-around mb-2">
                                            <Typography>• 2 Sets</Typography>
                                            <Typography>• 8 reps</Typography>
                                            <Typography>•  150-200 lbs</Typography>
                                        </Stack>
                                        <Typography className='purple-text'>
                                            <em>Squat (Barbell)</em>
                                        </Typography>
                                        <Stack direction={"row"} className="d-flex justify-content-around mb-2">
                                            <Typography>• 5 Sets</Typography>
                                            <Typography>• 8-10 reps</Typography>
                                            <Typography>•  45-155 lbs</Typography>
                                        </Stack>
                                    </Stack>
                                </CardContent>
                            }
                            />

                        </>
                    }
                    />
                )}
                {!isLegDayCardVisible && emptyDefault
                }
            </Stack>
        </>
    }
    else {
        display = <>
            <Stack spacing={1} className='my-2'>
                <Typography className='general-label'>
                    Workout History
                </Typography>
                {emptyDefault}
            </Stack>
        </>
    }

    return (
        <>
            {display}
        </>
    );
}