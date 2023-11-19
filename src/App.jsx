import 'bootstrap/dist/css/bootstrap.css';
import { StyledEngineProvider } from '@mui/material/styles';
import './scss/main.scss';

import { WorkoutPage } from "./pages/LogbookWorkoutPage"
import { GoalsPage } from "./pages/LogbookGoalsPage"
import { BodyPage } from "./pages/LogbookBodyPage"
import { NotFoundPage } from "./pages/NotFoundPage"
import { SettingsPage } from "./pages/SettingsPage"
import { AlertsPage } from './pages/AlertsPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <Routes>
          <Route path="/" element={<WorkoutPage />} />
          <Route path="/goals" element={<GoalsPage />} />
          <Route path="/body" element={<BodyPage />} />
          <Route path="/alerts" element={<AlertsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </StyledEngineProvider>
    </>
  )
}

export default App
