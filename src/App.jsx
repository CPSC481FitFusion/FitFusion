import './scss/styles.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { AlertsPage } from './pages/AlertsPage';
import { LoginPage } from "./pages/LoginPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Route, Routes } from 'react-router-dom';
import { RegisterPage } from "./pages/RegisterPage";
import { SettingsPage } from "./pages/SettingsPage";
import { StyledEngineProvider } from '@mui/material/styles';
import { WelcomePage } from './pages/WelcomePage';
import { LogbookPage } from './pages/Logbook/LogbookPage';
import { UnderConstructionPage } from './pages/UnderConstructionPage';
import SeededData from './utils/SeedData';

function App() {
  // If localStorage is empty, populate with seeded data
  if (localStorage.length === 0) {
    SeededData();
  }

  return (
    <>
      <StyledEngineProvider injectFirst>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logbook" element={<LogbookPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/alerts" element={<AlertsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/underConstruction/:backTo" element={<UnderConstructionPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </StyledEngineProvider>
    </>
  )
}

export default App
