import React, { useState } from "react";
import axios from "axios";

const SimpleForm = () => {
  const [formData, setFormData] = useState({
    field1: "",
    field2: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/posts", formData);
      console.log("API Response:", response.data);
      alert("Data submitted successfully!");
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Something went wrong!");
    }
  };

  return (
    
    <div style={{ maxWidth: 400, margin: "50px auto", textAlign: "center" }}>

      <h2>Submit Two Fields</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="field1"
          value={formData.field1}
          onChange={handleChange}
          placeholder="Enter first field"
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />
        <input
          type="text"
          name="field2"
          value={formData.field2}
          onChange={handleChange}
          placeholder="Enter second field"
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />
        <button type="submit" style={{ padding: "10px 20px", cursor: "pointer" }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default SimpleForm;