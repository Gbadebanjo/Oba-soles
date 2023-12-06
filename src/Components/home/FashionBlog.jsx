import styled from "styled-components";
import { Description } from "./SectionFour";

const Container = styled.div`
  height: 70%;
  weight: 100%;
  background-color: #e3f7ff;
  `;

const Wrapper = styled.div`
  height: 70%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #004159;
`;

const CardContainer = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const Img = styled.img`
height: 400px;
weight:
`;

const Title = styled.h1`
font-size: 2rem;
font-weight: 700;
color: white;
font-family: 'Roboto', sans-serif;
`;


 
const FashionBlog = () => {
  return (
    <Container>
      <Description>Read Fashion Tips</Description>
      <Wrapper>
        <CardContainer>
          <Title>How to wear white sneakers</Title>
        </CardContainer>
        <CardContainer>
          <Title>How to wear white sneakers</Title>
        </CardContainer>
        <CardContainer>
          <Title>How to wear white sneakers</Title>
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default FashionBlog;
