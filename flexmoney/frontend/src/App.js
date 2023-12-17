// App.js
import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    batch: "6-7AM",
  });
  const navigate = useNavigate();

  const [pay, setPay] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Perform basic validations (you can add more validations)
      if (formData.age < 18 || formData.age > 65) {
        alert("Age must be between 18 and 65");
        return;
      }
      console.log(pay);
      // checking for payment
      if (!pay) {
        alert("Please Pay first !!");
        return;
      }

      // Call backend API to store user data
      await axios
        .post("http://localhost:8080/api/v1/enroll", {
          ...formData,
        })
        .then((res, err) => {
          console.log(res.data.newuser);
          navigate("/enroll", { state: { props: res.data.newuser } });
        });

      alert("Enrolled successfully!!");
    } catch (error) {
      console.error("Error during enrollment:", error.message);
    }
  };

  return (
    <div className="container">
      <div>
        <h1 className="heading">Yoga Class Admission Form</h1>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type="text" name="name" onChange={handleChange} required />
          <label>Age:</label>
          <input type="number" name="age" onChange={handleChange} required />
          <label>Select Batch:</label>
          <select name="batch" onChange={handleChange} required>
            <option value="6-7AM">6-7AM</option>
            <option value="7-8AM">7-8AM</option>
            <option value="8-9AM">8-9AM</option>
            <option value="5-6PM">5-6PM</option>
          </select>

          <span>
            <input
              type="checkbox"
              name="payment"
              value="yes"
              onChange={() => {
                setPay(!pay);
              }}
            />
            <label style={{ padding: "10px" }}>Amount Paid</label>
          </span>
          <button type="submit">Enroll</button>
        </form>
      </div>
    </div>
  );
};

export default App;
