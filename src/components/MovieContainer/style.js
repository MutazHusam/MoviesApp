import styled from "styled-components";
import { FlexBox } from "../../GlobalStyles/styles";

export const ParentDiv = styled(FlexBox)`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

export const MovieImgDiv = styled(FlexBox)`
  width: 30%;
  height: 100%;
  background: #0c0;
  img {
    width: 100%;
    object-fit: cover;
  }
`;
export const MovieDetailsDiv = styled(FlexBox)`
  flex-direction: column;
  justify-content: space-around;
  width: 75%;
  height: 100%;
  background: #00000080;
  padding-left: 25px;
  > div {
    display: flex;
    flex-direction: column;
    height: 75%;
    justify-content: space-around;
    p{
        text-align: justify;
        width: 95%;
    }
  }
  > div > div {
    width: 25%;
    justify-content: space-between;

    h5 {
      width: 20%;
    }
  }
`;
