import Image from "next/image";
import styled from "styled-components";

const Wrapper = styled.section`
  padding: 4em;
  background: rgba(7, 167, 34, 0.2);
  border: 1rem solid palevioletred;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  border: 1rem solid teal;

`;

const Grid = styled.div`
  display: flex;
  width: 300px;
  height: 150px;
  border: 1rem solid blueviolet;

`;
const Title = styled.h1`
  color: palevioletred;
`;

const Description = styled.p`
  color: #fff;
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 0.75rem;
  }
`


export function Card(props) {
  return (
    <Wrapper>
      <Title>The Benefits of Green Apples</Title>
      <Description>
        Green apples have a high fiber content which helps in increasing the
        harmful elements.
      </Description>
    <Container >
      <Grid></Grid>
      <Grid></Grid>
      <Grid></Grid>
      <Grid></Grid>
    </Container >
    </Wrapper>
  );
}

export default Card