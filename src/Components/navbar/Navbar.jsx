import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";
import { NavLink, Navigate } from "react-router-dom";
import UserContext from "../Context/UserContext";
import React from "react";
import Modal from "react-modal";
import { BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import ObaLogo from "../../Image/OBA SOLES 1.png";
import { AiOutlineSearch } from 'react-icons/ai';
import { FaAngleDown } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';

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
  animation: ${fadeIn} 0.10s ease forwards;
  animation-delay: ${props => props.index * 0.3}s;


  &:hover {
    cursor: pointer;
    text-decoration: underline;
    text-decoration-color: #C39F51;
  }
  &.active {
    color: #C39F51;
    text-decoration-color: #C39F51;
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
  background-color: #C39F51;
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
    <>
    <NewContainer>
    <NavLogo>
      <Logo src={ObaLogo} alt="Oba Logo" />
    </NavLogo>
    <NavLinkSerachBox><NavLinks>
          <NavItems to="/" exact>
            Home
          </NavItems>
          <NavItems index={0} to="/product">Product</NavItems>
          <NavItems index={1}to="/about">About</NavItems>
          <NavItems index={2}to="/contact">Contact</NavItems>
          <NavItems index={3}to="/blog">Blog</NavItems>
        
        </NavLinks>
          <SearchBox>
          <NewSearch type="search" />
          <StyledSearchIcon />
          </SearchBox></NavLinkSerachBox>
    
          <AccountCart>
          <AccountInfo>
            <AccountText>My Account</AccountText>
            <FaAngleDown />
          </AccountInfo>
          <CartBox>
          <StyledFaShoppingCart/>
          <Count>{cartCount}</Count>
          </CartBox>
          </AccountCart>
    </NewContainer>



      {/* <NavContainer>
        <BrandName>
          Oba<Sole>Soles</Sole>
        </BrandName>

        <NavLinks>
          <NavItems to="/" exact>
            Home
          </NavItems>
          <NavItems to="/product">Product</NavItems>
          <NavItems to="/about">About</NavItems>
          <NavItems to="/contact">Contact</NavItems>
          <NavItems to="/blog">Blog</NavItems>
        </NavLinks>
        <Search type="search" placeholder="Search for product" />
        <CartContainer>
          <Link to="/login">
            <UserImg onClick={openModal}>
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
              <UserName>{name}</UserName>
            </UserImg>
          </Link>
          <FontAwesomeIcon
            icon={faShoppingCart}
            style={{ fontSize: "23px", paddingBottom: "5px" }}
          />
          <CartCount>{cartCount}</CartCount>
        </CartContainer>
      </NavContainer>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="User Modal"
        style={{
          content: {
            width: "250px",
            height: "350px",
            margin: "auto",
            // position: "absolute", // Add this line
            // top: "5px", // Adjust this value as needed
            // left: "1000px",
            borderRadius: "20px",
            border: " 3px solid #ee0000",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.85)", // This is black with 75% opacity
          },
        }}
      >
        <div style={{ position: "absolute", top: "10px", right: "10px" }}>
          <MdClose onClick={closeModal} size={24} color="black" />
        </div>
        <h2>Hello, {name}</h2>
        <BreakPoint />
        <div onClick={goHome}>
          <MdHome size={24} color="#ee0000" />
          <SpanText>Home</SpanText>
        </div>
        <BreakPoint />
        <div>
          <MdEdit size={24} color="#ee0000" />
          <SpanText>Edit Profile</SpanText>
        </div>
        <BreakPoint />
        <div onClick={handleLogout}>
          <BiLogOut size={24} color="#ee0000" />
          <SpanText>Logout</SpanText>
        </div>
      </Modal> */}
    </>
  );
};

export default Navbar;
