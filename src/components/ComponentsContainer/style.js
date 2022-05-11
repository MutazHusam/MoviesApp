import styled from "styled-components";
import { Container } from "../../GlobalStyles/styles";

export const MoviesDiv = styled(Container)`
  flex-direction: column;
  justify-content: space-between;
  /* height: 580px; */
  align-items: flex-start;
  h1 {
    font-family: "Abel", sans-serif;
    color: #000;
  }
  > div {
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 20px;
  }
  > div > div {
    width: 24%;
    margin-bottom: 10px;
  }
  margin-bottom: 50px;
`;
