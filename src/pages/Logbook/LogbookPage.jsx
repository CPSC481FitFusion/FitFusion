import { Box, Stack, Tab } from "@mui/material";
import AppBottomNavigation from "../../components/AppBottomNavigation";
import BasicConfirmationModal from "../../components/Modals/BasicConfirmationModal";
import ButtonFilled from "../../components/ButtonFilled";
import EditModal from "../../components/Modals/EditModal";
import FlatContainer from "../../components/FlatContainer";
import React from "react";
import TextareaInputWithLabel from "../../components/TextareaInputWithLabel";
import TextInputWithLabel from "../../components/TextInputWithLabel";
import { TabContext, TabList, TabPanel } from '@mui/lab';

export const LogbookPage = () => {
    // Get the user default from local storage, for now set at Workout
    const [value, setValue] = React.useState("1");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <h1> Workout Page</h1>
            <Box sx={{ width: '100%' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="Logbook Tab" variant="fullWidth">
                            <Tab label="Workout" value="1" />
                            <Tab label="Body" value="2" />
                            <Tab label="Goals" value="3" />
                        </TabList>
                    </Box>
                    <TabPanel value="1" >Workout</TabPanel>
                    <TabPanel value="2">Body</TabPanel>
                    <TabPanel value="3">Goals</TabPanel>
                </TabContext>
            </Box>
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
            <AppBottomNavigation state={"logbook"} />
        </>
    );
}