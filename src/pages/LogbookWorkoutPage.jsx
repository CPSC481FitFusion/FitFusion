import ButtonFilled from "../components/Button";
import FlatContainer from "../components/FlatContainer";
import InputWithLabel from "../components/InputWithLabel";

export const WorkoutPage = () => {
    return (
        <>
            <h1> Workout Page</h1>
            <ButtonFilled style={"orange-button"} text={"This is a button"} />
            <FlatContainer style={"background-purple-light"} children={"This is a container"} />
            <InputWithLabel label={"Workout Name"} placeholder={"Enter the name for the workout!"} />
        </>
    );
}