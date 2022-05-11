import { Container } from "../../GlobalStyles/styles";
import { StyledHeader, StyledParagraph } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
function Header() {
  return (
    <StyledHeader>
      <Container>
        <FontAwesomeIcon icon={faFilm} size="2x" />
        <StyledParagraph>React Movie</StyledParagraph>
      </Container>
    </StyledHeader>
  );
}

export default Header;
