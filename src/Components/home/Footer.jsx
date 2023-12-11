import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const Container = styled.div`
  height: 350px;
  weight: 100%;
  background-color: #1b1b1b;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 6px solid red;
  padding: 20px;
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
  padding-top: 50px;
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
  padding: 50px 20px 0px 5px;
  // padding-right: 20px;
  color: #efefef;
`;

const NavDetails = styled.div`
  height: auto;
  weight: 33%;
  color: #e4e4e4;
  background-color: blue;
`;

const NewsLetter = styled.div`
  height: auto;
  weight: 33%;
  color: #e4e4e4;
`;

const Footer = () => {
  return (
    <Container>
      <Info>
        <BrandName>ObaSoles</BrandName>
        <Context>
          We are a reliable shoe company, we build, produce and sell all types
          of footwears. Incase of special request kindly react out to us.
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
        <BrandName>ObaSoles</BrandName>
        <Context>
          We are a reliable shoe company, we build, produce and sell all types
          of footwears. Incase of special request kindly react out to us.
        </Context>
      </NavDetails>
      <NewsLetter>
        <BrandName>ObaSoles</BrandName>
        <Context>
          We are a reliable shoe company, we build, produce and sell all types
          of footwears. Incase of special request kindly react out to us.
        </Context>
      </NewsLetter>
    </Container>
  );
};

export default Footer;
