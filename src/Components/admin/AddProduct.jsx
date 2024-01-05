import React, { useState } from "react";
import axios from "axios";

function AddProduct() {
  const [picture, setPicture] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("/admin/addProduct", {
        name,
        picture,
        price,
        description,
      });

      alert(response.data.message);
    } catch (error) {
      if (error.response && error.response.data) {
        alert("Server error: " + error.response.data.message);
      } else if (error.request) {
        alert("No response received from server.");
      } else {
        alert("An error occurred.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Picture URL:
        <input
          type="file"
          onChange={(e) => setPicture(e.target.files)}
          required
          multiple
        />
      </label>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Price:
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </label>
      <label>
        Info:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </label>
      <button type="submit">Add Product</button>
    </form>
  );
}

export default AddProduct;
