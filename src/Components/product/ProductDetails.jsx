import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "react-loaders";
import styled from "styled-components";
import { GoHeart } from "react-icons/go";

const Container = styled.div`
  height: 100vh;
  display: flex;
  background-color: #f5f5f5;
  padding-top: 7%;
`;

const ProductContainer = styled.div`
  height: 80vh;
  width: 70%;
  display: flex;
  margin: 20px 10%;
  background-color: #fff;
  box-shadow: 2px 5px 6px 1px rgba(0, 0, 0, 0.57);
  border-radius: 10px;
`;

const ProductImage = styled.img`
  width: 45%;
  height: 80%;
  object-fit: contain;
  border-radius: 10px 0px 0px 0px;
`;

const ProductText = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 5px 0px 0px 15px;
`;

const ProductNameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #f5f5f5;
`;

const ProductName = styled.h1`
  padding: 10px;
  font-size: 2rem;
  font-weight: 500;
  color: #000;
  margin: 0;
`;

const StyledHeart = styled(GoHeart)`
  color: red;
  height: 25px;
  width: 25px;
  margin-right: 30px;

  &:hover {
    color: #ee0001;
    cursor: pointer;
  }
`;

const ProductPrice = styled.p``;

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/product/${id}`);
        setProduct(response.data);
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return <Loader type="ball-pulse-sync" active />;
  }
  return (
    <Container>
      <ProductContainer>
        <ProductImage src={product.picture} alt={product.name} />
        <ProductText>
          {" "}
          <ProductNameContainer>
            <ProductName>{product.name}</ProductName>
            <StyledHeart />
          </ProductNameContainer>
          <ProductPrice>₦{product.price}</ProductPrice>
          <p>{product.description}</p>
        </ProductText>
      </ProductContainer>
    </Container>
  );
};

export default ProductDetails;
