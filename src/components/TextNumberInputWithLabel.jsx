import React from "react";
import {
  OutlinedInput,
  InputAdornment,
  IconButton,
  Stack,
} from "@mui/material";
import { RequiredPopper } from "./RequiredPopper";

const TextNumberInputWithLabel = ({
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
        type="number"
        placeholder={placeholder}
        value={bindValue}
        onChange={onInputChange}
        className="w-100 m-0"
      />
    </>
  );
};

export default TextNumberInputWithLabel;
