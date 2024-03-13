import styled from "styled-components";
import ShoeImage from "../../Image/Group 54.png";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  height: 70vh;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50%;
  background-color: #d00;
`;

const About = styled.h1`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  padding: 30px 50px;
  font-family: "inter", sans-serif;
`;

const About2 = styled.h1`
  width: 70%;
  font-size: 42px;
  font-weight: 700;
  color: #fff;
  padding: 30px 50px;
  font-family: "inter", sans-serif;
  line-height: 1.5;
`;

const ImgContainer = styled.div`
  width: 50%;
  height: 100%;
  // background-color: #0d0;
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Section3 = () => {
  return (
    <Container>
      <Text>
        <About>About Us</About>
        <About2>We Provide High Quality Shoes</About2>
      </Text>
      <ImgContainer>
        <Img src={ShoeImage} alt="shoe" />

        {/* <Img src="https://source.unsplash.com/random" alt="random" /> */}
      </ImgContainer>
    </Container>
  );
};

export default Section3;
