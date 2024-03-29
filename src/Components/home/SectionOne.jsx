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
  height: 550px;
  background-image: url(${Shoe1});
  background-size: 110% auto;
  background-position: 25% ;
  background-attachment: fixed;
  animation: ${slide} 30s linear infinite;
  display: flex;
  justify-content: end;
  align-items: flex-end;

  @media (max-width: 785px) {
    height: 400px;
    // background-object-fit: contain;
    }
  }
  
`;


const Story = styled.div`
background-color: rgba(226,220,218, 0.9);
border-radius: 40px 0 0 40px ;
width: 35%;
height: 80%;
padding: 20px 0 0 60px;
display: flex;
flex-direction: column;

@media screen and (max-width: 768px) {
width: 60%;
height: 70%;
background-color: rgb(228,217,194, 0.9);
}
`;

const StoryHeading = styled.div`
width: 100%;
height: 50%;
// background-color: blue;
`;

const Discount = styled.h1`
  color: ${props => props.color || "#000"};
  font-size: 130px;
  font-family: Poppins;
  font-weight: 700;
  margin: 0;
  line-height: 0.9;

    @media screen and (max-width: 768px) {
    font-weight: 600;
    padding-left: 20px;
    padding-top: 150px;
    line-height: none;
  }
`;

const Promo = styled.div`
width: 100%;
height: 12%;
display: flex;
flex-direction: row;
color: #000;
margin-top: 20px;
`;

const UpTo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-top: 6px;
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
`;

const PromoText = styled.h1`
  font-size: 40px;
  font-weight: 300;
  font-family: "Poppins";
  margin: 0;
  padding-left: 2px;
  `;

  const ImgBox = styled.div`
  width: 50%;
  height: 80%;
  `;

  const PromoImg = styled.img`
  width: 60%;
  height: 100%;
  object-fit: cover;
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
  margin-top: 20px;
  padding: 5px 15px;

  &:hover {
    background-color: #fff;
    color: #000;
  }

  @media screen and (max-width: 768px) {
    font-size: 18px;
    margin-left: 25px;
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
