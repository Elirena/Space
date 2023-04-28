import styled from 'styled-components';

interface PropsI {
    isActive?: boolean
}

export const StyledWrapper = styled.div`
    display: inline-block;
`;

export const StyledRoute = styled.span<PropsI>`${(props) => `
    ${props.isActive && `
        background-color: ${props.theme.bgColor.primary};
    `}
    border-radius: 8px;
    margin-left: 15px;
    padding: 15px;
    color: ${props.theme.colors.primaryTextColor};
    font-size: 16px;
    line-height: 19px;
`}`;

export const StyledCount = styled.span`
    display: inline-block;
    margin-left: 2px;
    width: 16px;
    text-align: right;
`;