import { useState } from 'react';
import { Box, Grid, Stack, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import ButtonFilled from "../components/ButtonFilled";
import TextInputWithLabel from "../components/TextInputWithLabel";
import ErrorSnackbar from '../components/ErrorSnackbar';

export const RegisterPage = () => {
  const navigate = useNavigate();

  // State to hold user input
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  // State for showing the invalid login info snackbar
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  // Handle Close for inalid login error snackbar
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleRegisterClick = () => {
    // Check for empty fields
    if (!username || !password || !confirmPassword) {
      setSnackbarOpen(true);
      setSnackbarMessage('All fields are required.');
      return;
    }

    // Check if the username is unique
    const existingUsers = JSON.parse(localStorage.getItem('userData') || '[]');
    const isUsernameTaken = existingUsers.some(user => user.username === username);

    if (isUsernameTaken) {
      setSnackbarOpen(true);
      setSnackbarMessage('Username already taken. Please choose a different one.');
      return;
    }

    // Check if password and confirm password match
    if (password !== confirmPassword) {
      setSnackbarOpen(true);
      setSnackbarMessage('Passwords do not match. Please try again.');
      return;
    }

    // Create new user object
    const newUser = {
      username: username,
      password: password,
      settings: {
        defaultLogbookTab: "1", // Set default logbook tab or other default settings
        defaultMeasurementMetric: "inch(es)",
        defaultWeightMetric: "lb(s)",
      }
    };

    // Save new user to local storage
    existingUsers.push(newUser);
    localStorage.setItem('userData', JSON.stringify(existingUsers));

    // Set user as logged in
    localStorage.setItem('userLoggedIn', username);

    // Navigate to logbook or dashboard
    navigate("/logbook/1");
  };

  return (
    <>
      {/* On invalid attempt */}
      <ErrorSnackbar
        isOpen={snackbarOpen}
        snackbarMessage={snackbarMessage}
        onClose={handleSnackbarClose}
      />
      <Grid>
        <Link className="link-label" to="/">
          Click to go to Welcome Page
        </Link>
        <Grid className="mt-5">
          <Typography className="header-35">Register</Typography>
          <Typography>
            Please enter your credentials to register for Fitfusion!
          </Typography>
          <Box className="input-container mb-4">
            <Stack spacing={3}>
              <TextInputWithLabel
                isRequired={true}
                label={"Username"}
                placeholder={"Click to enter your Username"}
                onInputChange={(e) => setUsername(e.target.value)}
              />
              <TextInputWithLabel
                isRequired={true}
                label={"Password"}
                placeholder={"Click to enter your Password"}
                isPassword={true}
                onInputChange={(e) => setPassword(e.target.value)}
              />
              <TextInputWithLabel
                isRequired={true}
                label={"Confirm Password"}
                placeholder={"Click to enter your Password again"}
                isPassword={true}
                onInputChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Stack>
          </Box>
          <ButtonFilled
            text={"Register"}
            style={"background-green"}
            onClick={handleRegisterClick}
          />
          <Stack
            className="footer-content"
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={1}
          >
            <Typography sx={{ fontSize: "14px" }}>
              Already have an account?
            </Typography>
            <Link className="link-label" to="/login">
              Click here to Log In!
            </Link>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};