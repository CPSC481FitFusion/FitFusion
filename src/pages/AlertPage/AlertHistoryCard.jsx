import { Stack, Typography } from "@mui/joy";
import { Checkbox } from "@mui/material";
import { green } from "@mui/material/colors";
import React, { useState } from "react";
import Container from "../../components/Container";
import RemoveConfirmationModal from "../../components/Modals/RemoveConfirmationModal";
import { Checklist } from "@mui/icons-material";

const AlertHistoryCard = ({ time, message, completed }) => {
    const [checked, setChecked] = useState(completed);
    const [backgroundColor, setBackgroundColor] = useState(checked ? "background-green" : "");
    const [textColor, setTextColor] = useState(checked ? "text-white" : "");

    const handleChange = (event) => {
        setChecked(event.target.checked);
        if (event.target.checked) {
            setBackgroundColor("background-green");
            setTextColor("text-white");
        } else {
            setBackgroundColor("");
            setTextColor("");
        }
    };

    return (
        <Container style={backgroundColor + " d-flex align-items-start"} elevation={3} children={
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
                            <Typography className={textColor + ' header-35 d-flex align-items-center'} style={{margin: "-10px 0px"}}>
                                {time}
                            </Typography>
                            <Typography className={textColor}>
                                {message}
                            </Typography>
                        </Stack>
                    </Stack>
                    <Stack className={"d-flex align-items-start"}>
                        <RemoveConfirmationModal
                            modalHeader={"Removing " + message}
                            modalBody={(
                                <Typography>
                                    Are you sure you want to remove the alert from your alert history?
                                </Typography>
                            )}
                            onRemoveClick={() => { }}
                        />
                    </Stack>
                </Stack>
            </>
        } />
    );
}

export default AlertHistoryCard;