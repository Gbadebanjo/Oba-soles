import React from "react";
import styled from "styled-components";
import Cart from "../../Image/browncart.png";
import Seed from "../../Image/icons8-seed-48.png";
import Percentage from "../../Image/icons8-percentage-80.png";

const Container = styled.div`
  height: 55%;
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const BoxImg = styled.div`
  font-size: 70px;
  margin-left: 40px;
  margin-top: 30px;
  font-weight: bold;
  background-position: right bottom;

  img {
    filter: sepia(1); // make the image brown
  }

  &:hover img {
    filter: invert(1); // make the image white on hover
  }

  @media (max-width: 768px) {
    margin-top: 6px;
    margin-left: 20px;
  }
`;

const BoxText = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin-left: 40px;

  @media (max-width: 768px) {
    margin-left: 25px;
  }
`;

const BoxLink = styled.a`
  // text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  font-weight: 600;
  margin-left: 40px;
  color: #c39f51;
  &:hover {
    color: #fff;
  }

  @media (max-width: 768px) {
    margin-left: 25px;
  }
`;

const Box = styled.div`
  height: 250px;
  width: 25%;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0px -1px 15px -5px #a8a4a4;
  -webkit-box-shadow: 0px -1px 15px -5px #dad0d0;
  border-left: 5px solid #c39f51;
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 1.2s ease-out;
  color: #c39f51;
  background-color: #fff;

  @media (max-width: 768px) {
    width: 90%;
    height: 200px;
    margin: 10px 20px;
  }

  &:hover {
    background-position: left bottom;
    transform: scale(1.05);
    transition: all 500ms;
    cursor: pointer;
    color: #fff;
    background-color: #c39f51;

    ${BoxImg} img {
      filter: invert(1); // make the image white on hover
    }

    ${BoxLink} {
      color: #fff;
    }
  }
`;

const SectionTwo = () => {
  return (
    <Container>
      <Box>
        <BoxImg>
          <img src={Percentage} alt="percentage" />
        </BoxImg>
        <BoxText>Get Up To 5% Discount</BoxText>
        <BoxLink href="/product">Shop Now</BoxLink>
      </Box>
      <Box>
        <BoxImg>
          <img src={Cart} alt="cart" />
        </BoxImg>
        <BoxText>New Arrivals</BoxText>
        <BoxLink href="/product">Shop Now</BoxLink>
      </Box>
      <Box>
        <BoxImg>
          <img src={Seed} alt="seed" />
        </BoxImg>
        <BoxText>Best Selling Products</BoxText>
        <BoxLink href="/product">Shop Now</BoxLink>
      </Box>
    </Container>
  );
};

export default SectionTwo;
