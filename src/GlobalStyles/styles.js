import styled from "styled-components";

export const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Container = styled(FlexBox)`
  width: 80%;
  margin: auto;
  color: #fff;
  align-items: center;
`;
