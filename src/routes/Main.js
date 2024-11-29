import React, { useState, useReducer, useEffect } from "react";
import BookingForm from "../components/BookingForm";  // Adjust based on your actual file structure


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

  // Fetch available times based on selected date
  const updateTimes = (date) => {
    if (date) {
      // Fetch available times from API
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

  return (
    <div>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        selectedDate={selectedDate}
        onDateChange={handleDateChange}
      />
    </div>
  );
};

export default Main;
