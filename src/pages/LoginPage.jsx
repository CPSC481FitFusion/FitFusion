import { Grid, Typography, Box, Stack, Snackbar, Alert } from "@mui/material";
import ButtonFilled from "../components/ButtonFilled"
import { Link } from "react-router-dom";
import TextInputWithLabel from "../components/TextInputWithLabel";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

export const LoginPage = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // State for showing the invalid login info snackbar
    const [open, setOpen] = useState(false);

    // Handles the attempt for user login
    const handleLogin = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        // Check through each user object to find match
        users.forEach(user => {
            if (user.username === username &&
                user.password === password) {
                // Saves the currently logged in user into localstorage
                localStorage.setItem("userLoggedIn", username);
                // Directs user to logbook page
                navigate("/logbook");
            }
        });
        setOpen(true);
    }

    // Handle Close for inalid login error snackbar
    const handleClose = (reason) => {
        setOpen(false);
    };

    return (
        <>
            <Grid>
                <Link className="link-label" to="/">
                    Click to go to Welcome Page
                </Link>
                <Grid className="mt-5">
                    <Typography
                        className="header-35">
                        Log In
                    </Typography>
                    <Typography>
                        Please proceed to log in to access FitFusion!
                    </Typography>
                    <Box className="input-container">
                        <TextInputWithLabel
                            bindValue={username}
                            label={"Username"}
                            placeholder={"Click to enter your Username"}
                            onInputChange={(event) =>
                                setUsername(event.target.value
                                )
                            }
                        />
                        <TextInputWithLabel
                            bindValue={password}
                            label={"Password"}
                            placeholder={"Click to enter your Password"}
                            isPassword={true}
                            onInputChange={(event) =>
                                setPassword(event.target.value
                                )
                            }
                        />
                        <Link
                            className="d-flex flex-row-reverse link-label"
                            to="/underConstruction/login">
                            Forgot Password!
                        </Link>
                    </Box>
                    <ButtonFilled
                        text={"Log In"}
                        style={"background-green"}
                        onClick={handleLogin}
                    />
                    <Stack
                        className="footer-content"
                        direction="row"
                        justifyContent="flex-end"
                        alignItems="center"
                        spacing={1}>
                        <Typography
                            sx={{ fontSize: "14px" }}>
                            Don’t have an account?
                        </Typography>
                        <Link
                            className="link-label"
                            to="/register">
                            Click here to Register!
                        </Link>
                    </Stack>
                </Grid>
            </Grid>
            {/* On invalid attempt */}
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity="error"
                    sx={{ width: '100%' }}>
                    Invalid login information. No user with that Username or Password exists.
                </Alert>
            </Snackbar>
        </>
    );
}