import { Stack } from "@mui/material";
import { RequiredPopper } from "./RequiredPopper";

export const RequiredInputLabel = ({label}) => {
    return (
        <>
            <Stack
                direction="row"
                style={{ width: '100%' }}>
                <h6 className="general-label">{label}</h6>
                <RequiredPopper />
            </Stack>
        </>
    );
}