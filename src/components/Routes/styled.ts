import styled from 'styled-components';

export const StyledWrapper = styled.div`
    display: inline-block;
`;

interface PropsI {
    isActive?: boolean
}

export const StyledRoute = styled.span<PropsI>`${(props) => `
    ${props.isActive && `
        border-radius: 8px;
        background-color: ${props.theme.bgColor.primary};
    `}
    margin-right: 15px;
    padding: 15px;
    color: ${props.theme.colors.primaryTextColor};
    font-size: 16px;
    line-height: 19px;
`}`;

