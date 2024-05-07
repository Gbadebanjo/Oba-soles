import styled from 'styled-components';
import MenFoot from '../../Image/italian-man-style.png';

const Container = styled.div`
  height: 70vh;
  width: 100%;
  background-image: url(${MenFoot});
  background-size: contain;
  background-size: 100% auto;
  background-position: 25% ;
  // background-repeat: no-repeat;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1000px) {
    height: auto;
    background-size: cover;
    background-position: center;
    background-attachment: scroll;
  }
  `;

  const Heading = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 5px solid #fff;
  height: 30%;
  width: 60%;
  margin-left: 80px;
  margin-top: 40px;
  justify-content: center;
  // margin-top: 30px;
  padding: 20px;

  @media screen and (max-width: 1000px) {
    width: 80%;
    margin-left: 40px;
    margin-top: 20px;
  }
  `;

  const FirstLine = styled.h1`
  font-size: 5rem;
  font-weight: 700;
  color: ${props => props.color || '#fff'};
  font-family: Poppins;
  margin: 0;
  padding: 10px;

  @media screen and (max-width: 1000px) {
    font-size: 3rem;
  }
  `;

  const Text = styled.p`
  font-size: 1.7rem;
  font-weight: 500;
  color: #fff;
  font-family: Poppins;
  margin-top: 3%;
  padding-left: 8%;
  width: 40%;

  @media screen and (max-width: 1000px) {
    // font-size: 1.5rem;
    width: 80%;
    padding-left: 10%;
  }
  `;

  const Button = styled.button`
  width: 15%;
  color: #fff;
  background-color: #c39f51;
  border-radius: 10px;
  border: none;
  font-size: 20px;
  font-weight: 500;
  font-family: "Poppins";
  transition: all 350ms;
  margin: 1% 8%;
  padding: 10px 15px;

  &:hover {
    background-color: #fff;
    color: #c39f51;
  }

  @media screen and (max-width: 1000px) {
    font-size: 18px;
    width: 150px;
    // margin: 10px;
    // padding: 10px 15px;
  }
`;

const SectionFive = () => {
  return (
    <Container>
      <Heading>
        <FirstLine>A MAN'S</FirstLine>
        <FirstLine color="#c39f51">WORLD</FirstLine>
      </Heading>
        <Text>Explore Our Collection Today And Discover The Perfect Product To Complement Your Style.</Text>
        <Button>Explore Our Product</Button>
      </Container>
  )
}

export default SectionFive