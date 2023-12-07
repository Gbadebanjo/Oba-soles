import styled from "styled-components";
// import { Description } from "./SectionFour";

const Container = styled.div`
  height: 70%;
  weight: 100%;
  background-color: #e3f7ff;
  padding: 0px;
  margin: 0px;
  `;

  export const Description = styled.h1`
  display: center;
  text-align: center;
  font-size: 3rem;
  font-weight: 700;
  color: black;
  // padding-top: 0.5%;
  // padding: 0;
  margin-bottom: 5px;

  @media only screen and (max-width: 768px) {
    font-size: 3rem;
    padding: 0;
    margin: 5px;
  }
  `;


const Wrapper = styled.div`
  height: 70%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #004159;
  padding: 10px;
  // margin: 10px;
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
