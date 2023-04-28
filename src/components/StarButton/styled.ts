import styled from 'styled-components';

interface PropsI {
    isActive: boolean;
}

export const StyledWrapper = styled.div<PropsI>`${(props) => `
    display: inline-block;
    margin-right: 10px;
    cursor: pointer;
    color: ${props.isActive
        ? props.theme.colors.primaryTextColor
        : props.theme.colors.secondaryTextColor
    };
`}`;
