import styled from 'styled-components';
import MenFoot from '../../Image/italian-man-style (1).png'

const Container = styled.div`
  height: 55%;
  width: 100%;
  background-image: src(${MenFoot});
  background-size: cover;
  `;
const SectionFive = () => {
  return (
    <Container>SectionFive</Container>
  )
}

export default SectionFive