import React from "react";
import BookingForm from "./BookingForm";

const BookingPage = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Book a Table at Little Lemon</h1>
      <p>Reserve your table at the finest restaurant for your special occasion!</p>
      <BookingForm />
    </div>
  );
};

export default BookingPage;
