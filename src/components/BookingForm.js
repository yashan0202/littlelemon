import React, { useState } from "react";

const BookingForm = ({ availableTimes, dispatch, selectedDate, onDateChange }) => {
  // State variables for the form
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  // Form submit handler
  const handleSubmit = (event) => {
    event.preventDefault();

    // Log reservation details
    console.log("Reservation Details:", { selectedDate, time, guests, occasion });
    alert("Reservation submitted!");

    const formData = { date: selectedDate, time, guests, occasion };
    const result = submitAPI(formData);

    if (result) {
      alert("Reservation successfully made!");
    } else {
      alert("Error making reservation.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "grid", maxWidth: "300px", gap: "20px" }}
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={selectedDate}
        onChange={onDateChange}
        required
        min={new Date().toISOString().split("T")[0]} // Prevent past dates
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      >
        <option value="">Select a time</option>
        {availableTimes.map((timeOption) => (
          <option key={timeOption} value={timeOption}>
            {timeOption}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        min="1"
        max="10"
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
      >
        <option value="">Select an occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <button type="submit">Make Your Reservation</button>
    </form>
  );
};

export default BookingForm;
