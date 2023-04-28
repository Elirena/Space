import styled from "styled-components";

interface Props {
    isLoading: boolean
}

export const StyledWrapper = styled.div<Props>`${(props) => `
  border-radius: 16px;
  font-size: 24px;
  line-height: 80px;
  height: 80px;
  text-align: center;
  
  ${props.isLoading 
    ?`color: ${props.theme.colors.secondaryTextColor}; 
      background-color: ${props.theme.bgColor.secondary};
    `
    : `color: ${props.theme.colors.primaryTextColor}; 
      background-color: ${props.theme.bgColor.tertiary};
      cursor: pointer;
    `
  }`
}`;

