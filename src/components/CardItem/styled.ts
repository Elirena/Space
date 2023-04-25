import styled from "styled-components";

export const StyledWrapper = styled.div`${(props) => `
    background-color: ${props.theme.bgColor.primary};
    color: ${props.theme.colors.primaryTextColor};
    border-radius: 16px;
    padding: 24px;
    font-size: 16px;
    margin: 16px 0;
`}`;

export const StyledTitle = styled.div`
  font-size: 32px;
  line-height: 38px;
  margin-bottom: 15px;
`;

export const StyledDetails = styled.div`
  margin: 20px 0 8px;
  color: ${({theme }) => theme.colors.secondaryTextColor};
`;

export const StyledText = styled.div`
  line-height: 22px;
`;

export const StyledPress = styled.a`
  display: inline-block;
  margin-top: 20px;
  cursor: pointer;
  text-decoration: underline;
`;