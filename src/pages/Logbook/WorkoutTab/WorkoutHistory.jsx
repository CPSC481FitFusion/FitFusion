import { Card, Stack, Typography } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import Container from '../../../components/Container';

export const WorkoutHistory = () => {
    const [isArmDayCardVisible, setIsArmDayCardVisible] = useState(true);
    const [isLegDayCardVisible, setIsLegDayCardVisible] = useState(true);

    const handleCloseArmDayCard = () => {
        setIsArmDayCardVisible(false);
    };

    const handleCloseLegDayCard = () => {
        setIsLegDayCardVisible(false);
    };
    return (
        <>
            <Stack spacing={1} className='my-2'>
                <Typography className='general-label'>
                    Workout History
                </Typography>
                <Container style={"background-purple-light p-3"} children={
                    <>
                        {
                            isArmDayCardVisible && (
                                <Container
                                    elevation={3}
                                    children={
                                        <CardContent className='p-0'>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <Typography className='header-25' >
                                                    <em>Arm Day</em>
                                                </Typography>
                                                <IconButton onClick={handleCloseArmDayCard} className=''>
                                                    <CloseIcon />
                                                </IconButton>
                                            </div>
                                            <Typography variant="h6" component="div">
                                                Oct 26 2023
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
                                    }
                                />
                            )}
                        {isLegDayCardVisible && (
                            <Container
                                elevation={3}
                                style={"mb-0"}
                                children={
                                    <CardContent className='p-2'>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <Typography className='header-25' >
                                                <em>Leg Day</em>
                                            </Typography>
                                            <IconButton onClick={handleCloseLegDayCard}>
                                                <CloseIcon />
                                            </IconButton>
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
                                }
                            />
                        )}
                    </>
                }
                />
            </Stack>
        </>
    );
}