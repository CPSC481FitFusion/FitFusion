import { Grid, Typography, Box, Stack } from "@mui/material";
import ButtonFilled from "../components/ButtonFilled"
import { Link } from "react-router-dom";
import InputWithLabel from "../components/InputWithLabel";

const styles = {

}
export const RegisterPage = () => {
    return (
        <>
            <Grid>
                <Link className="link-label" to="/">Click to go to Welcome Page</Link>
                <Grid className="mt-5">
                    <Typography className="header-1">Register</Typography>
                    <Typography>Please enter your credentials to register for Fitfusion!</Typography>
                    <Box className="input-container">
                        <InputWithLabel label={"Username"} placeholder={"Click to enter your Username"}></InputWithLabel>
                        <InputWithLabel label={"Password"} placeholder={"Click to enter your Password"} isPassword={true}></InputWithLabel>
                        <InputWithLabel label={"Confirm Password"} placeholder={"Click to enter your Password"} isPassword={true}></InputWithLabel>
                    </Box>
                    <ButtonFilled text={"Register"} style={"background-green"} onClick={console.log("Register Attempt")} />
                    <Stack className="footer-content" direction="row" justifyContent="flex-end" alignItems="center" spacing={1}>
                        <Typography sx={{ fontSize: "14px" }}>Alreacy have an account?</Typography>
                        <Link className="link-label" to="/login">Click here to Log In!</Link>
                    </Stack>
                </Grid>
            </Grid>
        </>
    );
}