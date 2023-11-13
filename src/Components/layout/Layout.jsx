import Navbar from "../navbar/Navbar";
import styled from "styled-components";
// import Footer from "../footer/Footer";

const container = styled.div`
height: 100vh;
`;
const Layout = ({ children }) => {
  return (
    <container>
      <Navbar/>
      {children}
      {/* <Footer/> */}
    </container>
  );
}

export default Layout;