import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";
import { NavLink, Navigate } from "react-router-dom";
import UserContext from "../Context/UserContext";
import React from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import ObaLogo from "../../Image/OBA SOLES 1.png";
import { AiOutlineSearch } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

const fadeIn = keyframes`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`;

const NewContainer = styled.div`
  width: 100%;
  height: 13vh;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  position: fixed;
  // top: 0;
  z-index: 1001;

  &.scrolled {
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    height: 10vh;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    height: 22vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
`;

const FirstLine = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledFaBars = styled(FaBars)`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    height: 25px;
    width: 25px;
    padding: 35px;
  }
`;

const NavLogo = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  justify-content: center;
  animation: ${fadeIn} 0.8s ease forwards;
  animation-delay: 0.2s;

  @media (max-width: 768px) {
    justify-content: center;
    width: 20%;
    height: 100%;
  }
`;

const Logo = styled.img`
  width: 100%;
  height: 90%;
  object-fit: contain;
  margin-top: 3px;
`;

const NavLinkSerachBox = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: space-between;
  list-style: none;
  width: 70%;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItems = styled(NavLink)`
  text-decoration: none;
  color: #000;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 700;
  animation: ${fadeIn} 0.1s ease forwards;
  animation-delay: ${(props) => props.index * 0.3}s;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
    text-decoration-color: #c39f51;
  }
  &.active {
    color: #c39f51;
    text-decoration-color: #c39f51;
    text-decoration: underline;
  }
`;

const SearchBox = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  animation: ${fadeIn} 0.5s ease forwards;
  animation-delay: 0.4s;

  @media (max-width: 768px) {
    width: 100%;
    height: 40%;
    align-items: flex-start;
  }
`;

const NewSearch = styled.input`
  height: 40%;
  width: 100%;
  border-radius: 8px;
  padding-left: 32px;
  font-size: 1rem;

  @media (max-width: 768px) {
    background-color: #c39f51;
    border-radius: 20px;
    padding-left: 8%;
    height: 65%;
    width: 90%;
  }
`;

const StyledSearchIcon = styled(AiOutlineSearch)`
  position: absolute;
  height: 30px;
  width: 30px;
  left: 2%;
  top: 38%;

  &.scrolled {
    top: 35%;
  }

  &.active {
    display: none;
  }

  @media (max-width: 768px) {
    top: 10%;
    left: 8%;
  }
`;

const AccountCart = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const AccountInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-right: 1px solid #000;
  padding-right: 10px;
  gap: 5px;
  height: 50%;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const AccountText = styled.p`
  font-size: 16px;
  font-weight: 700;
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0;
  padding-bottom: 5px;
`;

const CartBox = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const StyledFaShoppingCart = styled(FaShoppingCart)`
  height: 25px;
  width: 25px;
`;

const Count = styled.span`
  position: absolute;
  top: 10%;
  right: 0;
  background-color: #c39f51;
  color: #fff;
  border-radius: 50%;
  padding: 7px;
  font-size: 13px;
  height: 10px;
  width: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    left: 50%;
  }
`;

const StyledModal = styled(Modal)`
  width: 60%;
  height: 100vh;
  background-color: #cbab69;
  display: flex;
  border-radius: 0 15px 15px 0;
  outline: none;
  `;

const ModalContainer = styled.div`
// height: 20vh;
// weight: 100%;
gap: 30px;
// background-color: blue;
display: flex;
flex-direction: column;
`;

const UserImg = styled.img``;

const Navbar = () => {
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);
  const { name, setName } = React.useContext(UserContext);
  const [scrolled, setScrolled] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  // function handleLogout() {
  //   localStorage.clear();
  //   setName("");
  //   closeModal();
  // }

  function goHome() {
    window.location.href = "/";
  }

  // useEffect(() => {
  //   const storedName = localStorage.getItem("name");

  //   if (storedName) {
  //     setName(storedName);
  //   }
  // }, []);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const isScrolled = window.scrollY > 50;
  //     if (isScrolled !== scrolled) {
  //       setScrolled(!scrolled);
  //     }
  //   };

  //   document.addEventListener("scroll", handleScroll, { passive: true });

  //   return () => {
  //     // cleanup
  //     document.removeEventListener("scroll", handleScroll);
  //   };
  // }, [scrolled]);

  return (
    <>
      <NewContainer className={scrolled ? "scrolled" : ""}>
        <NavLogo>
          <Logo src={ObaLogo} alt="Oba Logo" />
        </NavLogo>
        <NavLinkSerachBox>
          <NavLinks>
            <NavItems to="/" exact>
              Home
            </NavItems>
            <NavItems index={0} to="/product">
              Product
            </NavItems>
            <NavItems index={1} to="/about">
              About
            </NavItems>
            <NavItems index={2} to="/contact">
              Contact
            </NavItems>
            <NavItems index={3} to="/blog">
              Blog
            </NavItems>
          </NavLinks>
          <SearchBox>
            <NewSearch type="search" />
            <StyledSearchIcon className={scrolled ? "scrolled" : ""} />
          </SearchBox>
        </NavLinkSerachBox>
        <AccountCart>
          <AccountInfo>
            <AccountText>My Account</AccountText>
            <FaAngleDown />
          </AccountInfo>
          <CartBox>
            <StyledFaShoppingCart />
            <Count>{cartCount}</Count>
          </CartBox>
        </AccountCart>
      </NewContainer>
      <MobileContainer>
        <FirstLine>
          <StyledFaBars onClick={openModal} />
          <NavLogo>
            <Logo src={ObaLogo} alt="Oba Logo" />
          </NavLogo>
          <CartBox>
            <StyledFaShoppingCart />
            <Count>{cartCount}</Count>
          </CartBox>
        </FirstLine>
        <SearchBox>
          <NewSearch type="search" />
          <StyledSearchIcon />
        </SearchBox>
      </MobileContainer>
      <StyledModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Menu Modal"
      >
        <ModalContainer>
          <NavItems to="/" exact>
            Home
          </NavItems>
          <NavItems index={0} to="/product">
            Product
          </NavItems>
          <NavItems index={1} to="/about">
            About
          </NavItems>
          <NavItems index={2} to="/contact">
            Contact
          </NavItems>
          <NavItems index={3} to="/blog">
            Blog
          </NavItems>
          <NavItems index={4} onClick={goHome}>
            Logout
          </NavItems>
        </ModalContainer>
      </StyledModal>
    </>
  );
};

export default Navbar;
