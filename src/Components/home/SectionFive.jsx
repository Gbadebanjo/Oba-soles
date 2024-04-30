import styled from 'styled-components';
import MenFoot from '../../Image/italian-man-style.png';

const Container = styled.div`
  height: 70vh;
  width: 100%;
  background-image: url(${MenFoot});
  background-size: contain;
  background-size: 110% auto;
  background-position: 25% ;
  // background-repeat: no-repeat;
  `;

const SectionFive = () => {
  return (
    <Container>
      SectionFive all 
      </Container>
  )
}

export default SectionFive