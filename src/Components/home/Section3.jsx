import styled from "styled-components";
import ShoeImage from "../../Image/mock up shoe.png";

const Container = styled.div`
  display: flex;
  height: 70vh;
  width: 100%;
  background-color: #c39f51;

  @media screen and (max-width: 768px) {
    height: 40vh;
    flex-direction: row;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 45%;
  font-family: poppins;
  color: #000;
  padding: 4% 2% 0 6%;

  @media screen and (max-width: 768px) {
    width: 50%;
    padding: 4% 1% 0 2%;
  }
`;

const About = styled.h1`
  font-size: 3vw;
  font-weight: 500;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

const About2 = styled.h1`
  font-size: 5vw;
  font-weight: 700;
  margin: 0;
  padding-bottom: 10px;

  @media screen and (max-width: 768px) {
    font-size: 30px;
    padding-bottom: 5px;
  }
`;

const About3 = styled.h1`
  font-size: 40px;
  font-weight: 500;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

const ImgContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  position: relative;

  @media screen and (max-width: 768px) {
    height: 100%;
    width: 60%;
  }
`;

const Img = styled.img`
  height: 80%;
  width: 100%;
  object-fit: contain;
  position: absolute;
  bottom: 0;

  @media screen and (max-width: 768px) {
    height: 65%;
  }
`;

const StyledButton = styled.button`
  width: 230px;
  color: #fff;
  background-color: #292929;
  border: none;
  border-radius: 10px;
  font-size: 30px;
  font-weight: 700;
  font-family: "Poppins";
  cursor: pointer;
  transition: all 350ms;
  padding: 5px 15px;

  &:hover {
    background-color: #fff;
    color: #000;
  }

  @media screen and (max-width: 768px) {
    font-size: 18px;
    padding: 5px 5px;
    width: 150px;
  }
`;

const Section3 = () => {
  return (
    <Container>
      <Text>
        <About>About Us</About>
        <About2>We Provide High Quality Products</About2>
        <About3>Classic or Latest trends!!! We deliver 100%</About3>
        <StyledButton>About Us</StyledButton>
      </Text>
      <ImgContainer>
        <Img src={ShoeImage} alt="shoe" />
      </ImgContainer>
    </Container>
  );
};

export default Section3;
