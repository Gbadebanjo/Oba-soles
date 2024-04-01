import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loader from "react-loaders";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  height: 100vh;
  padding-top: 7%;
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
  display: none;

  &:hover {
    transform: scale(1.02);
  }
`;

const ProductBox = styled.div`
  height: 300px;
  width: 200px;
  margin-bottom: 10%;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 5px 10px 1px rgba(0, 0, 0, 0.57);
  -webkit-box-shadow: 2px 5px 10px 1px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 2px 5px 10px 1px rgba(0, 0, 0, 0.57);
  transition: all 1.2s ease-out;

  &:hover {
    transform: scale(1.1);
  }
  &:hover ${Button} {
    display: block;
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
    // opacity: 0.7;
    cursor: pointer;
    // transform: scale(1.05);

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

const StyledLoader = styled(Loader)`
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  top: 0;
  bottom: 0;
  width: 50px;
  height: 50px;
  animation: fadeOut 1s 1s;
  animation-fill-mode: forwards;
`;

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get("/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
      setLoading(false);
    };

    fetchProducts();
  }, []);

  return (
    <Container>
      {loading ? (
        // <LoaderContainer><Loader type="pacman" active /></LoaderContainer>
        <StyledLoader type="pacman" />
      ) : (
        products.map((product) => (
          <ProductBox
            key={product._id}
            onClick={() => handleProductClick(product._id)}
          >
            <ProductImage src={product.picture} alt={product.name} />
            <ProductName>{product.name}</ProductName>
            <ProductPrice>₦ {product.price}</ProductPrice>
            <Button>Add to Cart</Button>
          </ProductBox>
        ))
      )}
    </Container>
  );
};

export default ProductPage;
