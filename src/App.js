import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import BookingPage from "./components/BookingPage";
import Main from "./routes/Main";

// App Component
function App() {
  const styles = {
    header: {
      backgroundColor: "#495E57",
      color: "#fff",
      padding: "20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    nav: {
      display: "flex",
      gap: "15px",
    },
    navLink: {
      color: "#fff",
      textDecoration: "none",
      fontSize: "1rem",
      transition: "color 0.3s ease",
    },
    navLinkHover: {
      color: "#F4CE14",
    },
    footer: {
      backgroundColor: "#333333",
      color: "#fff",
      textAlign: "center",
      padding: "20px",
      marginTop: "20px",
    },
  };

  return (
    <Router>
      {/* Header */}
      <header style={styles.header}>
        <div>
          <strong>Little Lemon</strong>
        </div>
        <nav style={styles.nav}>
          <Link to="/" style={styles.navLink}>
            Home
          </Link>
          <Link to="/booking" style={styles.navLink}>
            Book a Table
          </Link>
          <Link to="/contact" style={styles.navLink}>
            Contact Us
          </Link>
        </nav>
      </header>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/contact" element={<h1>Contact Us Page</h1>} />
      </Routes>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>&copy; 2024 Little Lemon. All rights reserved.</p>
      </footer>
    </Router>
  );
}

export default App;
