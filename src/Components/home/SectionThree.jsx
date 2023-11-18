import styled from "styled-components";
import ObaImg from "../../Image/ObaDesign2.jpg";

const Container = styled.div`
  height: 70vh;
  width: 100%;
  // align-items: center;
  
  
`;
const Description = styled.div`
  // position: relative;
  // z-index: 1;
  width: 50%;
  // display: flex;
  // align-items: center;
  // justify-content: center;
  padding: 20px;
  float: left;
  // box-sizing: border-box;
`;

const Text = styled.h1`
  color: red;
  font-size: 2rem;
  font-weight: 1000;
  text-align: center;
`;

const DesignBox = styled.div`
position: relative;
// height: 50%;
width: 50%;
float: right;

object-position: center;
object-fit: cover;
`;

const DesignImg = styled.img`
position: absolute;
top: 0;
height: 100%;
width: 100%; // make the image take the full width of its container
object-fit: cover;
object-position: center;
`;
const SectionThree = () => {
  return (
    <Container>
      <Description>
        <Text>A Good Day begins With A Feet From ObaSoles</Text>
      </Description>
      <DesignBox><DesignImg src={ObaImg} /></DesignBox>
      
    </Container>
  );
};

export default SectionThree;
