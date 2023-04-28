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
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({theme }) => theme.colors.primaryTextColor};
  font-size: 32px;
  line-height: 38px;
  letter-spacing: 1px;
  font-weight: 500;
  margin-bottom: 15px;
`;

export const StyledDetails = styled.div`
  margin: 20px 0 8px;
  color: ${({theme }) => theme.colors.secondaryTextColor};
`;

export const StyledDate = styled.span`
  margin-right: 10px;
`;

export const StyledText = styled.div`
  line-height: 22px;
  max-height: 132px;
  letter-spacing: 1px;
  -ms-text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  overflow: hidden;
 -ms-line-clamp: 6;
 -webkit-line-clamp: 6;
  line-clamp: 6;
  display: -webkit-box;
  display: box;
  word-wrap: break-word;
  -webkit-box-orient: vertical;
  box-orient: vertical;  
`;

export const StyledPress = styled.a`
  display: inline-block;
  margin-top: 20px;
  cursor: pointer;
  text-decoration: underline;
`;