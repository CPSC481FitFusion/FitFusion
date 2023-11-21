import ButtonFilled from "../components/ButtonFilled";
import FlatContainer from "../components/FlatContainer";
import InputWithLabel from "../components/InputWithLabel";
import ConfirmationCancelModal from "../components/Modals/ConfirmationCancelModal";

export const WorkoutPage = () => {
    return (
        <>
            <h1> Workout Page</h1>
            <ButtonFilled
                style={"background-purple"}
                text={"This is a button"}
            />
            <FlatContainer
                style={"background-purple-light"}
                children={"This is a container"}
            />
            <InputWithLabel
                label={"Workout Name"}
                placeholder={"Enter the name for the workout!"}
            />
            <ConfirmationCancelModal
                buttonStyle={"background-green"}
                openModalButtonLabel={"Save"}
                modalHeader={"Finish Workout"}
                modalBody={"Are you sure you want to finish your workout?"}
                modalConfirmationButtonLabel={"Finish Workout"}
            />
            <ConfirmationCancelModal
                buttonStyle={"background-orange"}
                openModalButtonLabel={"Cancel"}
                modalHeader={"Cancel Workout"}
                modalBody={"Are you sure you want to cancel your workout?"}
                modalConfirmationButtonLabel={"Cancel Workout"}
            />
        </>
    );
}