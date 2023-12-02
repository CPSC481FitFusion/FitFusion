import { Typography } from "@mui/joy";
import AppBottomNavigation from "../components/AppBottomNavigation";
import { getCurrentUsername } from "../utils/userUtils";

export const SettingsPage = () => {
  const currentUser = getCurrentUsername();
  return (
    <>
      <Typography className="header-35">User Settings</Typography>
      <Typography className="purple-text ">Hello, {currentUser}!</Typography>
      <AppBottomNavigation state={"settings"} />
    </>
  );
};
