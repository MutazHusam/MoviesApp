import styled from "styled-components";
import { FlexBox } from "../../GlobalStyles/styles";
export const HeroDiv = styled(FlexBox)`
  width: 100%;
  height: 450px;
  background-repeat: no-repeat;
  background-image: url("https://www.wantedinrome.com/i/preview/storage/uploads/2021/12/italy-luca-animation-golden-globe-nomination-award.jpg");
  background-size: cover;
  background-size: 100% 110%;
  opacity: 1;
  flex-direction: column;
  align-items: flex-end;
  justify-content: end;
  position: relative;
  margin-bottom: 50px;
  :after {
    content: "";
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
  }

  > div {
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: flex-start;
  }
  div > div {
    z-index: 1;
    height: 25%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    p {
      font-weight: bold;
      font-size: 20px;
    }
  }
  h1 {
    font-weight: bold;
  }
  font-family: "Abel", sans-serif;
  letter-spacing: 1px;
`;
