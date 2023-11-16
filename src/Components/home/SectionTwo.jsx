import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPercent } from "@fortawesome/free-solid-svg-icons";
import Cart from "../../Image/browncart.png";
import Seed from "../../Image/icons8-seed-96.png";

const Container = styled.div`
  height: 50%;
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;



const Box = styled.div`
  height: 250px;
  width: 25%;
  
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0px -1px 15px -5px #a8a4a4;
  -webkit-box-shadow: 0px -1px 15px -5px #dad0d0;
  border-left: 5px solid #823f27;
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 1.2s ease-out;
  color: #823f27;
  background-color: #fff;
  &:hover {
    background-position: left bottom;
    transform: scale(1.2);
    transition: all 350ms;
    cursor: pointer;
    color: #fff;
    background-color: #823f27;
  }
`;

const BoxImg = styled.div`
  font-size: 70px;
  margin-left: 30px;
  font-weight: bold;
  background-position: right bottom;

  img {
    filter: sepia(1); // make the image brown
  }

  &:hover img {
    filter: invert(1); // make the image white on hover
  }
`;

const BoxText = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin-left: 30px;
//   color: #fff;

`;

const BoxLink = styled.a`
text-decoration: none;
font-size: 20px;
font-weight: 600;
margin-left: 30px;

`

const SectionTwo = () => {
  return (
    <Container>
      <Box>
      <BoxImg>%</BoxImg>
        <BoxText>Get Up To 5% Discount</BoxText>
        <BoxLink href="/product">Shop Now</BoxLink>
      </Box>
      <Box>
        <BoxImg><img src={Cart} alt="cart"/></BoxImg>
        <BoxText>New Arrivals</BoxText>
        <BoxLink href="/product">Shop Now</BoxLink>
      </Box>
      <Box>
      <BoxImg><img src={Seed} alt="seed"/></BoxImg>
        <BoxText>Best Selling Products</BoxText>
        <BoxLink href="/product">Shop Now</BoxLink>
      </Box>
      
    </Container>
  );
};

export default SectionTwo;
