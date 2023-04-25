import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto 40px;
  max-width: ${({ theme }) => theme.maxWidth};
`;

export const StyledTitle = styled.span`
  font-size: 32px;
  line-height: 38px;
`;