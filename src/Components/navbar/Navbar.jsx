import styled from "styled-components";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { NavLink, Link } from "react-router-dom";
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
    color: ee0000#;
    cursor: pointer;
  }
`;

const CartCount = styled.span`
  margin-left: 10px;
  color: #fff;
`;

const UserImg = styled.div`
  display: flex;
  padding-right: 20px;
  svg {
    width: 28px;
    height: 28px;
    fill: #fff;
    &:hover {
      fill: #ee0000;
    }
  }
`;

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);
  return (
    <>
      <NavContainer>
        <BrandName>ObaSoles</BrandName>

        <NavLinks>
          <NavItems to="/" exact>
            Home
          </NavItems>
          <NavItems to="/product">Product</NavItems>
          <NavItems to="/about">About</NavItems>
          <NavItems to="/contact">Contact</NavItems>
          <NavItems to="/blog">Blog</NavItems>
        </NavLinks>
        <CartContainer>
          <Link to="/login">
            <UserImg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  clipRule="evenodd"
                />
              </svg>
            </UserImg>
          </Link>

          <FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: "19px" }} />
          <CartCount>{cartCount}</CartCount>
        </CartContainer>
      </NavContainer>
    </>
  );
};

export default Navbar;
