import styled from "styled-components";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem rem;
  background-color: #232323;
`;

const BrandName = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  font-family: "Lucida Calligraphy", "Poppins", sans-serif;
  letter-spacing: -0.2rem;
  color: #ee0000;
  text-shadow: 0.1rem 0.1rem 0.1rem #000;
  padding: 0 1rem;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
`;

const NavItems = styled.a`
  text-decoration: none;
  color: #efefef;
  font-size: 1.2rem;
  font-weight: 500;
  margin-left: 1.5rem;
  &:hover {
    color: #ee0000;
    cursor: pointer;
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
          <NavItems href="/">Home</NavItems>
          <NavItems href="/products">Products</NavItems>
          <NavItems href="/about">About</NavItems>
          <NavItems href="/contact">Contact</NavItems>
          <NavItems href="/blog">Blog</NavItems>
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
