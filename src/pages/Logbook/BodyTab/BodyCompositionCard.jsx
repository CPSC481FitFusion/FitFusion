import Container from "../../../components/Container";
import { Stack, Typography } from "@mui/material";
import { format } from "date-fns";

const BodyCompositionCard = (body) => {
  const bodyComp = {
    date: new Date(),
    weight: 170,
    waistCircumference: 123,
    hipCircumference: 123,
    armCircumference: 12,
    thighCircumference: 32,
  };

  return (
    <>
      <Container
        style={"background-purple-light d-flex align-items-start"}
        elevation={3}
        children={
          <>
            <Typography color="#FE6E3E" fontSize={20}>
              {bodyComp.date ? format(bodyComp.date, "PP") : ""}
            </Typography>
            <Stack spacing={2} direction="row" className="pb-2">
              <Stack direction="column">
                <Typography fontStyle="italic">
                  Body Weight:
                </Typography>
                <Typography fontStyle="italic">
                  Waist Circumference:
                </Typography>
                <Typography fontStyle="italic">
                  Hip Circumference:
                </Typography>
                <Typography fontStyle="italic">
                  Arm Circumference:
                </Typography>
                <Typography fontStyle="italic">
                  Thigh Circumference:
                </Typography>
              </Stack>
              <Stack direction="column">
                <Typography>
                  {bodyComp.weight} lbs
                </Typography>
                <Typography>
                  {bodyComp.waistCircumference} cm
                </Typography>
                <Typography>
                  {bodyComp.hipCircumference} cm
                </Typography>
                <Typography>
                  {bodyComp.armCircumference} cm
                </Typography>
                <Typography>
                  {bodyComp.thighCircumference} cm
                </Typography>
              </Stack>
            </Stack>
          </>
        }
      />
    </>
  );
};

export default BodyCompositionCard;
