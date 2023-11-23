import { Stack } from "@mui/material";
import ButtonFilled from "../components/ButtonFilled";
import FlatContainer from "../components/FlatContainer";
import TextInputWithLabel from "../components/TextInputWithLabel";
import BasicConfirmationModal from "../components/Modals/BasicConfirmationModal";
import EditModal from "../components/Modals/EditModal";
import TextareaInputWithLabel from "../components/TextareaInputWithLabel";
import AppBottomNavigation from "../components/AppBottomNavigation";

export const LogbookPage = () => {
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
            <TextInputWithLabel
                label={"Workout Name"}
                placeholder={"Enter the name for the workout!"}
            />
            <BasicConfirmationModal
                buttonStyle={"background-green"}
                openModalButtonLabel={"Save"}
                modalHeader={"Finish Workout"}
                modalBody={"Are you sure you want to finish your workout?"}
                modalConfirmationButtonLabel={"Finish Workout"}
            />
            <BasicConfirmationModal
                buttonStyle={"background-orange"}
                openModalButtonLabel={"Cancel"}
                modalHeader={"Cancel Workout"}
                modalBody={"Are you sure you want to cancel your workout?"}
                modalConfirmationButtonLabel={"Cancel Workout"}
            />
            {/* Edit Workout Details */}
            <EditModal
                isIcon={true}
                modalHeader="Edit Workout Details"
                modalBody={(
                    <Stack className="input-container text-start w-100">
                        <TextInputWithLabel
                            label={"Workout Name"}
                            placeholder={"Click to enter Workout Name"}
                        />
                        <TextInputWithLabel
                            label={"Date (MMMM DD, YYYY)"}
                            placeholder={"Click to enter Date"}
                        />
                        <TextInputWithLabel
                            label={"Start Time (##:## AM or ##:## PM)"}
                            placeholder={"Click to enter Start Time"}
                        />
                        <TextareaInputWithLabel
                            label={"Notes"}
                            placeholder={"Click to enter Notes"}
                        />
                    </Stack>
                )}
            />
            <EditModal
                editButtonLabel={"Edit Workout"}
                modalHeader="Edit Exercise Details"
                modalBody={(<></>)}
            />
            <AppBottomNavigation state={"logbook"}/>
        </>
    );
}