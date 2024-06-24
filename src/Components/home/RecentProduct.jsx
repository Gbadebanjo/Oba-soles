import styled from "styled-components";
import Shoe1 from "../../Image/Sole1.jpg";
import Shoe2 from "../../Image/Sole2.jpg";
import Shoe3 from "../../Image/Sole3.jpg";
import Shoe4 from "../../Image/Sole4.jpg";
import { FaRegHeart } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import { useState } from "react";

const Container = styled.div`
  height: auto;
  width: 100%;

  @media only screen and (max-width: 768px) {
    height: auto;
  }
`;

export const Description = styled.h1`
  display: center;
  text-align: left;
  padding-left: 3%;
  font-size: 2rem;
  font-weight: 700;
  color: #c39f51;
  padding-top: 1%;

  @media only screen and (max-width: 768px) {
    font-size: 1.5rem;
    padding: 0;
    margin: 5px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  overflow-x: auto;
  max-width: 100%;

   & > * {
    min-width: 200px; /* Adjust based on your content */
  }

   /* Hide scrollbar for Chrome, Safari and Opera */
  // &::-webkit-scrollbar {
    // display: none;
  // }

  /* Hide scrollbar for IE, Edge, and Firefox */
  // -ms-overflow-style: none;  /* IE and Edge */
  // scrollbar-width: none;  /* Firefox */
`;
const SavePercent = styled.div`
  position: absolute;
  width: 35%;
  height: 8%;
  background-color: #c39f51;
  top: 0;
  border-radius: 5px;
  display: none;
  justify-content: center;
  align-items: center;
  right: 0;
  font-weight: 400;
  font-size: 1.1rem;
  font-type: "Poppins";
  color: #fff;

  @media only screen and (max-width: 768px) {
    width: 25%;
    height: 5%;
  }
`;

const StyledFaHeart = styled(FaRegHeart)`
  color: #c39f51;
  display: none;
  width: 25px;
  height: 25px;
  position: absolute;
  right: 3%;
  cursor: pointer;
`;

const Button = styled.a`
  color: black;
  display: none;
  justify-content: flex-end;
  text-align: center;
  align-items: center;
  font-size: 1.1rem;
  cursor: pointer;
  font-weight: 700;
  color: #c39f51;
`;

const ImgBox = styled.div`
  height: 250px;
  width: 200px;
  margin: 0% 1%;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 0px -1px 15px -5px #dad0d0;
  box-shadow: 0px -1px 15px -5px #a8a4a4;
  margin-bottom: 10%;
  position: relative;
  transition: all 3.9s ease;
  transition-delay: 1s;

  &:hover {
    ${StyledFaHeart} {
      display: block;
    }

    ${Button} {
      display: flex;
    }
  }

  @media only screen and (max-width: 768px) {
    height: 200px;
    width: 180px;
    padding-bottom: 20%;
    -webkit-box-shadow: none;
    margin-bottom: 1%;
  }
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: all 350ms;
  border-radius: 7px;
  &:hover {
    cursor: pointer;
  }
`;

const ShoeName = styled.p`
  color: black;
  font-size: 1.1rem;
  font-weight: 700;
  display: flex;
  margin: 0;
  padding: 0;
  padding-left: 5px;
`;

const ShoePrice = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1rem;
  font-weight: 700;
  gap: 10px;
  padding: 2px 7px;
  align-items: center;
  text-align: center;
  position: relative;
`;

const Price = styled.p`
  font-weight: 700;
  color: #000;
  margin: 0;
`;

const OldPrice = styled.p`
  text-decoration: line-through;
  color: #9ca3af;
  margin: 0;
`;

const StarandButton = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RecentProduct = () => {
  const [rating, setRating] = useState(0);

  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  return (
    <Container>
      <Description>Explore Products</Description>
      <Wrapper>
        <ImgBox>
          <Img src={Shoe1} />
          <SavePercent>SAVE 10%</SavePercent>
          <ShoeName>Men Black Half Shoe </ShoeName>
          <ShoePrice>
            <Price>$900</Price>
            <OldPrice>$1,000</OldPrice>
            <StyledFaHeart />
          </ShoePrice>
          <StarandButton>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
            />
            <Button href="#">Shop Now</Button>
          </StarandButton>
        </ImgBox>
        <ImgBox>
          <Img src={Shoe2} />
          <SavePercent>SAVE 10%</SavePercent>
          <ShoeName>Men Grey Half Shoe </ShoeName>
          <ShoePrice>
            <Price>$1000</Price>
            <OldPrice>$1,100</OldPrice>
            <StyledFaHeart />
          </ShoePrice>
          <StarandButton>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
            />
            <Button href="#">Shop Now</Button>
          </StarandButton>
        </ImgBox>
        <ImgBox>
          <Img src={Shoe3} />
          <ShoeName>Men Brown Half Shoe </ShoeName>
          <ShoePrice>
            <Price>$1000</Price>
            <OldPrice>$1,100</OldPrice>
            <StyledFaHeart />
          </ShoePrice>
          <StarandButton>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
            />
            <Button href="#">Shop Now</Button>
          </StarandButton>{" "}
        </ImgBox>
        <ImgBox>
          <Img src={Shoe4} />
          <ShoeName>Unisex Brown Sandal </ShoeName>
          <ShoePrice>
            <Price>$1000</Price>
            <OldPrice>$1,100</OldPrice>
            <StyledFaHeart />
          </ShoePrice>
          <StarandButton>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
            />
            <Button href="#">Shop Now</Button>
          </StarandButton>
        </ImgBox>
        <ImgBox>
          <Img src={Shoe4} />
          <ShoeName>Unisex Brown Sandal </ShoeName>
          <ShoePrice>
            <Price>$1000</Price>
            <OldPrice>$1,100</OldPrice>
            <StyledFaHeart />
          </ShoePrice>
          <StarandButton>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
            />
            <Button href="#">Shop Now</Button>
          </StarandButton>
        </ImgBox>
        <ImgBox>
          <Img src={Shoe4} />
          <ShoeName>Unisex Brown Sandal </ShoeName>
          <ShoePrice>
            <Price>$1000</Price>
            <OldPrice>$1,100</OldPrice>
            <StyledFaHeart />
          </ShoePrice>
          <StarandButton>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
            />
            <Button href="#">Shop Now</Button>
          </StarandButton>
        </ImgBox>
        <ImgBox>
          <Img src={Shoe4} />
          <ShoeName>Unisex Brown Sandal </ShoeName>
          <ShoePrice>
            <Price>$1000</Price>
            <OldPrice>$1,100</OldPrice>
            <StyledFaHeart />
          </ShoePrice>
          <StarandButton>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
            />
            <Button href="#">Shop Now</Button>
          </StarandButton>
        </ImgBox>
        <ImgBox>
          <Img src={Shoe4} />
          <ShoeName>Unisex Brown Sandal </ShoeName>
          <ShoePrice>
            <Price>$1000</Price>
            <OldPrice>$1,100</OldPrice>
            <StyledFaHeart />
          </ShoePrice>
          <StarandButton>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
            />
            <Button href="#">Shop Now</Button>
          </StarandButton>
        </ImgBox>
        <ImgBox>
          <Img src={Shoe4} />
          <ShoeName>Unisex Brown Sandal </ShoeName>
          <ShoePrice>
            <Price>$1000</Price>
            <OldPrice>$1,100</OldPrice>
            <StyledFaHeart />
          </ShoePrice>
          <StarandButton>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
            />
            <Button href="#">Shop Now</Button>
          </StarandButton>
        </ImgBox>
      </Wrapper>
    </Container>
  );
};

export default RecentProduct;
