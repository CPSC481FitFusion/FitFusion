import React, { useState, useEffect } from 'react';
import './assets/styles/globalStyles.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { LoginPage } from "./pages/LoginPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Route, Routes, Navigate } from 'react-router-dom';
import { RegisterPage } from "./pages/RegisterPage";
import { SettingsPage } from "./pages/SettingsPage";
import { StyledEngineProvider } from '@mui/material/styles';
import { WelcomePage } from './pages/WelcomePage';
import { LogbookPage } from './pages/Logbook/LogbookPage';
import { UnderConstructionPage } from './pages/UnderConstructionPage';
import SeededData from './utils/SeedData';
import AlertsPage from './pages/AlertPage/AlertsPage';

function App() {
  // State to track if user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("userLoggedIn") !== null);
  const userDataLocalStorage = JSON.parse(localStorage.getItem("userData") || "[]");

  // If userData in localStorage is empty, populate with seeded data
  if (userDataLocalStorage.length === 0 ) {
    SeededData();
  }

  useEffect(() => {
    // Event listener for login status changes
    const handleLoginChange = () => {
      setIsLoggedIn(localStorage.getItem("userLoggedIn") !== null);
    };

    // Listen for custom login event
    window.addEventListener("loginChange", handleLoginChange);

    // Cleanup listener
    return () => window.removeEventListener("loginChange", handleLoginChange);
  }, []);

  return (
    <>
      <StyledEngineProvider injectFirst>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          
          {/* Protected Routes */}
          {isLoggedIn ? (
            <>
              <Route path="/logbook/:logbookDefaultTab" element={<LogbookPage />} />
              <Route path="/alerts" element={<AlertsPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/underConstruction/:backTo" element={<UnderConstructionPage />} />
            </>
          ) : (
            <>
              <Route path="/logbook/:logbookDefaultTab" element={<Navigate replace to="/" />} />
              <Route path="/alerts" element={<Navigate replace to="/" />} />
              <Route path="/settings" element={<Navigate replace to="/" />} />
              <Route path="/underConstruction/:backTo" element={<Navigate replace to="/" />} />
            </>
          )}

          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </StyledEngineProvider>
    </>
  );
}

export default App;