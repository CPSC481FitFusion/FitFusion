import AppBottomNavigation from "../components/AppBottomNavigation";

export const NotFoundPage = () => {
  return (
    <>
      <h1> How'd You Get Here?</h1>
      <p>It looks like this page does not exist...sorry about that!</p>
      <AppBottomNavigation state={""} />
    </>
  );
};
