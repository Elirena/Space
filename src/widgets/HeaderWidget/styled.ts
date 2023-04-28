import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto 40px;
  width: ${({ theme }) => theme.maxWidth};
`;

export const StyledTitle = styled.span`
  color: ${({theme }) => theme.colors.primaryTextColor};
  font-size: 32px;
  line-height: 38px;
`;