import React, { useReducer } from "react";
import BookingPage from "../components/BookingPage";

// Function to initialize available times
const initializeTimes = () => [
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
];

// Reducer function to handle state changes
const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_DATE":
      return initializeTimes(); // Placeholder logic for now
    default:
      return state;
  }
};

const Main = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <div>
      <BookingPage availableTimes={availableTimes} dispatch={dispatch} />
    </div>
  );
};

export default Main;
