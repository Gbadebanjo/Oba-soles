import styled from "styled-components";
const Container = styled.div`
  height: 40%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  background-color: red;
`;

const Description = styled.h1`
display: center;
text-align: center;
font-size: 3rem;
font-weight: 700;
// font-family: "Roboto", sans-serif;
color: black;
`;

const Box = styled.div`
  height: 100%;
  width: 25%;
  background-color: blue;
  &:hover {
    background-color: yellow;
  } ;
`;

const SectionFour = () => {
  return (
    <>
    <Description>New Arrivals</Description>
    <Container>
      <Box>ALl</Box>
      <Box>ALl</Box>
      <Box>ALl</Box>
      <Box>ALl</Box>
    </Container>
  </>
    );
};

export default SectionFour;
