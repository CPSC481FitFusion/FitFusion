import React from "react";
import { Stack, Typography } from "@mui/material";
import TextInputWithLabel from "../../../components/TextInputWithLabel";
import TextareaInputWithLabel from "../../../components/TextareaInputWithLabel";

const GoalDetails = ({ onGoalNameChange }) => {
    const handleGoalNameChange = (event) => {
      const newName = event.target.value;
      onGoalNameChange(newName);
    };

    return (
        <>
            <Stack direction="row" className="horizontal-stack">
                <Typography className="header-20 align-bottom">Goal Name</Typography>
            </Stack>
            <Stack className="input-container text-start w-100 m-0">
                <TextInputWithLabel
                    label={"Goal Name"}
                    placeholder={"Click to enter Goal Name"}
                    onInputChange={handleGoalNameChange}
                />
                <TextInputWithLabel
                    label={"Date (MMMM DD, YYYY)"}
                    placeholder={"Click to enter Date"}
                />
                <TextareaInputWithLabel
                    label={"Goal Details and Notes"}
                    placeholder={"Click to enter Notes"}
                />
            </Stack>
        </>
    );
};

export default GoalDetails;
