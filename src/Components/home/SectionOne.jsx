import React from "react";
import styled from "styled-components";
import Shoe1 from "../../Image/Brouge.jpg";

const Container = styled.div`
  width: 100%;
  height: 550px;
  background-image: url(${Shoe1});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding: 0;
`;

const Discount = styled.h1`
  color: red;
  font-size: 20px;
  padding-top: 150px;
  padding-left: 90px;
    line-height: 1.1;
    letter-spacing: 0.9px;
`;

const Story = styled.h1`
  color: #fff;
  font-size: 55px;
  padding-left: 60px;
  padding-top: 30px;
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: 0.5px;
  text-shadow: 0 0 20px #000;
  margin-left: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 40px;
  width: 40%;
  height: 30%;
`;

const Button = styled.button`
  width: 120px;
  height: 40px;
  color: #fff;
  background-color: transparent;
  border: none;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 600;
  margin-left: 70px;
  cursor: pointer;
  transition: all 350ms;
  border: 1.5px solid #d00000;
  &:hover {
    background-color: #fff;
    color: #000;
  }
`;
const SectionOne = () => {
  return (
    <Container>
      <Discount>Get Discount Sales</Discount>
      <Story>
        Get Favorite Shoes & <br />
        Enjoy Your Journey
      </Story>
      <Button>Shop Now</Button>
    </Container>
  );
};

export default SectionOne;
