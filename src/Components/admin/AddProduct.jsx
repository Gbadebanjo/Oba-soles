import React, { useState } from "react";
import axios from "axios";

function AddProduct() {
  const [picture, setPicture] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

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
    productFormData.append('imageUrls', JSON.stringify(imageUrls));
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
