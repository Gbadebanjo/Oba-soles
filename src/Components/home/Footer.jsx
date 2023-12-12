import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  FaEnvelope,
  FaPhone,
  FaHome,
  FaProductHunt,
  FaInfoCircle,
  FaBlog,
  FaAddressCard,
} from "react-icons/fa";

const Container = styled.div`
  height: 300px;
  weight: 100%;
  background-color: #1b1b1b;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 6px solid red;
  padding: 40px;
`;

const BrandName = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  font-family: "Lucida Calligraphy", "Poppins", sans-serif;
  letter-spacing: -0.2rem;
  color: #ee0000;
  text-shadow: 0.1rem 0.1rem 0.1rem #000;
  margin: 0px;
`;

const Info = styled.div`
height: auto;
weight: 33%
color: #e4e4e4;
// background-color: #ff00ff;
padding: 0px;
margin: 0px;
flex: 1;
`;

const Context = styled.p`
  font-size: 0.9rem;
  color: #e4e4e4;
  padding-left: 5px;
  margin: 0px;
  display: flex;
  flex-wrap: wrap;
`;

const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  padding-top: 30px;
  margin: 0px;
`;

const Links = styled.a`
  background-color: #ee0000;
  border-radius: 50%;
  padding: 8px;
  font-size: 1.5rem;
  margin-right: 1rem;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    color: #000000;
    cursor: pointer;
  }
`;

const InfoDetails = styled.div`
  display: flex;
  flex-direction: row;
`;

const Contact = styled.div`
  display: flex;
  align-items: center;
  padding: 30px 20px 0px 5px;
  color: #efefef;
`;

const NavDetails = styled.div`
  height: auto;
  weight: 33%;
  color: #e4e4e4;
  flex: 1;
  padding-left: 120px;
`;

const Nav = styled.div`
  height: auto;
  weight: 33%;
  color: #ee0000;
  font-size: 1.7rem;
  font-weight: bold;
`;

const NavItems = styled.a`
  text-decoration: none;
  color: #efefef;
  font-size: 1rem;
  font-weight: 700;
  display: flex;
  text-decoration: none;
  flex-direction: column;
  &:hover {
    color: #ee0000;
    cursor: pointer;
  }
`;

const NavLinks = styled.a`
  display: flex;
  // flex-direction: column;
  list-style: none;
  color: #efefef;
  padding: 10px 0px 15px 0px;
  text-decoration: none;
  &:hover {
    color: #ee0000;
    cursor: pointer;
  }
`;

const NewsLetter = styled.div`
  height: auto;
  weight: 33%;
  color: #e4e4e4;
  flex: 1;
`;

const Heading = styled.h1`
  // font-size: 1.7rem;
  font-weight: bold;
  color: #ee0000;
  padding: 0px;
  margin: 0px;
`;

const Footer = () => {
  return (
    <Container>
      <Info>
        <BrandName>ObaSoles</BrandName>
        <Context>
          We are a reliable shoe company, we build, produce and sell all types
          of footwears. Incase of special request kindly reach out to us.
        </Context>
        <SocialMedia>
          <Links
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/ObaSoles"
          >
            <FontAwesomeIcon icon={faTwitter} color="white" />
          </Links>
          <Links
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/obasoles/"
          >
            <FontAwesomeIcon icon={faInstagram} color="white" />
          </Links>
          <Links
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/ObaSoles"
          >
            <FontAwesomeIcon icon={faFacebook} color="white" />
          </Links>
        </SocialMedia>
        <InfoDetails>
          <Contact>
            <FaEnvelope
              style={{ marginRight: "5px" }}
              size={20}
              color="#ee0000"
            />{" "}
            Obasole@gmail.com
          </Contact>
          <Contact>
            <FaPhone style={{ marginRight: "5px" }} size={20} color="#ee0000" />{" "}
            +2347037538575
          </Contact>
        </InfoDetails>
      </Info>
      <NavDetails>
        <Nav>Navigation</Nav>
        <NavItems>
          <NavLinks href="/home">
            <FaHome style={{ marginRight: "30px" }} size={23} color="#ee0000" />{" "}
            Home
          </NavLinks>
          <NavLinks href="/product">
            <FaProductHunt
              style={{ marginRight: "30px" }}
              size={23}
              color="#ee0000"
            />{" "}
            Product
          </NavLinks>
          <NavLinks href="/about">
            <FaInfoCircle
              style={{ marginRight: "30px" }}
              size={23}
              color="#ee0000"
            />{" "}
            About
          </NavLinks>
          <NavLinks href="/blog">
            <FaBlog style={{ marginRight: "30px" }} size={23} color="#ee0000" />{" "}
            Blog
          </NavLinks>
          <NavLinks href="/blog">
            <FaAddressCard
              style={{ marginRight: "30px" }}
              size={23}
              color="#ee0000"
            />{" "}
            Contact
          </NavLinks>
        </NavItems>
      </NavDetails>
      <NewsLetter>
        <Heading>SignUp to catch a vibe</Heading>
        <form>
          <input type="email" placeholder="Your email address" required />
          <button type="submit">Subscribe</button>
        </form>
      </NewsLetter>
    </Container>
  );
};

export default Footer;
