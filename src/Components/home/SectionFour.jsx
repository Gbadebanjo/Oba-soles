import styled from "styled-components";
import Shoe1 from "../../Image/Sole1.jpg";
import Shoe2 from "../../Image/Sole2.jpg";
import Shoe3 from "../../Image/Sole3.jpg";
import Shoe4 from "../../Image/Sole4.jpg";

const Container = styled.div`
  height: auto;
  width: 100%;
  background-color: #f5f5f5;

  @media only screen and (max-width: 768px) {
    height: auto;
  }
`;

export const Description = styled.h1`
  display: center;
  text-align: center;
  font-size: 3rem;
  font-weight: 700;
  color: black;
  padding-top: 0.5%;

  @media only screen and (max-width: 768px) {
    font-size: 3rem;
    padding: 0;
    margin: 5px;
  }

`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  // background-color: #f5f6;
  height: 76%;
`;

const ImgBox = styled.div`
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
    padding-bottom: 25%;
    -webkit-box-shadow: none;
    margin-bottom: 1%;

  }
`;

const Img = styled.img`
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

const ShoeName = styled.p`
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

const Price = styled.p`
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

const Button = styled.a`
  color: black;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 700;
  &:hover {
    color: red;
    cursor: pointer;
  }
`;

const SectionFour = () => {
  return (
    <Container>
      <Description>New Arrivals</Description>
      <Wrapper>
        <ImgBox>
          <Img src={Shoe1} />
          <ShoeName>Men Black Half Shoe </ShoeName>
          <Price>$900</Price>
          <Button href="">Shop Now</Button>
        </ImgBox>
        <ImgBox>
          <Img src={Shoe2} />
          <ShoeName>Men Grey Half Shoe </ShoeName>
          <Price>$1000</Price>
          <Button href="">Shop Now</Button>
        </ImgBox>
        <ImgBox>
          <Img src={Shoe3} />
          <ShoeName>Men Brown Half Shoe </ShoeName>
          <Price>$1,000</Price>
          <Button href="">Shop Now</Button>
        </ImgBox>
        <ImgBox>
          <Img src={Shoe4} />
          <ShoeName>Unisex Brown Sandal </ShoeName>
          <Price>$600</Price>
          <Button href="">Shop Now</Button>
        </ImgBox>
      </Wrapper>
    </Container>
  );
};

export default SectionFour;
