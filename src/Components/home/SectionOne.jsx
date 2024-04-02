import React from "react";
// import styled from "styled-components";
import Shoe1 from "../../Image/pair-brown.png";
import styled, { keyframes } from 'styled-components';
import SalesImg from "../../Image/tag label.png";

const slide = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const Container = styled.div`
  width: 100%;
  height: 650px;
  background-image: url(${Shoe1});
  background-size: 110% auto;
  background-position: 25% ;
  background-attachment: fixed;
  animation: ${slide} 30s linear infinite;
  display: flex;
  justify-content: end;
  align-items: flex-end;

  @media (max-width: 1000px) {
    height: 400px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: scroll;
    }
  }
  
`;


const Story = styled.div`
background-color: rgba(226,220,218, 0.9);
border-radius: 40px 0 0 40px ;
width: 43%;
height: 70%;
padding: 20px 0 0 60px;
display: flex;
flex-direction: column;

@media screen and (max-width: 1000px) {
width: 70%;
height: 60%;
background-color: rgb(228,217,194, 0.9);
padding: 20px 0 0 40px;
}
`;

const StoryHeading = styled.div`
width: 100%;
height: 50%;
// background-color: blue;
`;

const Discount = styled.h1`
  color: ${props => props.color || "#000"};
  font-size: 9vw;
  font-family: Poppins;
  font-weight: 700;
  margin: 0;
  line-height: 0.9;

    @media screen and (max-width: 1000px) {
    font-weight: 600;
    font-size: 70px;
  }
`;

const Promo = styled.div`
width: 100%;
height: 12%;
display: flex;
align-items: center;
flex-direction: row;
color: #000;
margin-top: 30px;

@media screen and (max-width: 1000px) {
  height: 20%;
  margin-top: 10px;
}
`;

const UpTo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 4%;
  height: 60%;
  padding-left: 10px;
`;

const UpToText = styled.p`
margin: 0;
font-size: 17px;
font-weight: 700;
font-family: "Poppins";
height: 50%;

@media screen and (max-width: 1000px) {
  font-size: 13px;
}
`;

const PromoText = styled.h1`
  font-size: 40px;
  font-weight: 300;
  font-family: "Poppins";
  margin: 0;
  padding-left: 2px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
    padding-left: 7px;
  }

  `;

  const ImgBox = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  `;

  const PromoImg = styled.img`
  width: 60%;
  height: 100%;
  object-fit: cover;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
  `; 


const Button = styled.button`
  width: 230px;
  color: #fff;
  background-color: #292929;
  border: none;
  border-radius: 10px;
  font-size: 36px;
  font-weight: 700;
  font-family: "Poppins";
  cursor: pointer;
  transition: all 350ms;
  margin: 20px;
  padding: 5px 15px;

  &:hover {
    background-color: #fff;
    color: #000;
  }

  @media screen and (max-width: 1000px) {
    font-size: 18px;
    width: 150px;
    margin: 10px;
    padding: 10px 15px;
  }
`;

const SectionOne = () => {
  return (
    <Container>
      {/* <Discount>Get Amazing Discount %</Discount> */}
      <Story>
        <StoryHeading>
       <Discount>Classic</Discount>
       <Discount color="#c39f51">Soles</Discount>
        </StoryHeading>
        <Promo>
          <UpTo>
            <UpToText>UP</UpToText>
            <UpToText>TO</UpToText>
          </UpTo>
          <PromoText>5% Discount</PromoText>
          <ImgBox>   
                 <PromoImg src={SalesImg} alt="sales" />
</ImgBox>
        </Promo>
      <Button>Shop Now</Button>
      </Story>
    </Container>
  );
};

export default SectionOne;
