import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import TripDashboard from "./pages/TripDashboard";
import TripDetails from "./pages/TripDetails";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/signup" element={<SignupPage />} />
    <Route path="/dashboard" element={<TripDashboard />} />
    <Route path="/trip/:tripId" element={<TripDetails />} />
  </Routes>
);

export default AppRoutes;