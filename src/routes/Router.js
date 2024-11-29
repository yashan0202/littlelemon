import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BookingPage from "../components/BookingPage";

const AppRouter = () => {
  return (
    <Router>
      <nav style={{ padding: "10px", backgroundColor: "#495E57", color: "#F4CE14" }}>
        <ul style={{ listStyle: "none", display: "flex", gap: "20px" }}>
          <li>
            <Link to="/" style={{ textDecoration: "none", color: "#F4CE14" }}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/booking" style={{ textDecoration: "none", color: "#F4CE14" }}>
              Book a Table
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </Router>
  );
};

// Temporary placeholder for HomePage
const HomePage = () => (
  <div style={{ padding: "20px" }}>
    <h1>Welcome to Little Lemon</h1>
    <p>Explore our restaurant and book a table!</p>
  </div>
);

export default AppRouter;
