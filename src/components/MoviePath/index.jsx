import { Container } from "../../GlobalStyles/styles";
import { StyledDiv, StyledParagraph } from "./style";
function MoviePath({MovieName}) {
  return (
    <StyledDiv>
      <Container>
        <StyledParagraph>Back /{MovieName}</StyledParagraph>
      </Container>
    </StyledDiv>
  );
}

export default MoviePath;
