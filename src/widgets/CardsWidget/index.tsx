import React from 'react';
import { Button, CardsList } from '../../components';
import { StyledWrapper } from './styled';

export const CardsWidget = () => {
    return (
        <StyledWrapper>
            <CardsList />
            <Button />
        </StyledWrapper>
    );
};