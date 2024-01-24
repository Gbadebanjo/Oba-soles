import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
height: 100vh;
padding-top: 7%;
`;

const ProductBox = styled.div`
height: 350px;
width: 300px;
margin: 0% 1%;
justify-content: center;
align-items: center;
-webkit-box-shadow: 0px -1px 15px -5px #dad0d0;
box-shadow: 0px -1px 15px -5px #a8a4a4;
margin-bottom: 10%;

@media only screen and (max-width: 768px) {
  height: 350px;
  width: 330px;
  padding-bottom: 20%;
  -webkit-box-shadow: none;
  margin-bottom: 1%;

}
`;

const ProductImage = styled.img`
height: 100%;
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
color: black;
font-size: 1.2rem;
font-weight: 700;
display: flex;
justify-content: center;
text-align: center;
align-items: center;
margin: 0;
padding: 0;
`;

const ProductPrice = styled.p`
color: black;
font-size: 1.2rem;
font-weight: 700;
display: flex;
justify-content: center;
text-align: center;
align-items: center;
margin: 0;
padding: 0;
`;

const ProductPage = () => {
  const [products, setProducts] = useState([]);

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
        <ProductBox key={product._id}>
          <ProductImage src={product.picture} alt={product.name} />
          <ProductName>{product.name}</ProductName>
          <ProductPrice>{product.price}</ProductPrice>
        </ProductBox>
      ))}
    </Container>
  );
};

export default ProductPage;
