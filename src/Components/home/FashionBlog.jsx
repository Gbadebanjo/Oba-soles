import styled from "styled-components";

const Container = styled.div`
  height: 70%;
  weight: 100%;
  background-color: #e3f7ff;
  padding: 0px;
  margin-top: 0px;
  `;

  const Description = styled.h1`
  display: center;
  text-align: center;
  font-size: 3rem;
  font-weight: 700;
  color: black;
  padding-top: 0.8%;
  padding: 10px;
  margin: 0px;

  @media only screen and (max-width: 768px) {
    font-size: 2.5rem;
    margin: 0px;
  }
  `;

const Wrapper = styled.div`
  height: 90%;
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

const CardImg = styled.img`
height: 550px;
weight: 500px;
object-fit: cover;
`;

const Title = styled.h1`
font-size: 2rem;
font-weight: 700;
color: white;
font-family: 'Roboto', sans-serif;
`;

const Date = styled.p`
font-size: 1rem;
font-weight: 700;
color: white;
font-family: 'Roboto', sans-serif;
`;

const Text = styled.p`
font-size: 1rem;
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
          <CardImg src="https://images.unsplash.com/photo-1581093458794-0c6b3b3d0a9c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2Vua2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" />
          <Title>How to wear white sneakers</Title>
          <Date>March 15, 2021</Date>
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ut! Cupiditate dolorum qui, dolor veniam dolores, repudiandae debitis vero quas consequuntur recusandae nulla modi consectetur obcaecati ratione inventore nostrum ullam.</Text>
        </CardContainer>
        <CardContainer>
          <CardImg src="https://images.unsplash.com/photo-1581093458794-0c6b3b3d0a9c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2Vua2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" />
          <Title>How to wear white sneakers</Title>
          <Date>March 15, 2021</Date>
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ut! Cupiditate dolorum qui, dolor veniam dolores, repudiandae debitis vero quas consequuntur recusandae nulla modi consectetur obcaecati ratione inventore nostrum ullam.</Text>
        </CardContainer>
        <CardContainer>
          <CardImg src="https://images.unsplash.com/photo-1581093458794-0c6b3b3d0a9c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2Vua2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" />
          <Title>How to wear white sneakers</Title>
          <Date>March 15, 2021</Date>
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ut! Cupiditate dolorum qui, dolor veniam dolores, repudiandae debitis vero quas consequuntur recusandae nulla modi consectetur obcaecati ratione inventore nostrum ullam.</Text>
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default FashionBlog;
