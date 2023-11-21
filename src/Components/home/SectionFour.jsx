import styled from "styled-components";
import Shoe1 from "../../Image/Sole1.jpg";
import Shoe2 from "../../Image/Sole2.jpg";
import Shoe3 from "../../Image/Sole3.jpg";
import Shoe4 from "../../Image/Sole4.jpg";

const Container = styled.div`
  height: 50%;
  width: 100%;
  // background-color: red;
`;

const Description = styled.h1`
  display: center;
  text-align: center;
  font-size: 3rem;
  font-weight: 700;
  color: black;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ImgBox = styled.div`
  height: 350px;
  width: 300px;
  display: flex;
  margin: 1%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 0px -1px 15px -5px #dad0d0;
  box-shadow: 0px -1px 15px -5px #a8a4a4;
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

const SectionFour = () => {
  return (
    <Container>
      <Description>New Arrivals</Description>
      <Wrapper>
        <ImgBox>
          <Img src={Shoe1} />
        </ImgBox>
        <ImgBox>
          <Img src={Shoe2} />
        </ImgBox>
        <ImgBox>
          <Img src={Shoe3} />
        </ImgBox>
        <ImgBox>
          <Img src={Shoe4} />
        </ImgBox>
      </Wrapper>
    </Container>
  );
};

export default SectionFour;