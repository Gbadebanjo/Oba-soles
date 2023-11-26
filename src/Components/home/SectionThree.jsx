import styled from "styled-components";
import ObaImg from "../../Image/ObaDesign2.jpg";

const Container = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: column-reverse;

  align-items: center;

`;
const Description = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  // float: left;
  box-sizing: border-box;
`;

const Text = styled.h1`
  color: red;
  font-size: 3rem;
  font-weight: 1000;
  text-align: center;
`;

const DesignBox = styled.div`
  height: auto;
  width: 100%;

  // display: flex;
  // justify-content: center;
  // align-items: center;
  // flex-wrap: wrap;
  background-image: url(${ObaImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  // flex-direction: column;
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
