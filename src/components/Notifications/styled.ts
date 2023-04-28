import styled from "styled-components";

export const StyledNotification = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  text-align: center;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.primaryTextColor};
`;