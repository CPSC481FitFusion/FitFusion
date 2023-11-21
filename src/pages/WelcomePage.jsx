import BackgroundImage from '../../public/img/MainPageBodyBuilderBackground.png'
import { Grid, Paper, Stack, Typography } from '@mui/material';
import ButtonFilled from '../components/ButtonFilled';
import { useNavigate } from "react-router-dom";

const styles = {
    imageContainer: {
        backgroundImage: `url(${BackgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh'
    },
    bodyContainer: {
        position: 'absolute',
        top: '60%',
        padding: '10px',
        width: "100%"
    },
    subheading: {
        color: '#93469F',
        fontSize: 24,
        fontWeight: '400',
        letterSpacing: 0.24,
        wordWrap: 'break-word'
    },
    title: {
        color: 'white',
        fontSize: 48,
        fontWeight: '400',
        letterSpacing: 0.48,
        wordWrap: 'break-word'
    },
    motto: {
        color: 'white',
        fontSize: 14,
        letterSpacing: 0.14,
        wordWrap: 'break-word'
    }
};

export const WelcomePage = () => {
    const navigate = useNavigate();

    function handleRegisterClick() {
        navigate("/register");
    }
    
    function handleLoginClick() {
        navigate("/login");
    }

    return (
        <>
            <Paper style={styles.imageContainer}>
                <Grid style={styles.bodyContainer}>
                    <Typography style={styles.subheading}>Welcome to</Typography>
                    <Typography style={styles.title}>FitFusion</Typography>
                    <Typography style={styles.motto}>The fitness tracking app for everyone</Typography>
                    <Stack spacing={2} direction="row" justifyContent="space-between" paddingTop={'10px'} marginRight={"25px"}>
                        <ButtonFilled text={"Register"} style={"background-purple"} onClick={handleRegisterClick} />
                        <ButtonFilled text={"Log In"} style={"background-purple"} onClick={handleLoginClick}/>
                    </Stack>
                </Grid>
            </Paper>
        </>
    );
}