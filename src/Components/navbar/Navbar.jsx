import styled from "styled-components";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from 'react-router-dom';

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1rem;
  background-color: #232323;
  position: fixed;
  width: 100%;
  height: 50px;
  opacity: 0.9; // to make the navbar semi-transparent
  transition: opacity 0.3s ease; // animate the opacity change

  &:hover {
    opacity: 0.5; // make the navbar fully visible when the mouse hovers over it
  }
`;

const BrandName = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  font-family: "Lucida Calligraphy", "Poppins", sans-serif;
  letter-spacing: -0.2rem;
  color: #ee0000;
  text-shadow: 0.1rem 0.1rem 0.1rem #000;
  padding: 0 1rem;
  margin-left: 1%; 
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
`;

const NavItems = styled(NavLink)`
  text-decoration: none;
  color: #efefef;
  font-size: 1.2rem;
  font-weight: 500;
  margin-left: 1.5rem;
  &:hover {
    color: #ee0000;
    cursor: pointer;
  }
  &.active {
    color: #ee0000;
  }
`;

const CartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  color: #efefef;
  &:hover {
    color: #ee0000;
    cursor: pointer;
  }
`;

const CartCount = styled.span`
  margin-left: 10px;
  color: #fff;
`;

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);
  return (
    <>
      <NavContainer>
        <BrandName>ObaSoles</BrandName>
        <NavLinks>
        <NavItems to="/" exact>Home</NavItems>
          <NavItems to="/product">Product</NavItems>
          <NavItems to="/about">About</NavItems>
          <NavItems to="/contact">Contact</NavItems>
          <NavItems to="/blog">Blog</NavItems>
        </NavLinks>
        <CartContainer>
          <FontAwesomeIcon icon={faShoppingCart} />
          <CartCount>{cartCount}</CartCount>
        </CartContainer>
      </NavContainer>
    </>
  );
};

export default Navbar;
