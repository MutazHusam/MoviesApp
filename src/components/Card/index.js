import { FlexBox } from "../../GlobalStyles/styles";
import { LeftBox, StyledCard, RightBox } from "./style";

function Card({ImgUrl, ActorName }) {
    return(
    <>
        <StyledCard>
          <FlexBox>
              <LeftBox>
                <img src={ImgUrl} alt=''/>
              </LeftBox>
              <RightBox>
                <p>{ActorName}</p>
              </RightBox>
          </FlexBox>
        </StyledCard>  
    </>);
    
}
export default Card;