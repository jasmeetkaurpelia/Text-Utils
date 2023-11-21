import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import React, { useState } from 'react'
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  const [isDarkModeActive, setIsDarkModeActive] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkModeActive(!isDarkModeActive);
    if (isDarkModeActive) {
      showAlert("Light Mode has been enabled!", "success");
    } else {
      showAlert("Dark Mode has been enabled!", "success");
    }
  };

  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
    <Router>
      <div className={`app-container ${isDarkModeActive ? 'dark-mode' : ''}`}>
        <div className='bg-color'>
          <Navbar title="TextUtils" />
          <Alert alert={alert} />
          <div className="container mt-4">
            <Routes>
              <Route exact path="/about" element={<About />} />
              <Route exact path="/Text-Utils" element={<TextForm heading="Enter the text to analyze below:" showAlert={showAlert} />} />
            </Routes>
            <button
              className={`dark-mode-button ${isDarkModeActive ? 'dark-mode-active' : ''}`}
              onClick={toggleDarkMode}>
              <span className="dark-mode-icon">🌙</span>
            </button>
          </div>
        </div>
      </div>
    </Router>
  </>
  );
}

export default App;
