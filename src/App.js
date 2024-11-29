import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookingPage from "./components/BookingPage";
import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./routes/Router";
import Main from "./routes/Main";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);


function App() {
  return (
    <Router>
      <nav>
        <Main />
        <a href="/booking">Book a Table</a>
      </nav>
      <Routes>
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
