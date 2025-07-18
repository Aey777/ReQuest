import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AuthPage from "./pages/Auth/AuthPage";
import ProviderForm from "./pages/Provider/ProviderForm";
import SeekerSearch from "./pages/Seeker/SeekerSearch";
// import ModeratorDashboard from "./pages/Moderator/ModeratorDashboard";

function App() {
  const [user, setUser] = useState(null); // Manage user state

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/auth" />} /> {/* 🔁 Redirect root to /auth */}
      <Route path="/auth" element={<AuthPage setUser={setUser} />} />
      <Route path="/provider" element={<ProviderForm />} />
      <Route path="/seeker" element={<SeekerSearch />} />
      {/* <Route path="/moderator" element={<ModeratorDashboard />} /> */}
    </Routes>
  );
}

export default App;

