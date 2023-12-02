import { Stack, Typography } from "@mui/material";
import TextInputWithLabel from "../../../components/TextInputWithLabel";
import TextareaInputWithLabel from "../../../components/TextareaInputWithLabel";
import EditModal from "../../../components/Modals/EditModal";

const BodyDetails = () => {
  return (
    <>
      <Stack direction="row" className="horizontal-stack pb-1">
        <Typography className="header-20 align-bottom">
          Body Composition
        </Typography>
        <EditModal
          isIcon={true}
          modalHeader="Edit Body Composition Details"
          modalBody={
            <Stack className="input-container text-start w-100">
              <TextInputWithLabel
                label={"Date (MMMM DD, YYYY)"}
                placeholder={"Enter value"}
              />
              <TextInputWithLabel
                label={"Weight (pounds)"}
                placeholder={"Enter value"}
              />
              <TextInputWithLabel
                label={"Waist Circumference (cm)"}
                placeholder={"Enter value"}
              />
              <TextInputWithLabel
                label={"Hip Circumference (cm)"}
                placeholder={"Enter value"}
              />
              <TextInputWithLabel
                label={"Arm Circumference (cm)"}
                placeholder={"Enter value"}
              />
              <TextInputWithLabel
                label={"Thigh Circumference (cm)"}
                placeholder={"Enter value"}
              />
            </Stack>
          }
        />
      </Stack>
      <Stack direction="row" className="horizontal-stack pb-1">
        <Typography>December 6, 2023</Typography>
      </Stack>
      <Stack direction="row" className="horizontal-stack pb-1">
        <Typography className="header-18 align-bottom">Body Weight</Typography>
      </Stack>
      <Stack direction="row" className="horizontal-stack pb-1">
        <Typography className="header-18 align-bottom">
          Waist Circumference
        </Typography>
      </Stack>
      <Stack direction="row" className="horizontal-stack pb-1">
        <Typography className="header-18 align-bottom">
          Hip Circumference
        </Typography>
      </Stack>
      <Stack direction="row" className="horizontal-stack pb-1">
        <Typography className="header-18 align-bottom">
          Arm Circumference
        </Typography>
      </Stack>
      <Stack direction="row" className="horizontal-stack pb-1">
        <Typography className="header-18 align-bottom">
          Thigh Circumference
        </Typography>
      </Stack>
    </>
  );
};

export default BodyDetails;
