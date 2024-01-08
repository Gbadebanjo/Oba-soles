import React, { useState, useRef } from "react";
import axios from "axios";

function AddProduct() {
  const [picture, setPicture] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const fileInput = useRef();  // imported ref to clear the file input field
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Firstly image is uploaded to Cloudinary
    const imageUrls = [];
    for (let i = 0; i < picture.length; i++) {
      const imageFormData = new FormData();
      imageFormData.append("image", picture[i]);
      try {
        const imageResponse = await axios.post(
          "/cloudinary/upload",
          imageFormData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        imageUrls.push(imageResponse.data.url); // assuming the URL is returned in the 'url' property
      } catch (error) {
        alert("Image upload failed.");
        return;
      }
    }

    // Then, add the product with the image URL
    const productFormData = new FormData();
    productFormData.append("image", picture[0]);
    productFormData.append("name", name);
    productFormData.append("price", price);
    productFormData.append("description", description);

    try {
      const response = await axios.post("/admin/add-product", productFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert(response.data.message);

      // Reset the state variables
      setPicture("");
      setName("");
      setPrice("");
      setDescription("");
      fileInput.current.value = ""; 
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
        Picture:
        <input
          type="file"
          ref={fileInput}
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
