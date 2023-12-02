import React from "react";
import { OutlinedInput, Stack } from "@mui/material";
import { RequiredPopper } from "./RequiredPopper";

const TextareaInputWithLabel = ({
  label,
  placeholder,
  bindValue,
  onInputChange,
  isRequired,
}) => {
  let renderIfRequired = <></>;

  if (isRequired) {
    renderIfRequired = (
      <>
        <RequiredPopper />
      </>
    );
  }
  return (
    <>
      <Stack direction="row" style={{ width: "100%" }}>
        <h6 className="general-label">{label}</h6>
        {renderIfRequired}
      </Stack>
      <OutlinedInput
        size="small"
        multiline
        maxRows={4}
        className="w-100 m-0"
        placeholder={placeholder}
        value={bindValue}
        onChange={onInputChange}
      />
    </>
  );
};

export default TextareaInputWithLabel;
