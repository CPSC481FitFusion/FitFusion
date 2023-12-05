import { Grid, Paper, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import BackgroundImage from "../assets/images/MainPageBodyBuilderBackground.png";
import ButtonFilled from "../components/ButtonFilled";

const styles = {
  imageContainer: {
    backgroundImage: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "100vh",
    margin: "-20px",
  },
  bodyContainer: {
    position: "absolute",
    top: "60%",
    padding: "20px",
    width: "100%",
  },
  subheading: {
    color: "#93469F",
    fontSize: 24,
    fontWeight: "400",
    letterSpacing: 0.24,
    wordWrap: "break-word",
  },
  title: {
    color: "white",
    fontSize: 48,
    fontWeight: "400",
    letterSpacing: 0.48,
    wordWrap: "break-word",
  },
  motto: {
    color: "white",
    fontSize: 14,
    letterSpacing: 0.14,
    wordWrap: "break-word",
  },
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
          <Typography style={styles.motto}>
            The fitness tracking app for everyone
          </Typography>
          <Stack
            spacing={6}
            direction="row"
            justifyContent="space-between"
            paddingTop={"10px"}
            marginRight={"25px"}
          >
            <ButtonFilled
              text={"Register"}
              style={"background-purple"}
              onClick={handleRegisterClick}
            />
            <ButtonFilled
              text={"Log In"}
              style={"background-purple"}
              onClick={handleLoginClick}
            />
          </Stack>
        </Grid>
      </Paper>
    </>
  );
};
