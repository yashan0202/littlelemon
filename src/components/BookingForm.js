import React, { useState } from "react";

const BookingForm = ({ availableTimes, dispatch, selectedDate, onDateChange }) => {
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Reservation submitted!");
  };

  return (
    <main>
      <section aria-labelledby="booking-heading">
        <h1 id="booking-heading">Make a Reservation</h1>
        <form
  onSubmit={handleSubmit}
  style={{ display: "grid", maxWidth: "300px", gap: "20px" }}
  aria-label="Booking form for Little Lemon Restaurant"
>
  <div>
    <label htmlFor="res-date">Choose date</label>
    <input
      type="date"
      id="res-date"
      value={selectedDate}
      onChange={onDateChange}
      required
      min={new Date().toISOString().split("T")[0]}
      aria-required="true"
    />
  </div>

  <div>
    <label htmlFor="res-time">Choose time</label>
    <select
      id="res-time"
      value={time}
      onChange={(e) => setTime(e.target.value)}
      required
      aria-required="true"
    >
      <option value="">Select a time</option>
      {availableTimes.map((timeOption) => (
        <option key={timeOption} value={timeOption} aria-label={`Select time ${timeOption}`}>
          {timeOption}
        </option>
      ))}
    </select>
  </div>

  <div>
    <label htmlFor="guests">Number of guests</label>
    <input
      type="number"
      id="guests"
      value={guests}
      onChange={(e) => setGuests(e.target.value)}
      min="1"
      max="10"
      required
      aria-required="true"
      aria-label="Enter the number of guests"
    />
  </div>

  <div>
    <label htmlFor="occasion">Occasion</label>
    <select
      id="occasion"
      value={occasion}
      onChange={(e) => setOccasion(e.target.value)}
      required
      aria-required="true"
    >
      <option value="">Select an occasion</option>
      <option value="Birthday" aria-label="Birthday Occasion">Birthday</option>
      <option value="Anniversary" aria-label="Anniversary Occasion">Anniversary</option>
    </select>
  </div>

  <button type="submit" aria-label="Submit reservation form">
    Make Your Reservation
  </button>
</form>

      </section>
    </main>
  );
};

export default BookingForm;
