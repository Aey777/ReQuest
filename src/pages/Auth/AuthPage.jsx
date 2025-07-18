import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser, loginUser } from "../../utils/api";
import "./AuthPage.css";

const AuthPage = ({ setUser }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("provider");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isRegister) {
        const data = await registerUser({ email, password, role });
        alert("Registration successful! Please log in.");
        setIsRegister(false);
        setEmail("");
        setPassword("");
      } else {
        const response = await loginUser({ email, password });

        console.log("Login response:", response); // 🔍 Debugging line

        if (response.token && response.user) {
          localStorage.setItem("token", response.token);
          setUser(response.user);
          navigate(`/${response.user.role}`);
        } else {
          alert("Authentication failed. Please check your credentials.");
        }
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <h2>{isRegister ? "Register" : "Login"}</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        {isRegister && (
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="provider">Service Provider</option>
            <option value="seeker">Service Seeker</option>
            <option value="moderator">Moderator</option>
          </select>
        )}
        <button type="submit">{isRegister ? "Register" : "Login"}</button>
      </form>
      <p onClick={() => setIsRegister(!isRegister)} className="auth-toggle">
        {isRegister ? "Already have an account? Login" : "Don't have an account? Register"}
      </p>
    </div>
  );
};

export default AuthPage;
