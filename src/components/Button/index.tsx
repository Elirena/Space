import React, { FC } from 'react';
import { StyledWrapper } from './styled';

interface Props {
    onClick(): void;
    isLoading: boolean;
}

export const Button: FC<Props> = ({ onClick, isLoading }) => {
    return (
        <StyledWrapper
            onClick={onClick}
            isLoading={isLoading}
        >
            {isLoading
                ? `Loading...`
                : `More`
            }
        </StyledWrapper>
    );
};