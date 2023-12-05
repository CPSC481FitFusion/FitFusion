# FitFusion (Fitness Tracking App)

FitFusion is a comprehensive fitness tracking application designed for users of all fitness levels. It offers features to track workouts, body composition, set goals, and receive alerts/notifications, all within an intuitive user interface. This README provides a detailed walkthrough of the app's functionalities, ensuring users can fully leverage FitFusion's capabilities.

# Members:
- Nicole Papuc, nicole.papuc@ucalgary.ca
- Rachel Renegado, rachel.renegado@ucalgary.ca
- Gurpartap Sohi, gurpartap.sohi@ucalgary.ca
- Jitaksha Batish, jitaksha.batish@ucalgary.ca
- Ali Siddiqi, ali.siddiqi@ucaglary.ca

## Table of Contents
- [Installation](#installation)
- [Technologies Used](#technologies-used)
- [Project Information](#project-information)
- [User Onboarding and Login/Registration](#user-onboarding-and-loginregistration)
- [Using FitFusion](#using-fitfusion)
  - [Task 1: Track Workout](#task-1-track-workout)
  - [Task 2: Track Body Composition](#task-2-track-body-composition)
  - [Task 3: Notifications/Alerts](#task-3-notificationsalerts)
  - [Task 4: View and Manage History](#task-4-view-and-manage-history)
  - [Task 5: User Goal Tracking](#task-5-user-goal-tracking)
  - [Settings and Customization](#settings-and-customization)

## Installation

**To get started with this project, clone the repository to your local machine:**
```bash
git clone https://github.com/CPSC481FitFusion/FitFusion.git
```
**Navigate to the project directory:**
```bash
cd FitFusion
```
**Install the necessary dependencies:**
```bash
npm install
```
**In the project directory, you can run:**
```bash
npm run dev
```
Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

## Technologies Used

FitFusion is a web-based application created using the following technologies:
- ReactJS (using Vite)
- Bootstrap
- MaterialUI
- Sass
- HTML
- CSS
- JavaScript

## Project Information

This application was developed as a class project for **CPSC 481: Human-Computer Interaction Design I**. It is a part of the coursework to demonstrate an understanding of user-centered design principles and we are demonstrating this through the implementation of a user-friendly fitness tracking application.

## User Onboarding and Login/Registration
Access FitFusion directly at [FitFusion App](https://cpsc481fitfusion.netlify.app/). Best viewed using iPhone 12 Pro Dimensions.

FitFusion offers a user registration and login process. To register, navigate to the Register page and create a unique username and password, ensuring the password matches the confirm password input. To log in, use one of the three preexisting users or the credentials created during registration. The preexisting users are:

- username: johndoe | password: johndoepassword
- username: bodybuilder | password: bodypassword
- username: janedoe | password: JaneDoePassword
## Using FitFusion

### Task 1: Track Workout
- **Starting a New Workout:** 
  - Login at [FitFusion App](https://cpsc481fitfusion.netlify.app/) and navigate to the Workout Tab in the Logbook.
  - Click the "Start a Workout" button.
  - A modal appears for workout details (Workout name, date, start and end time, notes). Fill in and save these details.
- **Adding Exercises to Your Workout:** 
  - Inside the workout modal, click "Add Exercise".
  - Enter the exercise name in the new modal and save.
  - For each exercise, add sets by clicking "Add Set", then enter reps and weight for each set.
- **Completing and Saving Your Workout:** 
  - Click "Finish" after adding all exercises and sets.
  - Confirm workout completion in the confirmation modal. 
  - The workout saves only if exercises are added; otherwise, an alert prompts you to add exercises.

### Task 2: Track Body Composition
- **Accessing the Feature:** 
  - Go to the Body Composition Tab in the Logbook.
  - Click "Start a Body Composition" to begin.
- **Logging Measurements:** 
  - Record the date and at least one body measurement (weight, waist, hip, arm, thigh circumference).
  - If no measurement is entered, an error alert appears.

### Task 3: Notifications/Alerts
- **Setting Up Alerts:** 
  - Navigate to the Alerts page from the bottom navigation.
  - Click "Set an Alert".
  - Enter the Alert's name and time and save.

### Task 4: View and Manage History
- **Accessing Workout History:** 
  - Your workout history is visible under the Workout section in the Logbook.
- **Viewing History Details:** 
  - Workouts are listed from newest to oldest.
  - Currently, there is no filter or search functionality.

### Task 5: User Goal Tracking
- **Setting New Goals:** 
  - In the Goals tab of the Logbook, click "Set a Goal".
  - Enter goal details in the modal and save.
- **Monitoring Goal Progress:** 
  - View your active goals in the Goal History section under the "Set a Goal" button.

### Settings and Personalization
- **Accessing Settings:** 
  - Select the Settings option in the bottom navigation.
- **Customization Options:** 
  - Change your password, default logbook page (Workout, Body Composition, Goals), and default metrics (lbs/kg, inch/cm).

For a complete experience, visit [FitFusion App](https://cpsc481fitfusion.netlify.app/) and explore the various features to manage and track your fitness journey effectively.

---

FitFusion is your ultimate fitness companion, helping you track workouts, monitor body composition, stay on top of your goals, and view your progress. With our intuitive features and real-life scenarios, you can make the most of your fitness journey. Stay motivated, stay fit with FitFusion!
