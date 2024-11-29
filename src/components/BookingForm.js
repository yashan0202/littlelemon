import React, { useState } from "react";

const BookingForm = ({ availableTimes, dispatch, selectedDate, onDateChange }) => {
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Reservation submitted!");
  };

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      backgroundColor: "#f4f4f9",
    },
    formWrapper: {
      backgroundColor: "#ffffff",
      padding: "40px",
      borderRadius: "10px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      maxWidth: "400px",
      width: "100%",
    },
    heading: {
      fontSize: "1.8rem",
      marginBottom: "20px",
      textAlign: "center",
      color: "#495E57",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "15px",
    },
    label: {
      fontSize: "1rem",
      marginBottom: "5px",
      color: "#333333",
    },
    input: {
      padding: "10px",
      borderRadius: "5px",
      border: "1px solid #ddd",
      fontSize: "1rem",
      outline: "none",
      transition: "border-color 0.3s ease",
    },
    inputFocus: {
      borderColor: "#495E57",
    },
    button: {
      padding: "12px",
      borderRadius: "5px",
      border: "none",
      backgroundColor: "#495E57",
      color: "#ffffff",
      fontSize: "1rem",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#333333",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.formWrapper}>
        <h1 style={styles.heading}>Reserve Your Table</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div>
            <label htmlFor="res-date" style={styles.label}>
              Choose date
            </label>
            <input
              type="date"
              id="res-date"
              value={selectedDate}
              onChange={onDateChange}
              required
              min={new Date().toISOString().split("T")[0]}
              style={styles.input}
            />
          </div>

          <div>
            <label htmlFor="res-time" style={styles.label}>
              Choose time
            </label>
            <select
              id="res-time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
              style={styles.input}
            >
              <option value="">Select a time</option>
              {availableTimes.map((timeOption) => (
                <option key={timeOption} value={timeOption}>
                  {timeOption}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="guests" style={styles.label}>
              Number of guests
            </label>
            <input
              type="number"
              id="guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              min="1"
              max="10"
              required
              style={styles.input}
            />
          </div>

          <div>
            <label htmlFor="occasion" style={styles.label}>
              Occasion
            </label>
            <select
              id="occasion"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              required
              style={styles.input}
            >
              <option value="">Select an occasion</option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </select>
          </div>

          <button
            type="submit"
            style={{
              ...styles.button,
              ":hover": styles.buttonHover,
            }}
          >
            Make Your Reservation
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
