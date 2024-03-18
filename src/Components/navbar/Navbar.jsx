import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";
import { NavLink, Navigate } from "react-router-dom";
import UserContext from "../Context/UserContext";
import React from "react";
import Modal from "react-modal";
import { BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import ObaLogo from "../../Image/OBA SOLES 1.png";
import { AiOutlineSearch } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const fadeIn = keyframes`
  // from { opacity: 0; transform: translateY(-20px); }
  // to { opacity: 1; transform: translateY(0); }
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
  position: sticky;
  top: 10px;
  z-index: 100;
`;

const NavLogo = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  justify-content: center;
  animation: ${fadeIn} 0.8s ease forwards;
  animation-delay: 0.2s;
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
`;

const NewSearch = styled.input`
  height: 35%;
  width: 100%;
  border-radius: 8px;
  padding-left: 32px;
  font-size: 1rem;
`;

const StyledSearchIcon = styled(AiOutlineSearch)`
  position: absolute;
  height: 25px;
  width: 25px;
  left: 8px;
  top: 38%;
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
`;

const Navbar = () => {
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);
  const { name, setName } = React.useContext(UserContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    if (name) {
      setIsModalOpen(true);
    } else {
      navigate("/login");
    }
  }

  function closeModal() {
    setIsModalOpen(false);
    navigate("/");
  }

  function handleLogout() {
    localStorage.clear();
    setName("");
    closeModal();
  }

  function goHome() {
    window.location.href = "/";
  }

  useEffect(() => {
    const storedName = localStorage.getItem("name");

    if (storedName) {
      setName(storedName);
    }
  }, []);

  return (
    <NewContainer>
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
          <StyledSearchIcon />
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
  );
};

export default Navbar;
