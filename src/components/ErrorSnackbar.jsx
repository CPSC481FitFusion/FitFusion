import React, { useEffect, useState } from "react";
import { Alert, Snackbar } from "@mui/material";

const ErrorSnackbar = ({ isOpen, snackbarMessage, onClose }) => {
  const [snackbarOpen, setSnackbarOpen] = useState(isOpen);

  useEffect(() => {
    setSnackbarOpen(isOpen);
  }, [isOpen]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbarOpen(false);
    onClose(); // Call the onClose prop passed from the parent component
  };

  return (
    <Snackbar
      open={snackbarOpen}
      autoHideDuration={5000}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
        {snackbarMessage}
      </Alert>
    </Snackbar>
  );
};

export default ErrorSnackbar;
