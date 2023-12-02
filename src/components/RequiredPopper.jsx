import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Popper from "@mui/material/Popper";
import StarIcon from "@mui/icons-material/Star";
import Typography from "@mui/material/Typography";

export const RequiredPopper = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <div className="d-flex align-items-start">
      <IconButton
        size={"small"}
        aria-describedby={id}
        onClick={handleClick}
        sx={{ marginX: "8px", padding: "0px" }}
      >
        <StarIcon color="error" className="required-button" />
      </IconButton>
      <Popper id={id} open={open} anchorEl={anchorEl} sx={{ zIndex: 2000 }}>
        <Typography
          sx={{ p: 1, bgcolor: "background.paper", border: "1px solid" }}
        >
          This field is required!
        </Typography>
      </Popper>
    </div>
  );
};
