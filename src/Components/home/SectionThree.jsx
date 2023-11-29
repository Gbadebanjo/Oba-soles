import styled from "styled-components";
import ObaImg from "../../Image/ObaDesign2.jpg";

const Container = styled.div`
  height: 90%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    height: 100%;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const Description = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    width: 100%;
  }

`;

const Text = styled.h1`
  color: red;
  font-size: 4rem;
  font-weight: 1000;
  text-align: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    font-size: 2.4rem;
    padding: 0 0 50px 0;
  }
`;

const DesignBox = styled.div`
  height: auto;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 5px;
  object-fit: cover;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }

`;


const SectionThree = () => {
  return (
    <Container>
      <Description>
        <Text>A Productive Day Begins With A Sole From Us</Text>
      </Description>
      <DesignBox>
        <Img src={ObaImg} />
      </DesignBox>
    </Container>
  );
};

export default SectionThree;
