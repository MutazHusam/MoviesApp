import { Container } from "../../GlobalStyles/styles";
import { HeroDiv } from "./style";

function HeroDetail({ ...props}) {
  return (
    <HeroDiv>
      <Container>
        {props.children}
      </Container>
    </HeroDiv>
  );
}

export default HeroDetail;
