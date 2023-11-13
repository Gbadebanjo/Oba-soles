import Navbar from "../navbar/Navbar";
import styled from "styled-components";
// import Footer from "../footer/Footer";

const Container = styled.div`
  height: 100vh;
`;
const Layout = ({ children }) => {
  return (
    <Container>
      <Navbar />
      {children}
      {/* <Footer/> */}
    </Container>
  );
};

export default Layout;
