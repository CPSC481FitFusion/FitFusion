import { Stack, Typography } from "@mui/joy";
import { Checkbox } from "@mui/material";
import { green } from "@mui/material/colors";
import React from "react";
import Container from "../../../components/Container";
import RemoveConfirmationModal from "../../../components/Modals/RemoveConfirmationModal";

export const GoalHistoryCard = (goal) => {
    const { name, description, deadline } = goal;
    const [checked, setChecked] = React.useState(false);
    let backgroundColor = "d-flex align-items-start";

    const handleChange = (event) => {
        setChecked(event.target.checked);
        console.log('checking now: ' + checked);
        if (checked === true) {
            backgroundColor = "d-flex align-items-start background-green-light";
        }
        backgroundColor = "d-flex align-items-start";
    };

    return (
        <Container style={backgroundColor} elevation={3} children={
            <>
                <Stack direction="row" className="w-100 d-flex justify-content-between">
                    <Stack direction="row">
                        <Checkbox
                            checked={checked}
                            onChange={handleChange}
                            inputProps={{ "aria-label": "controlled" }}
                            sx={{
                                color: green[600],
                                "&.Mui-checked": {
                                    color: green[900],
                                },
                            }}
                        />
                        <Stack>
                            <Typography className='header-20 d-flex align-items-center'>
                                {name}
                            </Typography>
                            <Typography >
                                {description}
                            </Typography>
                            <Typography className={"general-label"}>
                                Deadline {deadline}
                            </Typography>
                        </Stack>
                    </Stack>
                    <RemoveConfirmationModal
                        modalHeader={"Removing " + name}
                        modalBody={(
                            <Typography>
                                Are you sure you want to remove the goal from your goal history?
                            </Typography>
                        )}
                        onRemoveClick={() => { }}
                    />
                </Stack>

            </>
        } />
    );
}