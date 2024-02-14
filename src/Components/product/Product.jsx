import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
height: 100vh;
padding-top: 7%;
`;

const ProductBox = styled.div`
height: 280px;
width: 200px;
margin-bottom: 10%;
display: flex;
flex-direction: column;
box-shadow: 2px 5px 10px 1px rgba(0,0,0,0.57);
-webkit-box-shadow: 2px 5px 10px 1px rgba(0,0,0,0.57);
-moz-box-shadow: 2px 5px 10px 1px rgba(0,0,0,0.57);
transition: all 1.2s ease-out;

&:hover {
  transform: scale(1.1);
}

@media only screen and (max-width: 768px) {
  height: 350px;
  width: 330px;
  padding-bottom: 20%;
}
`;

const ProductImage = styled.img`
height: 80%;
width: 100%;
object-fit: cover;
transition: all 350ms;
border-radius: 7px;
&:hover {
  opacity: 0.7;
  cursor: pointer;
}
`;

const ProductName = styled.h3`
font-size: 16px;
font-weight: 500;
font-family: "Poppins", sans-serif;
margin: 0px;
`;

const ProductPrice = styled.p`
font-size: 14px;
font-weight: 500;
margin: 0px;
`;

const Button = styled.button`
background-color: #ee0000;
color: #fff;
padding: 6px 15px;
border: none;
border-radius: 5px;
font-size: 15px;
font-weight: 500;
transition: scale(1.05);

&:hover {
  transform: scale(1.02);}

`; 

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  
  const navigate = useNavigate();
  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  }

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Container>
      {products.map((product) => (
        <ProductBox key={product._id} onClick={ () => handleProductClick(product._id)}>
          <ProductImage src={product.picture} alt={product.name} />
          <ProductName>{product.name}</ProductName>
          <ProductPrice>₦ {product.price}</ProductPrice>
          <Button>Add to Cart</Button>
        </ProductBox>
      ))}
    </Container>
  );
};

export default ProductPage;
