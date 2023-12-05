import Container from "../../../components/Container";
import { CardContent, Stack, Typography } from "@mui/material";
import { format } from "date-fns";
import RemoveConfirmationModal from '../../../components/Modals/RemoveConfirmationModal.jsx';

const BodyCompositionCard = ({ body }) => {
  const { date, weight, waistCircumference, hipCircumference, armCircumference, thighCircumference } = body;

  return (
    <Container style={"d-flex align-items-start"} elevation={3} >
      <CardContent className='p-0 w-100'>
        <Stack
          direction={"row"}
          className="w-100 d-flex justify-content-between"
        >
          <Typography className='header-20'>
            {date ? format(date, "PP") : ""}
          </Typography>
          <RemoveConfirmationModal
            modalHeader={"Removing " + format(date, "PP")}
            modalBody={(
              <Typography>
                Are you sure you want to remove the body composition from your body composition history? All data will be lost forever.
              </Typography>
            )}
            onRemoveClick={() => { }} // No-operation function
          />
        </Stack>
        <Stack direction={"row"} className="w-100 d-flex justify-content-between " >
          <Stack direction="column">
            {weight && <Typography className='purple-text'>Body Weight:</Typography>}
            {waistCircumference && <Typography className='purple-text'>Waist Circumference:</Typography>}
            {hipCircumference && <Typography className='purple-text'>Hip Circumference:</Typography>}
            {armCircumference && <Typography className='purple-text'>Arm Circumference:</Typography>}
            {thighCircumference && <Typography className='purple-text'>Thigh Circumference:</Typography>}
          </Stack>
          <Stack direction="column">
            {weight && <Typography className="text-end">{weight} lbs</Typography>}
            {waistCircumference && <Typography className="text-end">{waistCircumference} cm</Typography>}
            {hipCircumference && <Typography className="text-end">{hipCircumference} cm</Typography>}
            {armCircumference && <Typography className="text-end">{armCircumference} cm</Typography>}
            {thighCircumference && <Typography className="text-end">{thighCircumference} cm</Typography>}
          </Stack>
        </Stack>
      </CardContent>
    </Container>
  );
};

export default BodyCompositionCard;
