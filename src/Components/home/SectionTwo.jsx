import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPercent } from "@fortawesome/free-solid-svg-icons";

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
  padding-right: ;
  width: 25%;
  color: #fff;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0px -1px 15px -5px #a8a4a4;
  -webkit-box-shadow: 0px -1px 15px -5px #dad0d0;
  border-left: 5px solid #823f27;
  background: linear-gradient(to right, #fff 50%, #823f27 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 1.2s ease-out;
  &:hover {
    background-position: left bottom;
    transform: scale(1.2);
    transition: all 350ms;
    cursor: pointer;
    color: #823f27;
  }
`;

const BoxImg = styled.img`
  height: 20px;
  width: 20px;
  border-radius: 10px; // make the image round
  object-fit: cover; // resize the image to fit its container while maintaining its aspect ratio
  margin: 5px; // add some space around the image
  transition: transform 0.2s; // animate any changes to the transform property

  &:hover {
    transform: scale(1.1); // scale up the image when it's hovered over
  }
`;

const BoxText = styled.p`
  font-size: 20px;
  font-weight: 600;
  padding-left: 10px;
  padding-top: 10px;
`;

const BoxLink = styled.a`
text-decoration: none;
font-size: 20px;
font-weight: 600;

`

const SectionTwo = () => {
  return (
    <Container>
      <Box>
      <FontAwesomeIcon icon={faPercent}  size="3x" size="3x" style={{fontWeight: "bold"}}/>
        <BoxText>Get Up To 5% Discount</BoxText>
        <BoxLink href="/product">Shop Now</BoxLink>
      </Box>
      <Box>
      <FontAwesomeIcon icon={faPercent}  size="3x" size="3x" style={{fontWeight: "bold"}}/>
        <BoxText>New Arrivals</BoxText>
        <BoxLink href="/product">Shop Now</BoxLink>
      </Box>
      <Box>
      <FontAwesomeIcon icon={faPercent}  size="3x" size="3x" style={{fontWeight: "bold"}}/>
        <BoxText>Best Selling Products</BoxText>
        <BoxLink href="/product">Shop Now</BoxLink>
      </Box>
      
    </Container>
  );
};

export default SectionTwo;
