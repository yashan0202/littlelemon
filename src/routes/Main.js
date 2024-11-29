import React, { useState, useReducer, useEffect } from "react";
import BookingForm from "../components/BookingForm";
import { useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from "../utils/api";

// Reducer function for managing available times
const availableTimesReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return action.payload; // Update available times based on selected date
    case "RESET_TIMES":
      return []; // Reset available times
    default:
      return state;
  }
};

const Main = () => {
  const [availableTimes, dispatch] = useReducer(availableTimesReducer, []);
  const [selectedDate, setSelectedDate] = useState("");
  const navigate = useNavigate();

  // Fetch available times based on selected date
  const updateTimes = (date) => {
    if (date) {
      const times = fetchAPI(date); // API call to fetch available times
      dispatch({ type: "UPDATE_TIMES", payload: times });
    } else {
      dispatch({ type: "RESET_TIMES" });
    }
  };

  // Initialize available times when component loads
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0]; // Get today's date
    setSelectedDate(today);
    updateTimes(today);
  }, []);

  // Handle date selection
  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setSelectedDate(newDate);
    updateTimes(newDate); // Update available times based on the new date
  };

  // Handle form submission and navigate to the confirmation page on success
  const handleFormSubmit = (formData) => {
    const result = submitAPI(formData);
    if (result) {
      navigate("/confirmed"); // Navigate to the confirmation page
    } else {
      alert("Error making reservation. Please try again.");
    }
  };

  return (
    <div>
      <BookingForm
        availableTimes={availableTimes}
        selectedDate={selectedDate}
        onDateChange={handleDateChange}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default Main;
