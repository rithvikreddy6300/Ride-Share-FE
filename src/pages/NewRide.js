import React, { useState } from "react";
import "../styles/NewRide.css";
const NewRide = () => {
  const [tripDetails, setTripDetails] = useState({
    tripId: "",
    driverName: "",
    driverPhone: "",
    cabNo: "",
    companionNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTripDetails({ ...tripDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("YOUR_API_ENDPOINT", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tripDetails),
      });

      if (response.ok) {
        console.log("Data sent successfully");
        // Handle success, reset the form, etc.
      } else {
        console.error("Failed to send data");
        // Handle failure, show error message, etc.
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  return (
    <div className="trip-form">
      <form onSubmit={handleSubmit}>
        <div className="form-block">
          <label htmlFor="tripId">Trip ID:</label>
          <input
            type="text"
            id="tripId"
            name="tripId"
            value={tripDetails.tripId}
            onChange={handleChange}
          />

          <label htmlFor="driverName">Driver Name:</label>
          <input
            type="text"
            id="driverName"
            name="driverName"
            value={tripDetails.driverName}
            onChange={handleChange}
          />

          <label htmlFor="driverPhone">Driver Phone No:</label>
          <input
            type="text"
            id="driverPhone"
            name="driverPhone"
            value={tripDetails.driverPhone}
            onChange={handleChange}
          />

          <label htmlFor="cabNo">Cab No:</label>
          <input
            type="text"
            id="cabNo"
            name="cabNo"
            value={tripDetails.cabNo}
            onChange={handleChange}
          />
        </div>

        <div className="form-block">
          <label htmlFor="companionNumber">Companion Number:</label>
          <input
            type="text"
            id="companionNumber"
            name="companionNumber"
            value={tripDetails.companionNumber}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewRide;
