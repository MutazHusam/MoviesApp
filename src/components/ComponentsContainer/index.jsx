import { FlexBox } from "../../GlobalStyles/styles";
import { MoviesDiv } from "./style";
function ComponentsContainer({ Title, ...props }) {
  return (
    <MoviesDiv>
      <h1>{Title}</h1>
      <FlexBox>{props.children}</FlexBox>
    </MoviesDiv>
  );
}

export default ComponentsContainer;
