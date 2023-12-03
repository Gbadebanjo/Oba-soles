import styled from "styled-components";
import Shoe1 from "../../Image/Sole1.jpg";
import Shoe2 from "../../Image/Sole2.jpg";
import Shoe3 from "../../Image/Sole3.jpg";
import Shoe4 from "../../Image/Sole4.jpg";

const Container = styled.div`
  height: auto;
  width: 100%;
  background-color: red;
`;

export const Description = styled.h1`
  display: center;
  text-align: center;
  font-size: 3rem;
  font-weight: 700;
  color: black;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  `;
  
  const ImgBox = styled.div`
  height: 350px;
  // background-color: white;
  width: 300px;
  margin: 0% 1%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 0px -1px 15px -5px #dad0d0;
  box-shadow: 0px -1px 15px -5px #a8a4a4;
  margin-bottom: 4%;
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: all 350ms;
  border-radius:7px;


  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

const Button = styled.a`
  color: black;
  // background-color: black;
  border: none;
  font-size: 1rem;
  font-weight: 700;
  padding: 1% 2%;
  // margin-top: 1%;
  // border-radius: 5px;
  // transition: all 350ms;
  // &:hover {
  //   background-color: white;
  //   color: black;
  //   border: 1px solid black;
  //   cursor: pointer;
  // }
`;

const Price = styled.p`
color: black;

`;

const SectionFour = () => {
  return (
    <Container>
      <Description>New Arrivals</Description>
      <Wrapper>
        <ImgBox>
          <Img src={Shoe1} />
          <Button>Shop Now</Button>
        </ImgBox>
        <ImgBox>
          <Img src={Shoe2} />
          <Button >Shop Now</Button>
        </ImgBox>
        <ImgBox>
          <Img src={Shoe3} />
          <Button>Shop Now</Button>
        </ImgBox>
        <ImgBox>
          <Img src={Shoe4} />
          <Button>Shop Now</Button>
        </ImgBox>
      </Wrapper>
    </Container>
  );
};

export default SectionFour;
