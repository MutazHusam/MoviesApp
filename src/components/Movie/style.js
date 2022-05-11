import styled from "styled-components";
import { FlexBox } from "../../GlobalStyles/styles";

export const MovieDiv = styled(FlexBox)`
  width: 100%;
  justify-content: center;
  align-items: center;
  /* height: 300px; */
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
