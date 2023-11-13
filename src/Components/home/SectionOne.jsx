import React from 'react'
import styled from 'styled-components';
import Shoe1 from '../../Image/Brouge.jpg'

const Container = styled.div`
width: 100%;
height: 350px;
border: 1px solid red;
background-image: url(${Shoe1});
background-size: cover;
background-position: center;
background-attachment: fixed;


`
const SectionOne = () => {
  return (
    <Container>SectionOne</Container>
  )
}

export default SectionOne