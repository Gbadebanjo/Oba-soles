import styled from "styled-components";
import CleanShoe from "../../Image/istockphoto-1023542632-612x612.jpg";
import { Link } from "react-router-dom";
const Container = styled.div`
  height: auto;
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
  height: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const CardContainer = styled.div`
  height: 550px;
  width: 450px;
  display: flex;
  flex-direction: column;
  align-text: start;
`;

const CardImg = styled.img`
  height: 280px;
  weight: 50px;
  object-fit: cover;
  border-radius: 5px;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 800;
  color: #5c5c5c;
  paddding: 0px;
  margin: 0px;
`;

const Date = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: #5c5c5c;
  font-family: "Roboto", sans-serif;
  padding: 0px;
  margin: 0px;
`;

const Text = styled.p`
  font-size: 1rem;
  font-weight: 700;
  color: black;
  font-family: "Roboto", sans-serif;
`;

const FashionBlog = () => {
  return (
    <Container>
      <Description>Read Fashion Tips</Description>
      <Wrapper>
        <CardContainer>
          <CardImg src={CleanShoe} />
          <Title>How to wear white sneakers</Title>
          <Date>March 15, 2021</Date>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ut!
            Cupiditate dolorum qui, dolor veniam dolores, repudiandae debitis
            vero quas consequuntur recusandae nulla modi consectetur obcaecati
            ratione inventore nostrum ullam.
          </Text>
          <Link to="/blog">Read More</Link>
        </CardContainer>
        <CardContainer>
          <CardImg src={CleanShoe} />
          <Title>How to wear white sneakers</Title>
          <Date>March 15, 2021</Date>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ut!
            Cupiditate dolorum qui, dolor veniam dolores, repudiandae debitis
            vero quas consequuntur recusandae nulla modi consectetur obcaecati
            ratione inventore nostrum ullam.
          </Text>
        </CardContainer>
        <CardContainer>
          <CardImg src={CleanShoe} />
          <Title>How to wear white sneakers</Title>
          <Date>March 15, 2021</Date>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ut!
            Cupiditate dolorum qui, dolor veniam dolores, repudiandae debitis
            vero quas consequuntur recusandae nulla modi consectetur obcaecati
            ratione inventore nostrum ullam.
          </Text>
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default FashionBlog;
