import { Box, Grid, Stack, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import ButtonFilled from "../components/ButtonFilled";
import TextInputWithLabel from "../components/TextInputWithLabel";

export const RegisterPage = () => {
  const navigate = useNavigate();

  function handleRegisterClick() {
    navigate("/logbook");
  }

  return (
    <>
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
                label={"Username"}
                placeholder={"Click to enter your Username"}
              ></TextInputWithLabel>
              <TextInputWithLabel
                label={"Password"}
                placeholder={"Click to enter your Password"}
                isPassword={true}
              ></TextInputWithLabel>
              <TextInputWithLabel
                label={"Confirm Password"}
                placeholder={"Click to enter your Password"}
                isPassword={true}
              ></TextInputWithLabel>
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
