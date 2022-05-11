import { Container } from "../../GlobalStyles/styles";
import { HeroDiv } from "./style";

function HeroComponent({ Title, Description ,InnerDiv}) {
  return (
    <HeroDiv>
      <Container>
        <div>
          <h1>{Title}</h1>
          <p>{Description}</p>
        </div>
        {InnerDiv}
      </Container>
    </HeroDiv>
  );
}

export default HeroComponent;
