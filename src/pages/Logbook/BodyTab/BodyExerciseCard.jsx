import EditModal from "../../../components/Modals/EditModal";
import TextInputWithLabel from "../../../components/TextInputWithLabel";
import Container from "../../../components/Container";
import { Stack } from '@mui/material';

const BodyExerciseCard = () => {
    return (
        <>
            <Container
                elevation={3}
                children={
                    <>
                        {/* Edit Body Composition Details */}
                        <EditModal
                            isIcon={true}
                            modalHeader="Edit Body Composition Details"
                            modalBody={(
                                <Stack className="input-container text-start w-100">
                                    <TextInputWithLabel
                                        label={"Date (MMMM DD, YYYY)"}
                                        placeholder={"Click to enter Date"}
                                    />
                                    <TextInputWithLabel
                                        label={"Weight (pounds)"}
                                        placeholder={"Click to enter Weight"}
                                    />
                                    <TextInputWithLabel
                                        label={"Waist Circumference (cm)"}
                                        placeholder={"Click to enter Waist Circumference"}
                                    />
                                    <TextInputWithLabel
                                        label={"Hip Circumference (cm)"}
                                        placeholder={"Click to enter Hip Circumference"}
                                    />
                                    <TextInputWithLabel
                                        label={"Arm Circumference (cm)"}
                                        placeholder={"Click to enter Arm Circumference"}
                                    />
                                    <TextInputWithLabel
                                        label={"Thigh Circumference (cm)"}
                                        placeholder={"Click to enter Thigh Circumference"}
                                    />
                                </Stack>
                            )}
                        />
                    </>
                }
            />
        </>
    )
}

export default BodyExerciseCard;