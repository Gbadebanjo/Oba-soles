import styled from "styled-components";
import { Description } from "./SectionFour";
const Container = styled.div`
  height: 50%;
  weight: 100%;
  background-color: green;
`;

const Wrapper = styled.div`
  height: 50%;
  weight: 100%;
`;
const FashionBlog = () => {
  return (
    <Container>
      <Description>Read Fashion Tips</Description>
    </Container>
  );
};

export default FashionBlog;
