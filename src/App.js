import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import WelcomePage from "./components/WelcomePage";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import AccountSettings from "./components/AccountSettings";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/account-settings" element={<AccountSettings />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <Router>
    <AnimatedRoutes />
  </Router>
);

export default App;
