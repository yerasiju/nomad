import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Reserve.css";

const Reservation = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    number: "",
    message: "",
    time: "",
    people: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendMail = (e) => {
    e.preventDefault();

    const parameters = {
      from_name: formData.fullName,
      number: formData.number,
      message: formData.message,
      time: formData.time,
      people: formData.people,
    };

    emailjs
      .send(
        "service_z71vyvr",
        "template_tia16pb",
        parameters,
        "0ELYbxJSfdI0D1o3L"
      )
      .then((res) => {
        alert("Success: " + res.status);
        setFormData({
          fullName: "",
          number: "",
          message: "",
          time: "",
          people: "",
        });
      })
      .catch((err) => {
        alert("Error: Please try again.");
        console.error(err);
      });
  };

  return (
    <div className="reservation-container">
      <h1 className="reservation-heading">Make a Reservation</h1>
      <form onSubmit={sendMail} className="reservation-form">
        <label className="reservation-label">Full Name:</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          className="reservation-input"
        />
        <label className="reservation-label">Phone Number:</label>
        <input
          type="tel"
          name="number"
          value={formData.number}
          onChange={handleChange}
          required
          className="reservation-input"
        />
        <label className="reservation-label">Number of People:</label>
        <input
          type="number"
          name="people"
          value={formData.people}
          onChange={handleChange}
          required
          className="reservation-input"
          min="1"
          max="20"
        />
        <label className="reservation-label">Reservation Time:</label>
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
          className="reservation-input"
        />
        <label className="reservation-label">Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="reservation-textarea"
        />
        <button type="submit" className="reservation-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Reservation;
