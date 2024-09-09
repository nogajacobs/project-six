import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import HomePage from './components/HomePage';

import './style/style.css';

/**
 * The App component is the main entry point for the React application.
 * It defines the routing structure using react-router-dom.
 */
function App() {
  return (
    <div className="App">
      <Routes>
        {/* Route for the login page */}
        <Route path="/login" element={<LoginPage />} />
        
        {/* Route for the registration page */}
        <Route path="/register" element={<RegisterPage />} />
                {/* Route for the home page with username parameter */}
        <Route path="/home/:username" element={<HomePage />} />
         
  
      </Routes>
    </div>
  );
}

export default App;