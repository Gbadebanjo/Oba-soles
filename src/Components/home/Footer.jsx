import styled from "styled-components";

const Container1 = styled.div`
height: 50px;
weight: 50px;
background-color: blue;
display: flex;
justify-content: center;
align-items: center;
// padding: 10px;
margin: 460px;
border-radius: 10px;
`;

const Container2 = styled.div`
height: 50%;
weight: 50%;
background-color: red;
`;
const Footer = () => {
  return (
    <Container1>Footer</Container1>
    // <Container2>Footer</Container2>
  )
}

export default Footer;