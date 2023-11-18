import styled from "styled-components";
import ObaImg from "../../Image/ObaDesign2.jpg";

const Container = styled.div`
  height: 70vh;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
const Description = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px;
  float: left;
  box-sizing: border-box;
`;

const Text = styled.h1`
  color: red;
  font-size: 2rem;
  font-weight: 1000;
  text-align: center;
`;

const DesignBox = styled.div`
  height: 70vh;
  width: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-image: url(${ObaImg});
  background-size: cover;
  background-repeat: no-repeat;
  flex-direction: column;
  background-attachment: fixed;
`;

const SectionThree = () => {
  return (
    <Container>
      <Description>
        <Text>A Productive Day Begins With A Sole From Us</Text>
      </Description>
      <DesignBox />
    </Container>
  );
};

export default SectionThree;
