import { Grid, Typography, Box, Stack } from "@mui/material";
import ButtonFilled from "../components/ButtonFilled"
import { Link } from "react-router-dom";
import TextInputWithLabel from "../components/TextInputWithLabel";

export const LoginPage = () => {
    return (
        <>
            <Grid>
                <Link className="link-label" to="/">Click to go to Welcome Page</Link>
                {/* <ButtonFilled text={"Navigate to Welcome Page"} style={"back-button"} onClick={handleBackClick} /> */}
                <Grid className="mt-5">
                    <Typography className="header-35">Log In</Typography>
                    <Typography>Please proceed to log in to access FitFusion!</Typography>
                    <Box className="input-container">
                        <TextInputWithLabel label={"Username"} placeholder={"Click to enter your Username"}></TextInputWithLabel>
                        <TextInputWithLabel label={"Password"} placeholder={"Click to enter your Password"} isPassword={true}></TextInputWithLabel>
                        <Link className="d-flex flex-row-reverse link-label" onClick={console.log("Forgot Password")}>Forgot Password!</Link>
                    </Box>
                    <ButtonFilled text={"Log In"} style={"background-green"} onClick={console.log("Log in Attempt")} />
                    <Stack className="footer-content" direction="row" justifyContent="flex-end" alignItems="center" spacing={1}>
                        <Typography sx={{ fontSize: "14px" }}>Don’t have an account?</Typography>
                        <Link className="link-label" to="/register">Click here to Register!</Link>
                    </Stack>
                </Grid>
            </Grid>
        </>
    );
}