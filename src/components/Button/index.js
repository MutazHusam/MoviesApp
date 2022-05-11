import * as StyledComponents from './styles.js';

function Button({Text}) {
  return (
    <StyledComponents.StyledButton>
      {Text}
    </StyledComponents.StyledButton>
  );
}

export default Button;