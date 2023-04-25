import styled from "styled-components";

export const StyledButton = styled.div`${(props) => `
  border-radius: 16px;
  font-size: 24px;
  line-height: 80px;
  height: 80px;
  text-align: center;
  cursor: pointer;
  color: ${props.theme.colors.primaryTextColor}; 
  background-color: ${props.theme.bgColor.tertiary};
`}`;